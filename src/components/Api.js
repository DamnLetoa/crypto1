import React, { useEffect, useState } from 'react';
import axios from 'axios';
import icon from '../images/icon.png';

function Api() {
  const [top4Coins, setTop4Coins] = useState([]);
  const [top100Coins, setTop100Coins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  const rapidAPIKey = '3ec4e8d7aemsh79113110eece4cfp10331djsn11bd9ac40176';

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const coinsUrl = 'https://l4chsalter-alternative-me-crypto-v1.p.rapidapi.com/v1/ticker/';
    const coinsOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': rapidAPIKey,
        'X-RapidAPI-Host': 'l4chsalter-alternative-me-crypto-v1.p.rapidapi.com',
      },
    };

    const imageApiUrl = 'https://coingecko.p.rapidapi.com/coins/markets';
    const imageApiParams = {
      vs_currency: 'usd',
      page: '1',
      per_page: '100',
      order: 'market_cap_desc',
    };
    const imageApiOptions = {
      method: 'GET',
      url: imageApiUrl,
      params: imageApiParams,
      headers: {
        'X-RapidAPI-Key': rapidAPIKey,
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
      },
    };

    try {
      const [coinsResponse, imageApiResponse] = await Promise.all([
        fetch(coinsUrl, coinsOptions),
        axios.request(imageApiOptions),
      ]);

      const coinsData = await coinsResponse.json();
      const sortedData = coinsData.sort((a, b) => b.price_usd - a.price_usd);
      const top100Coins = sortedData.slice(0, 100);
      console.log('Top 100 Coins:', top100Coins);

      const coinDataWithImages = top100Coins.map((coin) => {
        const matchingCoin = imageApiResponse.data.find((data) => data.id === coin.id);
        if (matchingCoin) {
          return {
            ...coin,
            image: matchingCoin.image,
          };
        }
        // Fallback image URL for icons that don't load
        return {
          ...coin,
          image: icon,
        };
      });

      setTop4Coins(coinDataWithImages.slice(0, 4));
      setTop100Coins(coinDataWithImages);
    } catch (error) {
      console.error(error);
    }
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = top100Coins
    .slice(indexOfFirstCoin, indexOfLastCoin)
    .filter((coin) => coin.price_usd && coin.percent_change_24h && coin.market_cap_usd);

  const totalPages = Math.ceil(top100Coins.length / coinsPerPage);

  return (
    <div>
      <div id="latestCoins">
        <div className="coin-list" style={{ display: 'flex' }}>
          {top4Coins.map((coin) => (
            <div key={coin.id} className="coin-item" style={{ marginRight: '120px' }}>
              <img src={coin.image || 'icon.png'} alt={coin.name} />
              <p>{coin.name}</p>
              <p>{coin.price_usd ? `$ ${parseFloat(coin.price_usd).toFixed(2)}` : '-'}</p>
              <p style={{ color: coin.percent_change_24h.includes('-') ? 'red' : 'green' }}>
                {coin.percent_change_24h ? `${parseFloat(coin.percent_change_24h).toFixed(2)}%` : '-'}
              </p>
            </div>
          ))}
        </div>
      </div>
      <section id='market'>
       
       

 <h1>Market update</h1>
      <div className="coin-table">
        <table className="coin-table__table">
          <thead>
            <tr id='ths'>
              <th>Coin</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {currentCoins.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <img src={coin.image || 'icon.png'} alt={coin.name} className="coin-table__icon" />
                  {coin.name}
                </td>
                <td>{coin.price_usd ? `$${parseFloat(coin.price_usd).toFixed(2)}` : '-'}</td>
                <td style={{ color: coin.percent_change_24h.includes('-') ? 'red' : 'green' }}>
                  {coin.percent_change_24h ? `${parseFloat(coin.percent_change_24h).toFixed(2)}%` : '-'}
                </td>
                <td>{coin.market_cap_usd ? `$${coin.market_cap_usd}` : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </section>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button id='navButton'
            key={pageNumber}
            className={`pagination__button${pageNumber === currentPage ? ' active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Api;
