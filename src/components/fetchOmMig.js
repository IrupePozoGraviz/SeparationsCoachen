import React, { useEffect, useState } from 'react';
import createClient from '../client.js';

const Text2Component = () => {
  const [OmmigData, setOmMigData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    createClient
      .fetch(
        `*[_type == "Ommig"]{
            title,
            text
        }`
      )
      .then((data) => {
        setOmMigData(data);
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
      {OmmigData && (
        <div>
          {OmmigData.map((item) => (
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

export default Text2Component;