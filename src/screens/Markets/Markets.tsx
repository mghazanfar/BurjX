import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {CryptoCard} from '../../components/market/tabs/crypto-card';

const {width} = Dimensions.get('window');

// Tab icons
const STAR_ICON = '⭐️';
const ROCKET_ICON = '🚀';
const FLAG_ICON = '🚩';

const CryptoTabbedView = () => {
  const [activeTab, setActiveTab] = useState('featured');

  // Sample data for different categories
  const cryptoData = {
    featured: [
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
    ],
    gainers: [
      {
        symbol: 'SOL',
        name: 'Solana',
        price: 159234.23,
        priceChangePercent: 8.76,
        chartData: [160, 162, 165, 168, 170, 172, 171, 173, 175, 177, 178],
        iconUrl:
          'https://s3.coinmarketcap.com/static-gravity/image/5cc0b99a8dd84fbfa4e150d84b5531f2.png',
        color: '#14F195',
      },
      {
        symbol: 'AVAX',
        name: 'Avalanche',
        price: 159234.23,
        priceChangePercent: 7.23,
        chartData: [38, 39, 38.5, 40, 41, 40.5, 41.5, 42, 42.5, 42.8, 42.9],
        iconUrl:
          'https://upload.wikimedia.org/wikipedia/en/0/03/Avalanche_logo_without_text.png',
        color: '#E84142',
      },
    ],
    losers: [
      {
        symbol: 'BNB',
        name: 'Binance',
        price: 159234.23,
        priceChangePercent: -5.42,
        chartData: [650, 645, 640, 635, 630, 625, 620, 615, 610, 605, 599],
        iconUrl:
          'https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png',
        color: '#F3BA2F',
      },
      {
        symbol: 'ADA',
        name: 'Cardano',
        price: 159234.23,
        priceChangePercent: -3.21,
        chartData: [
          0.62, 0.615, 0.61, 0.605, 0.6, 0.595, 0.59, 0.585, 0.58, 0.575, 0.58,
        ],
        iconUrl:
          'https://static1.tokenterminal.com//cardano/logo.png?logo_hash=b65ff508cd8e2188d6ac5e7ec92e90be28f0eb77',
        color: '#0033AD',
      },
    ],
  };

  // Render tab content based on active tab
  const renderTabContent = () => {
    const data = cryptoData[activeTab];

    return (
      <ScrollView style={styles.cardsContainer} horizontal>
        {data.map((crypto, index) => (
          <View key={index} style={styles.cardWrapper}>
            <CryptoCard
              symbol={crypto.symbol}
              name={crypto.name}
              price={crypto.price}
              priceChangePercent={crypto.priceChangePercent}
              chartData={crypto.chartData}
              iconUrl={crypto.iconUrl}
              color={
                activeTab === 'losers'
                  ? '#FF3B30'
                  : activeTab === 'gainers'
                  ? '#cdff00'
                  : crypto.color
              }
            />
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'featured' && styles.activeTab]}
          onPress={() => setActiveTab('featured')}>
          <Text style={styles.tabIcon}>{STAR_ICON} Featured</Text>
          <View
            style={[
              styles.tabIndicator,
              activeTab === 'featured' && styles.activeIndicator,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'gainers' && styles.activeTab]}
          onPress={() => setActiveTab('gainers')}>
          <Text style={styles.tabIcon}>{ROCKET_ICON} Top Gainers</Text>
          <View
            style={[
              styles.tabIndicator,
              activeTab === 'gainers' && styles.activeIndicator,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'losers' && styles.activeTab]}
          onPress={() => setActiveTab('losers')}>
          <Text style={styles.tabIcon}>{FLAG_ICON} Top Losers</Text>
          <View
            style={[
              styles.tabIndicator,
              activeTab === 'losers' && styles.activeIndicator,
            ]}
          />
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    // You can add styles for the active tab if needed
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 5,
    textTransform: 'capitalize',
    color: 'white',
  },
  tabIndicator: {
    height: 3,
    width: '100%',
    backgroundColor: 'transparent',
  },
  activeIndicator: {
    backgroundColor: '#cdff00',
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  cardWrapper: {
    flexDirection: 'row',
    marginRight: 4,
    flexWrap: 'nowrap',
  },
});

export default CryptoTabbedView;
