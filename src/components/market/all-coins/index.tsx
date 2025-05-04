import React from 'react';
import {
  Image,
  ScrollView,
  TextInput,
  View,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {CoinCard} from './coin';
import {useAllCoins} from '../../../hooks/useAllCoins';
import {Text} from '../../common/Text';

export const AllCoins = () => {
  const {coins, loading, error, hasMore, refreshing, loadMore, onRefresh} =
    useAllCoins();

  const handleScroll = (event: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const paddingToBottom = 20;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;

    if (isCloseToBottom && hasMore && !loading) {
      loadMore();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>All Coins</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={'#868686'}
          />
          <View style={styles.searchIconContainer}>
            <Image
              source={{
                uri: 'https://static-00.iconduck.com/assets.00/search-icon-512x512-dxj09ddf.png',
              }}
              style={styles.searchIcon}
            />
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading && coins.length === 0 ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#cdff00" />
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          <>
            {coins.map((coin, index) => (
              <CoinCard
                key={`${coin.id}-${index}`}
                symbol={coin.symbol}
                name={coin.name}
                price={coin.currentPrice}
                priceChangePercent={coin.priceChangePercentage24h}
                chartData={coin.sparkline}
                iconUrl={coin.image}
              />
            ))}
            {loading && (
              <View style={styles.loadingMoreContainer}>
                <ActivityIndicator size="small" color="#cdff00" />
              </View>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 70,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    paddingBottom: 10,
    borderBottomColor: '#CDFF00',
    borderBottomWidth: 1,
    width: 131,
    textAlign: 'center',
  },
  searchContainer: {
    backgroundColor: '#1a1a1a',
    width: '60%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
  searchInput: {
    width: '83%',
    fontSize: 20,
    color: 'white',
  },
  searchIconContainer: {
    marginLeft: 20,
  },
  searchIcon: {
    width: 22,
    height: 22,
  },
  scrollContainer: {
    gap: 2,
    marginTop: 16,
    position: 'relative',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingMoreContainer: {
    padding: 10,
    alignItems: 'center',
    height: 200,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 16,
    textAlign: 'center',
  },
});
