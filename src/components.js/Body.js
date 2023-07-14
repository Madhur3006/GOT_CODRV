import React, { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner'
import Table from './Table';

const Body = () => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const responses = await Promise.all(
            Array.from({ length: 1500 }, (_, index) =>
              fetch(`https://anapioficeandfire.com/api/characters/${index + 1}`).then(response => response.json())
            )
          );
          setLoading(false)
          setApiData(responses);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return loading ? <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Audio
  height="80"
  width="80"
  radius="9"
  color="black"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>

    </div> : <Table data={apiData} />;
};

export default Body
  