import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const url = 'https://api.api-ninjas.com/v1/quotes?category=success';
      const headers = { 'X-Api-Key': 'esvPe9bQBAXuR6T1T5+Xyw==208wagND0ipcI1ux' };
      try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setQuote(result[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchQuote();
  }, [setQuote, setLoading, setError]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <div className="quoteContainer">
      <p className="quote">
        Quote of the day:
        {quote.quote}
      </p>
      <p className="author">
        Author:
        {quote.author}
      </p>
    </div>
  );
};

export default Quote;