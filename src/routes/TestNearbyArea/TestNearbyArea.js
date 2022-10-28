import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import LoadingWidget from '../../components/LoadingWidget/LoadingWidget';

const TestNearbyArea = () => {
    const [nearby, setNearby] = useState([])
    const placeData = useQuery(
      ['placeData'],
      async () => {
        const r = await axios({
          method: 'get',
          url: '/maps-api/place/nearbysearch/json',
          params: {
            'origin': 'place_id:ChIJLbFk59L1aS4RyLzp4OHWKj0',
            'destination': 'place_id:ChIJu3qmEsTFaS4R5X6jRWs88nU',
            'key': 'AIzaSyAO0IzZ74crPA2HG97xZgq6zCEp8kGrj0A',

          }
        });
        console.log(r.data.result);
        return r.data.result;
      }
    )
    return (
      <main>
        {/* { (!placeData.isFetching)? <>
                {placeData.data.nearby.map((item, index)=>{
                  return (
                    <>
                    <h2>{item.author_name}</h2>
                    <p>
                    Rating: {item.rating}
                    <br/>
                    {item.relative_time_description}
                    </p>
                    <p>
                    {item.text}
                    </p>
                    <br/>
                    </>
                  )
                })}
            </> : <LoadingWidget/> } */}
      </main>
    )
  };

export default TestNearbyArea