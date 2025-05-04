import {SafeAreaView, StyleSheet, View} from 'react-native';
import Featured from '../../components/market/tabs/featured';
import {AllCoins} from '../../components/market/all-coins';

const Market = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Featured />
      <AllCoins />
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
