import {useEffect, useState} from 'react';
import axios from 'axios';
import {format} from 'date-fns';

export interface CandlestickData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

type TimeRange = '1' | '7' | '30' | '365' | 'max';

export const useCoinData = () => {
  const [data, setData] = useState<CandlestickData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (productId?: string, days?: TimeRange) => {
    if (productId) {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://coingeko.burjx.com/coin-ohlc?productId=${productId}&days=${days}`,
        );

        // Transform the API response into the format expected by VictoryCandlestick
        const formattedData = response.data.map((item: any) => ({
          x: format(new Date(item.date), 'M/d/yy'),
          open: item.usd.open,
          high: item.usd.high,
          low: item.usd.low,
          close: item.usd.close,
        }));

        setData(formattedData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch candlestick data');
        console.error('Error fetching candlestick data:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error, fetchCoin: fetchData};
};
