import {useState, useEffect, useCallback} from 'react';
import {coinGeckoApi, CoinPrice} from '../api/coinGecko';

export const useAllCoins = () => {
  const [coins, setCoins] = useState<CoinPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCoins = async (pageNum: number, isRefreshing: boolean = false) => {
    try {
      if (!isRefreshing) {
        setLoading(true);
      }
      const response = await coinGeckoApi.getCoinPrices('usd', pageNum, 10);

      if (isRefreshing) {
        setCoins(response.data);
      } else {
        setCoins(prev => [...prev, ...response.data]);
      }

      setHasMore(response.data.length === 10);
      setError(null);
    } catch (err) {
      setError('Failed to fetch coins');
      console.error(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [loading, hasMore]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    setCoins([]);
  }, []);

  useEffect(() => {
    fetchCoins(page, refreshing);
  }, [page, refreshing]);

  return {
    coins,
    loading,
    error,
    hasMore,
    refreshing,
    loadMore,
    onRefresh,
  };
};
