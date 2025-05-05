import {
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';
import {CandlestickData} from '../../hooks/useCoinData';

interface CancleStickChartProps {
  data: CandlestickData[];
}

export const CancleStickChart = ({data}: CancleStickChartProps) => {
  return (
    <VictoryChart domainPadding={{x: 25}} theme={VictoryTheme.clean} animate>
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
          grid: {stroke: 'rgba(255, 255, 255, 0.1)'},
          ticks: {stroke: 'transparent'},
          tickLabels: {fill: '#ffffff', fontSize: 10, padding: 5},
        }}
        tickFormat={t => `$${t}`}
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
  );
};
