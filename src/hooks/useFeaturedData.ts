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
      const response = await coinGeckoApi.getCoinPrices('usd', 1, 60); // Fetch 60 coins to get enough data for all categories

      // Sort and filter data for each category
      const allCoins = response.data;

      // Featured: Top 20 by market cap
      const featured = [...allCoins]
        .sort((a, b) => b.marketCap - a.marketCap)
        .slice(0, 20);

      // Gainers: Top 20 by 24h price change
      const gainers = [...allCoins]
        .sort((a, b) => b.priceChangePercentage24h - a.priceChangePercentage24h)
        .slice(0, 20);

      // Losers: Top 20 by 24h price change (negative)
      const losers = [...allCoins]
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
