import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text} from '../../components/common/Text';
import {CandleStickChart} from '../../components/coin-details/candle-light-chart';
import {useCoinData} from '../../hooks/useCoinData';
import {useEffect, useState} from 'react';
import React from 'react';

interface CoinDetailsRouteParams {
  productId: string;
  isPositive: boolean;
  chartColor: string;
  icon: string;
  name: string;
  symbol: string;
  percentageText: string;
  formattedPrice: string;
}

const TIME_RANGES = [
  {label: '1D', value: '1'},
  {label: '1W', value: '7'},
  {label: '1M', value: '30'},
  {label: '1Y', value: '365'},
  {label: 'ALL', value: 'max'},
] as const;

export const CoinDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    productId,
    isPositive,
    chartColor,
    icon,
    name,
    symbol,
    percentageText,
    formattedPrice,
  } = route.params as CoinDetailsRouteParams;
  const {data, loading, fetchCoin} = useCoinData();
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>('1');

  useEffect(() => {
    fetchCoin(productId, selectedTimeRange as '1' | '7' | '30' | '365' | 'max');
  }, [productId, selectedTimeRange]);

  return (
    <View style={{paddingBottom: 67, flex: 1, backgroundColor: 'black'}}>
      <ImageBackground
        source={require('../../../assets/BG.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.parentContainer}>
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* Header with back button and title */}
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>←</Text>
              </TouchableOpacity>

              <View style={styles.titleContainer}>
                {/* Bitcoin logo rendered as a simple component */}
                <View style={styles.bitcoinLogo}>
                  <Image
                    source={{uri: icon}}
                    width={24}
                    height={24}
                    style={{borderRadius: 12}}
                  />
                </View>
                <Text style={styles.title}>
                  {name} ({symbol})
                </Text>
              </View>
            </View>

            {/* Price information */}
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>$ {formattedPrice}</Text>
              <View style={styles.percentageContainer}>
                <Text style={[styles.percentageText, {color: chartColor}]}>
                  {isPositive ? '+' : '-'} {percentageText} %
                </Text>
              </View>
            </View>

            {/* Chart placeholder */}
            <View style={styles.chartPlaceholder}>
              {loading ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="large" color="#CCFF00" />
                </View>
              ) : (
                <CandleStickChart data={data} />
              )}
            </View>

            {/* Time period selector */}
            <View style={styles.timeSelector}>
              {TIME_RANGES.map(({label, value}) => (
                <TouchableOpacity
                  key={value}
                  style={[
                    styles.timeButton,
                    selectedTimeRange === value && styles.activeTimeButton,
                  ]}
                  onPress={() => setSelectedTimeRange(value)}>
                  <Text
                    style={[
                      styles.timeButtonText,
                      selectedTimeRange === value &&
                        styles.activeTimeButtonText,
                    ]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={styles.expandButton}>
                <Text style={styles.expandButtonText}>↗</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  parentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  bitcoinLogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  bitcoinSymbol: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  priceContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  priceText: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentageText: {
    color: '#CCFF00',
    fontSize: 16,
    fontWeight: '600',
  },
  chartPlaceholder: {
    flex: 1,
    position: 'relative',
    marginBottom: 20,
  },
  priceIndicator: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#CCFF00',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  indicatorText: {
    color: '#121212',
    fontWeight: 'bold',
    fontSize: 14,
  },
  timeSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  timeButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  activeTimeButton: {
    backgroundColor: '#CCFF00',
  },
  timeButtonText: {
    color: '#AAAAAA',
    fontSize: 14,
    fontWeight: '600',
  },
  activeTimeButtonText: {
    color: '#121212',
  },
  expandButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandButtonText: {
    color: '#CCFF00',
    fontSize: 18,
  },
  homeIndicator: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  homeIndicatorBar: {
    width: 134,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 3,
    opacity: 0.3,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
