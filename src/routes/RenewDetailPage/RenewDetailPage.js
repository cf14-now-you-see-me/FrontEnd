import {useEffect, useMemo, useReducer} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import {useQuery} from 'react-query';
import LoadingWidget from '../../components/LoadingWidget/LoadingWidget';
import styles from './RenewDetailPage.module.scss';
import Button from '../../components/Buttons/Button';

import kayuaro2 from './kayuaro2.jpg';

// https://v5.reactrouter.com/web/example/query-parameters
// const useUrlQuery = () => {
//     const { search } = useLocation();
//     return useMemo(() => new URLSearchParams(search), [search]);
// }

/**
 * reflects API response
 * @param {{name: string, description: string}} props
 */
const PlaceDetails = (props) => {
  if (props.response.isLoading) {
    return <LoadingWidget />;
  }
  return (
    <main>
      <section className="standardSection">
        <div style={{opacity: props.opacity}}>
          <header className={styles.header}>
            <img src={kayuaro2} />
            <h2>{props.response.data.name}</h2>
            <Button>Reservasi</Button>
          </header>
          <ul className={styles.status}>
            <li>
              <b>Buka</b> {props.response.data.rating}
            </li>
            <li>
              <b>Alamat</b> {props.response.data.formatted_address}
            </li>
            <li>
              <b>Ramah anak</b>{' '}
              {props.response.data.child_friendly ? 'Ya' : 'Tidak'}
            </li>
          </ul>
          <h3 className="hidden">Deskripsi</h3>
          <p className={styles.description}>
            {props.response.data.description}
            bagian deskripsi tempat wisata
          </p>
          <h3 className={styles.sectionHeading}>Gallery</h3>
          {/* Masukkan gallery di sini... */}
          {props.response.data.photos.map((item, index) => {
            return (
              <div style={{display: 'inline-block', padding: '5px'}}>
                <img 
                  src="/maps-api/place/photo?maxwidth=300&photo_reference=AcYSjRicrl5YM-Ii150VoybHVWmhIgRRPjzgD1jVPjhVJOltObxlKoS1fF49wFrFrZvMRRt1m_Mt0a_iLiUWrtoVsX0qmg0fxAqr9gux5o5hFPkAe6nHq_sQFOmxyZPNcsqCPWznk39uLaVXq76bFWnXqoBCDG3oqvlAiU-CXM815dxGdDrr&key=AIzaSyAO0IzZ74crPA2HG97xZgq6zCEp8kGrj0A"
                  alt="alternatetext"
                /> 
              </div>
            );
          })}
          <h3 className={styles.sectionHeading}>Begini kata orang&hellip;</h3>
          {/* masukkan hasil sentiment analysis disini... */}
          <div className={styles.sentimentAnalysis}>
          {props.response.data.reviews.map((item, index)=>{
                return (
                  <>
                  <h3>{item.author_name}</h3>
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
          </div>
        </div>
      </section>
    </main>
  );
};

const RenewDetailsPage = () => {
  // const query = useUrlQuery();
  // const unableToFetch = query.get('id') === null || isNaN(Number(query.get('id')));

  // useEffect(()=>{
  //     // otomatis scroll ke atas
  //     document.querySelector('.pageContainer').scrollTo({left: 0, top: 0});
  // }, [])

  const place = useQuery([`placeData`], async () => {
    // if (!unableToFetch) {
    const r = await axios({
      method: 'get',
      url: '/maps-api/place/details/json',
      params: {
        place_id: 'ChIJ4ZRp2KoBLS4RKvK9h6bC1Es',
        key: 'AIzaSyAO0IzZ74crPA2HG97xZgq6zCEp8kGrj0A',
        language: 'id',
        reviews_no_translations: 'true',
      },
    });
    console.log(r.data.result);
    return r.data.result;
    // }
  });

  // if (unableToFetch) {
  //     return (
  //         <LoadingWidget/>
  //     )
  // }

  return <PlaceDetails response={place} />;
};

export default RenewDetailsPage;
