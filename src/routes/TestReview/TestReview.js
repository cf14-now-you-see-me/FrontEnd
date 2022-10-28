import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import LoadingWidget from '../../components/LoadingWidget/LoadingWidget';

const TestReview = () => {
  const [reviews, setReviews] = useState([])
  const placeData = useQuery(
    ['placeData'],
    async () => {
      const r = await axios({
        method: 'get',
        url: '/maps-api/place/details/json',
        params: {
          'place_id': 'ChIJ4ZRp2KoBLS4RKvK9h6bC1Es',
          'key': 'AIzaSyAO0IzZ74crPA2HG97xZgq6zCEp8kGrj0A',
          'language': 'id',
          'reviews_no_translations': 'true'
        }
      });
      console.log(r.data.result);
      return r.data.result;
    }
  )
  return (
    <main>
      { (!placeData.isFetching)? <>
              {placeData.data.reviews.map((item, index)=>{
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
          </> : <LoadingWidget/> }
    </main>
  )
};

export default TestReview;
