import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {CryptoCard} from '../crypto-card';
import {useFeaturedData} from '../../../../hooks/useFeaturedData';
import {FLAG_ICON, ROCKET_ICON, STAR_ICON} from '../../../../constants/icons';
import {CoinPrice} from '../../../../api/coinGecko';

type TabType = 'featured' | 'gainers' | 'losers';

const Featured = () => {
  const [activeTab, setActiveTab] = useState<TabType>('featured');
  const {data, loading, error} = useFeaturedData();

  // Render tab content based on active tab
  const renderTabContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#cdff00" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }

    const currentData = data[activeTab];

    return (
      <ScrollView style={styles.cardsContainer} horizontal>
        {currentData.map((crypto: CoinPrice) => (
          <View key={crypto.id} style={styles.cardWrapper}>
            <CryptoCard
              symbol={crypto.symbol.toUpperCase()}
              name={crypto.name}
              price={crypto.currentPrice}
              priceChangePercent={crypto.priceChangePercentage24h}
              chartData={crypto.sparkline}
              iconUrl={crypto.image}
              color={
                activeTab === 'losers'
                  ? '#FF3B30'
                  : activeTab === 'gainers'
                  ? '#cdff00'
                  : '#627EEA'
              }
            />
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <View>
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
    </View>
  );
};

export default Featured;
