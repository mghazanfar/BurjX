import {
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';

export const CancleStickChart = () => {
  return (
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
            fill: d => (d.close >= d.open ? '#CDFF00' : '#FF3440'),
            stroke: d => (d.close >= d.open ? '#CDFF00' : '#FF3440'),
            strokeWidth: 0,
            borderRadius: 16,
          },
        }}
        data={[
          {
            x: '3/1/23',
            open: 5,
            close: 10,
            high: 15,
            low: 0,
          },
          {
            x: '3/2/23',
            open: 10,
            close: 15,
            high: 20,
            low: 5,
          },
          {
            x: '3/3/23',
            open: 15,
            close: 20,
            high: 22,
            low: 10,
          },
          {
            x: '3/4/23',
            open: 20,
            close: 10,
            high: 25,
            low: 7,
          },
          {
            x: '3/5/23',
            open: 10,
            close: 8,
            high: 15,
            low: 5,
          },
        ]}
      />
    </VictoryChart>
  );
};
