import { useEffect, useMemo, useReducer } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useQuery } from 'react-query';
import LoadingWidget from "../../components/LoadingWidget/LoadingWidget";
import styles from './DetailsPage.module.scss'
import Button from '../../components/Buttons/Button';

import kayuaro2 from './kayuaro2.jpg'

// https://v5.reactrouter.com/web/example/query-parameters
const useUrlQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * reflects API response
 * @param {{name: string, description: string}} props 
 */
const PlaceDetails = (props) => {
    if (props.response.isLoading) {
        return (
            <LoadingWidget/>
        )
    }
    return (
        <main>
            <section className='standardSection'>
            <div style={{opacity: props.opacity}}>
                <header className={styles.header}>
                    <img src={kayuaro2}/>
                    <h2>{props.response.data.name}</h2>
                    <Button>Reservasi</Button>
                </header>
                <ul className={styles.status}>
                    <li><b>Buka</b> {props.response.data.opening_times}</li>
                    <li><b>Alamat</b> {props.response.data.location}</li>
                    <li><b>Ramah anak</b> {props.response.data.child_friendly? 'Ya' : 'Tidak'}</li>
                </ul>
                <h3 className="hidden">Deskripsi</h3>
                <p className={styles.description}>
                    {props.response.data.description}
                </p>
                <h3 className={styles.sectionHeading}>Gallery</h3>
                {/* Masukkan gallery di sini... */}
                <h3 className={styles.sectionHeading}>Begini kata orang&hellip;</h3>
                {/* masukkan hasil sentiment analysis disini... */}
                <div className={styles.sentimentAnalysis}>
                    <div className={styles.positiveSentiment}>    
                        <h4>Sentimen positif</h4>
                            <ul>
                                <li>Tempatnya sejuk</li>
                                <li>Bagus pemandangannya</li>
                            </ul>
                    </div>
                        <div className={styles.negativeSentiment}>
                        <h4>Sentimen negatif</h4>
                            <ul>
                                <li>Ngga ada toilet</li>
                                <li>Wifinya mana?</li>
                            </ul>
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
}

const DetailsPage = () => {
    const query = useUrlQuery();
    const unableToFetch = query.get('id') === null || isNaN(Number(query.get('id')));
    
    useEffect(()=>{
        // otomatis scroll ke atas
        document.querySelector('.pageContainer').scrollTo({left: 0, top: 0});
    }, [])

    const place = useQuery(
        [`placeData-${query.get('id')}`],
        async () => {
            if (!unableToFetch) {
                const r = await axios({
                    'url':'/api/places/' + query.get('id'),
                    'method': 'get'
                });
                return r.data;
            }
        }
    );

    if (unableToFetch) {
        return (
            <LoadingWidget/>
        )
    }
    
    return (
        <PlaceDetails response={place}/>
    )
}

export default DetailsPage;