import React, { useEffect, useState } from 'react';
import createClient from '../client.js';

const Text1Component = () => {
  const [separationData, setSeparationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "separation"]{
            title,
            text
        }`
      )
      .then((data) => {
        setSeparationData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {separationData && (
        <div>
          {separationData.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Text1Component;
