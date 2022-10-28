import { TravelCardContainer } from '../TravelCard/TravelCard';
import Logo from '../../assets/logo.svg';
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
                newPlaces.push(
                    {
                        'name': d.name,
                        'url': '/detail?id=' + d.id,
                        'image': Logo
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