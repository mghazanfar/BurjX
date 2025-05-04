// App.tsx
import React from 'react';
import {StyleSheet, View, Text, Dimensions, SafeAreaView} from 'react-native';
import {
  VictoryChart,
  VictoryCandlestick,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';

// Sample candlestick data (x, open, high, low, close)
const data = [
  {x: 1, open: 30, high: 40, low: 20, close: 25},
  {x: 2, open: 25, high: 35, low: 15, close: 20},
  {x: 3, open: 20, high: 30, low: 10, close: 30},
  {x: 4, open: 30, high: 40, low: 25, close: 15},
  {x: 5, open: 15, high: 25, low: 10, close: 20},
  {x: 6, open: 20, high: 30, low: 15, close: 25},
  {x: 7, open: 25, high: 35, low: 20, close: 30},
  {x: 8, open: 30, high: 40, low: 25, close: 35},
  {x: 9, open: 35, high: 45, low: 30, close: 25},
  {x: 10, open: 25, high: 35, low: 20, close: 30},
  {x: 11, open: 30, high: 40, low: 25, close: 35},
  {x: 12, open: 35, high: 45, low: 30, close: 40},
  {x: 13, open: 40, high: 50, low: 35, close: 45},
  {x: 14, open: 45, high: 55, low: 40, close: 35},
  {x: 15, open: 35, high: 45, low: 30, close: 40},
  {x: 16, open: 40, high: 50, low: 35, close: 45},
  {x: 17, open: 45, high: 55, low: 40, close: 50},
  {x: 18, open: 50, high: 60, low: 45, close: 55},
  {x: 19, open: 55, high: 65, low: 50, close: 60},
  {x: 20, open: 60, high: 70, low: 55, close: 65},
];

export function CancleStickChart() {
  const {width: screenWidth} = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chartContainer}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{x: 25}}
          width={screenWidth}
          height={400}
          padding={{top: 40, bottom: 40, left: 10, right: 10}}
          style={{
            background: {fill: 'transparent'},
          }}>
          <VictoryAxis
            style={{
              axis: {stroke: 'transparent'},
              ticks: {stroke: 'transparent'},
              tickLabels: {fill: 'transparent'},
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              axis: {stroke: '#333333', strokeWidth: 1},
              grid: {stroke: '#333333', strokeWidth: 0.5},
              ticks: {stroke: '#333333', strokeWidth: 1},
              tickLabels: {fill: '#ffffff', fontSize: 12, padding: 5},
            }}
            tickFormat={t => `$${t.toLocaleString()}`}
          />
          <VictoryCandlestick
            candleColors={{
              positive: '#cdff00',
              negative: '#ff3440',
            }}
            data={data}
            candleWidth={15}
            wickStrokeWidth={2}
            style={{
              data: {
                stroke: (d: any) => (d.close >= d.open ? '#cdff00' : '#ff3440'),
              },
            }}
          />
        </VictoryChart>

        <View style={styles.priceIndicator}>
          <Text style={styles.priceText}>$ 148k</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  priceIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#cdff00',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
