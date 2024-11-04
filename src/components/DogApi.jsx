import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DogApi = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((resp) => {
        if (isMounted) {
          setData(resp.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.log('Error', err);
          setIsLoading(false);
        }
      });

    return () => { isMounted = false; }; 
  }, []); 

  return (
    <div>
      <h4>Dog API</h4>
      {isLoading ? (
        <p>Data is Loading...</p>
      ) : (
        <div>
          <img src={data.message} />
        </div>
      )}
    </div>
  );
}

export default DogApi;
