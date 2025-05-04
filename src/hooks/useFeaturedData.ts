import {useState, useEffect} from 'react';
import {coinGeckoApi, CoinPrice} from '../api/coinGecko';

export interface FeaturedData {
  featured: CoinPrice[];
  gainers: CoinPrice[];
  losers: CoinPrice[];
}

export const useFeaturedData = () => {
  const [data, setData] = useState<FeaturedData>({
    featured: [],
    gainers: [],
    losers: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetch 100 coins to ensure we have enough data for all categories
      const response = await coinGeckoApi.getCoinPrices('usd', 1, 100);

      // Sort and filter data for each category
      const allCoins = response.data;

      // Featured: Top 20 by market cap
      const featured = [...allCoins]
        .sort((a, b) => b.marketCap - a.marketCap)
        .slice(0, 20);

      // Gainers: Top 20 by 24h price change (only positive changes)
      const gainers = [...allCoins]
        .filter(coin => coin.priceChangePercentage24h > 0) // Only include positive changes
        .sort((a, b) => b.priceChangePercentage24h - a.priceChangePercentage24h)
        .slice(0, 20);

      // Losers: Top 20 by 24h price change (only negative changes)
      const losers = [...allCoins]
        .filter(coin => coin.priceChangePercentage24h < 0) // Only include negative changes
        .sort((a, b) => a.priceChangePercentage24h - b.priceChangePercentage24h)
        .slice(0, 20);

      setData({featured, gainers, losers});
      setError(null);
    } catch (err) {
      setError('Failed to fetch featured data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
};
