import {useEffect, useMemo, useReducer} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import {useQuery} from 'react-query';
import LoadingWidget from '../../components/LoadingWidget/LoadingWidget';
import styles from './DetailsPage.module.scss';
import Button from '../../components/Buttons/Button';

import kayuaro2 from './kayuaro2.jpg';

// https://v5.reactrouter.com/web/example/query-parameters
const useUrlQuery = () => {
  const {search} = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

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
              <b>Buka</b> {props.response.data.opening_times}
            </li>
            <li>
              <b>Alamat</b> {props.response.data.location}
            </li>
            <li>
              <b>Ramah anak</b>{' '}
              {props.response.data.child_friendly ? 'Ya' : 'Tidak'}
            </li>
          </ul>
          <h3 className="hidden">Deskripsi</h3>
          <p className={styles.description}>
            {props.response.data.description}
          </p>
          <h3 className={styles.sectionHeading}>Gallery</h3>
          {/* Masukkan gallery di sini... */}
          {props.response.data.photos.map((item, index) => {
            return (
              <div
                style={{
                  display: 'inline-block',
                  padding: '5px',
                  overflow: 'hidden',
                  height: '150px',
                }}
              >
                <img
                  src={
                    '/maps-api/place/photo?maxwidth=250&photo_reference=' +
                    item.photo_reference +
                    '&key=AIzaSyAO0IzZ74crPA2HG97xZgq6zCEp8kGrj0A'
                  }
                  className={styles.galleryPhoto}
                  alt="alternatetext"
                />
              </div>
            );
          })}
          <h3 className={styles.sectionHeading}>Begini kata orang&hellip;</h3>
          {/* masukkan hasil sentiment analysis disini... */}
          <div className={styles.reviews}>
            {props.response.data.reviews.map((item, index) => {
              return (
                <div className={styles.review}>
                  <header className={styles.reviewHeader}>
                  <h3>{item.author_name}</h3>
                  <div className={styles.rating}>Rating: {item.rating}</div>
                  <div className={styles.time}>{item.relative_time_description}</div>
                  </header>
                  <p>{item.text}</p>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

const DetailsPage = () => {
  const query = useUrlQuery();
  const unableToFetch =
    query.get('id') === null || isNaN(Number(query.get('id')));

  useEffect(() => {
    // otomatis scroll ke atas
    document.querySelector('.pageContainer').scrollTo({left: 0, top: 0});
  }, []);

  const place = useQuery([`placeData-${query.get('id')}`], async () => {
    if (!unableToFetch) {
      const r = await axios({
        url: '/api/places/' + query.get('id'),
        method: 'get',
      });
      console.log(r.data.google_id);
      const p = await axios({
        url: '/maps-api/place/details/json',
        method: 'get',
        params: {
          place_id: r.data.google_id,
          key: 'AIzaSyAO0IzZ74crPA2HG97xZgq6zCEp8kGrj0A',
          language: 'id',
          reviews_no_translations: 'true',
        },
      });
      console.log(p.data.result);
      return p.data.result;
    }
  });

  if (unableToFetch) {
    return <LoadingWidget />;
  }

  return <PlaceDetails response={place} />;
};

export default DetailsPage;
