import {useState, useEffect} from 'react';

const useTrades = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [trades, setTrades] = useState([]);

  const fetchTrades = () => {
    fetch('http://localhost:8000/api/data', {credentials: 'same-origin'})
      .then(res => res.json())
      .then(data => {
        setTrades(data.trades);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchTrades, []);
  return {loading, error, trades}
};

export {useTrades};
