import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Text} from '../../../common/Text';

interface CryptoCardProps {
  symbol: string; // e.g., "BTC"
  name: string; // e.g., "Bitcoin"
  price: number; // e.g., 159234.23
  priceChangePercent: number; // e.g., 5.42
  chartData: number[]; // Array of price points for the chart
  iconUrl: string; // URL to the coin's icon
  color?: string; // Optional custom color for the chart
}

export const CryptoCard = ({
  symbol,
  name,
  price,
  priceChangePercent,
  chartData,
  iconUrl,
  color = '#cdff00', // Default to neon green if no color provided
}: CryptoCardProps) => {
  // Format price with commas and 2 decimal places
  const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Determine if price change is positive or negative
  const isPositive = priceChangePercent >= 0;
  const chartColor = isPositive ? '#CDFF00' : '#FF3440';

  return (
    <View style={styles.container}>
      {/* Coin Info */}
      <View style={styles.headerContainer}>
        <Image
          source={{uri: iconUrl}}
          style={styles.icon}
          resizeMode="contain"
          onError={e =>
            console.log('Image loading error:', e.nativeEvent.error)
          }
          onLoad={() => console.log('Image loaded successfully')}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.symbol}>{symbol}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>

      {/* Chart */}
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: chartData,
              },
            ],
          }}
          width={148}
          height={80}
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          withShadow={false}
          withHorizontalLines={false}
          withVerticalLines={false}
          chartConfig={{
            backgroundColor: '#171717',
            backgroundGradientFrom: '#171717',
            backgroundGradientTo: '#171717',
            decimalPlaces: 0,
            color: () => chartColor,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '0',
            },
            fillShadowGradient: 'transparent',
            fillShadowGradientOpacity: 0,
            strokeWidth: 1.5,
          }}
          bezier
          style={styles.chart}
        />
      </View>

      {/* Price Info */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$ {formattedPrice}</Text>
        <View style={[styles.percentContainer, {backgroundColor: '#232323'}]}>
          <Text
            style={[
              styles.percentText,
              {color: isPositive ? '#CDFF00' : '#FF3440'},
            ]}>
            {isPositive ? '+ ' : '- '}
            {Math.abs(priceChangePercent).toFixed(2)} %
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    borderColor: '#333333',
    borderWidth: 1,
    gap: 22,
    minWidth: 180,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  titleContainer: {
    marginLeft: 12,
    gap: 5,
  },
  symbol: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  chartContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: 'transparent',
  },
  chart: {
    paddingRight: 0,
    paddingLeft: 0,
    borderRadius: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  percentContainer: {
    paddingHorizontal: 3,
    paddingVertical: 2.5,
    borderRadius: 6,
  },
  percentText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});
