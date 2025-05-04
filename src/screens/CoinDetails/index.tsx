import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from '../../components/common/Text';

export const CoinDetails = () => {
  const navigation = useNavigation();

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
                  <Text style={styles.bitcoinSymbol}>₿</Text>
                </View>
                <Text style={styles.title}>Bitcoin (BTC)</Text>
              </View>
            </View>

            {/* Price information */}
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>$ 148,385.52</Text>
              <View style={styles.percentageContainer}>
                <Text style={styles.percentageText}>+ 5.42 %</Text>
              </View>
            </View>

            {/* Chart placeholder */}
            <View style={styles.chartPlaceholder}>
              {/* Chart will be implemented later */}
              <View style={styles.priceIndicator}>
                <Text style={styles.indicatorText}>$ 148k</Text>
              </View>
            </View>

            {/* Time period selector */}
            <View style={styles.timeSelector}>
              <TouchableOpacity
                style={[styles.timeButton, styles.activeTimeButton]}>
                <Text
                  style={[styles.timeButtonText, styles.activeTimeButtonText]}>
                  1H
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.timeButton}>
                <Text style={styles.timeButtonText}>1D</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.timeButton}>
                <Text style={styles.timeButtonText}>1W</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.timeButton}>
                <Text style={styles.timeButtonText}>1M</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.timeButton}>
                <Text style={styles.timeButtonText}>1Y</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.timeButton}>
                <Text style={styles.timeButtonText}>ALL</Text>
              </TouchableOpacity>

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
    backgroundColor: '#F7931A',
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
});
