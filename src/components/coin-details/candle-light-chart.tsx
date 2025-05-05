import {
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';
import {CandlestickData} from '../../hooks/useCoinData';
import {View, Text, StyleSheet} from 'react-native';

interface CancleStickChartProps {
  data: CandlestickData[];
}

export const CancleStickChart = ({data}: CancleStickChartProps) => {
  // Find the highest value in the data
  const highestValue = Math.max(...data.map(d => d.high));
  const formattedPrice = `$${Math.round(highestValue / 1000)}k`;

  const formatYAxis = (value: number) => {
    return `$${Math.round(value / 1000)}k`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.priceIndicator}>
        <Text style={styles.indicatorText}>{formattedPrice}</Text>
      </View>
      <VictoryChart domainPadding={{x: 25}} theme={VictoryTheme.clean}>
        <VictoryAxis
          style={{
            axis: {stroke: 'transparent'},
            ticks: {stroke: 'transparent'},
            tickLabels: {fill: 'transparent'},
          }}
        />
        <VictoryAxis
          dependentAxis
          orientation="right"
          style={{
            axis: {stroke: 'rgba(255, 255, 255, 0.2)'},
            grid: {
              stroke: 'rgba(255, 255, 255, 0.1)',
              strokeWidth: 0.5,
            },
            ticks: {stroke: 'transparent'},
            tickLabels: {fill: '#ffffff', fontSize: 10, padding: 5},
          }}
          tickFormat={formatYAxis}
        />
        <VictoryCandlestick
          candleWidth={5}
          wickStrokeWidth={1}
          style={{
            data: {
              fill: '#CDFF00',
              stroke: '#CDFF00',
              strokeWidth: 0,
              borderRadius: 16,
            },
          }}
          data={data}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  priceIndicator: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#CCFF00',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    zIndex: 1,
  },
  indicatorText: {
    color: '#121212',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
