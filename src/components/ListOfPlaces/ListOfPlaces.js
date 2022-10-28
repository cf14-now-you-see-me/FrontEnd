import { TravelCardContainer } from '../TravelCard/TravelCard';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import styles from './ListOfPlaces.module.scss'
import LoadingWidget from '../LoadingWidget/LoadingWidget';

const ListOfPlaces = () => {
    const [filtered, setFiltered] = useState([]);
    const places = useQuery(
        ['placeList'],
        async () => {
            const newPlaces = [];
            const r = await axios({
                'url':'/api/places/',
                'method': 'get'
            });
            for (let d of r.data) {
                // const p = await axios({
                //     'url':'/maps-api/place/details/json',
                //     'method': 'get',
                //     'params': {
                //         place_id: d.google_id,
                //         key: 'AIzaSyAO0IzZ74crPA2HG97xZgq6zCEp8kGrj0A',
                //     }
                // });
                // console.log(p.data.result)
                const p = await axios({
                    url: '/maps-api/place/details/json',
                    method: 'get',
                    params: {
                        place_id: d.google_id,
                        key: 'AIzaSyAO0IzZ74crPA2HG97xZgq6zCEp8kGrj0A',
                        language: 'id',
                        reviews_no_translations: 'true',
                    },
                });
                console.info(p.data.result.photos[0].photo_reference);
                newPlaces.push(
                    {
                        'name': d.name,
                        'url': '/detail?id=' + d.id,
                        'image': (
                            '/maps-api/place/photo?maxwidth=250&photo_reference=' +
                            p.data.result.photos[0].photo_reference +
                            '&key=AIzaSyAO0IzZ74crPA2HG97xZgq6zCEp8kGrj0A'
                        )
                    }
                )
            }
            setFiltered(JSON.parse(JSON.stringify(newPlaces)));
            return newPlaces;
        }, {
            initialData: []
        }
    );

    const [filt, setFilt] = useState('');
    useEffect(()=>{
        setFiltered(
            places.data.filter((e)=>{
                return e.name.toLowerCase().includes(
                    filt.toLowerCase()
                )
            })
        )
    }, [places.data, filt]);

    const placeholders = [
        'bukit',
        'air panas',
        'danau',
        'gunung'
    ]
    const [placeholderCtr, setPlaceholderCtr] = useState(0);
    useEffect(()=>{
        let itv = setInterval(() => {
            setPlaceholderCtr(
                (placeholderCtr >= placeholders.length-1)
                ? 0
                : placeholderCtr + 1 
            );
        }, 1000);
        return () => clearInterval(itv);
    }, [placeholderCtr])

    return (
        <>
        { (!places.isFetching)? <>
            <input placeholder={placeholders[placeholderCtr]} className={styles.searchBar} type="text" onChange={(e)=>{setFilt(e.target.value)}}></input>
            <TravelCardContainer cards={filtered}/>
        </> : <LoadingWidget/> }
        </>
    )
}

export default ListOfPlaces;