import {
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';
import {CandlestickData} from '../../hooks/useCoinData';
import {View, StyleSheet} from 'react-native';

interface CancleStickChartProps {
  data: CandlestickData[];
}

export const CancleStickChart = ({data}: CancleStickChartProps) => {
  const formatYAxis = (value: number) => {
    const valueInK = value / 1000;
    if (valueInK >= 1) {
      return `$${Math.round(valueInK)}k`;
    } else {
      return `$${value.toFixed(4)}`;
    }
  };

  return (
    <View style={styles.container}>
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
            axis: {stroke: 'transparent'},
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
              fill: (d: any) => (d.close >= d.open ? '#CDFF00' : '#FF3440'),
              stroke: (d: any) => (d.close >= d.open ? '#CDFF00' : '#FF3440'),
              strokeWidth: 0,
              borderRadius: 16,
            },
          }}
          data={data}
          padding={{left: 20, right: 20}}
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
