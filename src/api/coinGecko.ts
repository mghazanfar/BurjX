import axios from 'axios';

const BASE_URL = 'https://coingeko.burjx.com';

export interface CoinPrice {
  id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  priceChangePercentage24h: number;
  marketCap: number;
  image: string;
  productId: number;
  tradingVolume: number;
  sparkline: number[];
}

export interface CoinPricesResponse {
  data: CoinPrice[];
  total: number;
  page: number;
  pageSize: number;
}

export const coinGeckoApi = {
  getCoinPrices: async (
    currency: string = 'usd',
    page: number = 1,
    pageSize: number = 20,
  ): Promise<CoinPricesResponse> => {
    try {
      const response = await axios.get(`${BASE_URL}/coin-prices-all`, {
        params: {
          currency,
          page,
          pageSize,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching coin prices:', error);
      throw error;
    }
  },
};
