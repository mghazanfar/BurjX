import {SafeAreaView, StyleSheet, View} from 'react-native';
import Featured from '../../components/market/tabs/featured';
import {AllCoins} from '../../components/market/all-coins';

const allCoins = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 159234.23,
    priceChangePercent: 5.42,
    chartData: [
      42000, 43500, 42800, 41900, 44000, 45200, 47000, 48500, 47800, 49200,
      50100,
    ],
    iconUrl:
      'https://cdn.pixabay.com/photo/2017/03/12/02/57/bitcoin-2136339_640.png',
    color: '#cdff00',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: 159234.23,
    priceChangePercent: 2.34,
    chartData: [
      2800, 2750, 2900, 3000, 2950, 3100, 3200, 3150, 3300, 3450, 3520,
    ],
    iconUrl:
      'https://static1.tokenterminal.com//ethereum/logo.png?logo_hash=fd8f54cab23f8f4980041f4e74607cac0c7ab880',
    color: '#627EEA',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: 159234.23,
    priceChangePercent: 2.34,
    chartData: [
      2800, 2750, 2900, 3000, 2950, 3100, 3200, 3150, 3300, 3450, 3520,
    ],
    iconUrl:
      'https://static1.tokenterminal.com//ethereum/logo.png?logo_hash=fd8f54cab23f8f4980041f4e74607cac0c7ab880',
    color: '#627EEA',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: 159234.23,
    priceChangePercent: 2.34,
    chartData: [
      2800, 2750, 2900, 3000, 2950, 3100, 3200, 3150, 3300, 3450, 3520,
    ],
    iconUrl:
      'https://static1.tokenterminal.com//ethereum/logo.png?logo_hash=fd8f54cab23f8f4980041f4e74607cac0c7ab880',
    color: '#627EEA',
  },
];

const Market = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Featured />
      <AllCoins coins={allCoins} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default Market;
