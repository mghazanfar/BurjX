import {
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  Text,
} from 'victory-native';
import {CandlestickData} from '../../hooks/useCoinData';
import {View, StyleSheet, Dimensions} from 'react-native';
import {G, Rect} from 'react-native-svg';

interface CandleStickChartProps {
  data: CandlestickData[];
}

export const CandleStickChart = ({data}: CandleStickChartProps) => {
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
      <VictoryChart theme={VictoryTheme.clean} domainPadding={{x: 25}}>
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
            tickLabels: {fill: 'black', fontSize: 10, padding: 5},
          }}
          tickFormat={formatYAxis}
          tickLabelComponent={
            <RoundedBackgroundLabel
              backgroundStyle={{
                fill: '#CDFF00',
                stroke: '#CDFF00',
                strokeWidth: 1,
              }}
              backgroundPadding={4}
            />
          }
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
});

const RoundedBackgroundLabel = (props: any) => {
  const {
    x,
    y,
    text,
    backgroundStyle,
    backgroundPadding = 4,
    index,
    ticks,
  } = props;

  // Check if this is the first top tick
  const isFirstTopTick = index === ticks?.length - 1;

  // Dimensions for background (only used for first top tick)
  const fontSize = props.style?.fontSize || 12;
  const textWidth = text.length * (fontSize * 0.6);
  const textHeight = fontSize * 1.2;
  const cornerRadius = 8;

  return (
    <G x={x} y={y}>
      <Rect
        x={-textWidth / 2 - backgroundPadding}
        y={-textHeight / 2 - backgroundPadding}
        width={textWidth + 2 * backgroundPadding}
        height={textHeight + 2 * backgroundPadding}
        rx={cornerRadius}
        ry={cornerRadius}
        fill={isFirstTopTick ? backgroundStyle.fill : 'transparent'}
        stroke={backgroundStyle.stroke}
        strokeWidth={isFirstTopTick ? backgroundStyle.strokeWidth : 0}
      />
      <Text
        textAnchor="middle"
        alignmentBaseline="middle"
        fill={isFirstTopTick ? props.style?.fill : '#878787'}
        fontSize={fontSize}>
        {text}
      </Text>
    </G>
  );
};
