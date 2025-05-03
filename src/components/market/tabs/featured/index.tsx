import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {CryptoCard} from '../crypto-card';

export const FeaturesTabContent = () => {
  // Sample data for different cryptocurrencies
  const cryptoData = [
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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
      color: '#cdff00',
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 3521.78,
      priceChangePercent: 2.34,
      chartData: [
        2800, 2750, 2900, 3000, 2950, 3100, 3200, 3150, 3300, 3450, 3520,
      ],
      iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      color: '#627EEA',
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      price: 178.45,
      priceChangePercent: -1.23,
      chartData: [185, 183, 180, 182, 179, 176, 174, 177, 175, 173, 178],
      iconUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png',
      color: '#14F195',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cryptoData.map((crypto, index) => (
          <CryptoCard
            key={index}
            symbol={crypto.symbol}
            name={crypto.name}
            price={crypto.price}
            priceChangePercent={crypto.priceChangePercent}
            chartData={crypto.chartData}
            iconUrl={crypto.iconUrl}
            color={crypto.color}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    paddingVertical: 20,
  },
});

export default FeaturesTabContent;
