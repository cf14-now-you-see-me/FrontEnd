import { useQuery } from 'react-query';
import axios from 'axios';

/**
 * 
 * @param {{name?: string, onChange?: function, id: string}} props 
 * @returns PlacesSelection
 */
const PlacesSelection = (props) => {
    const places = useQuery(
        [`placesData`],
        async () => {
            const r = await axios({
                'url':'/api/places/',
                'method': 'get'
            });
            return r.data;
        }
    );

    return (
        <select id={props.id} name={props.id} style={{color: 'black', borderRadius:'5px', padding:'3px', margin:'1%'}} onChange={props.onChange}>
            <option disabled selected>Pilih salah satu tempat wisata...</option>
            {
                typeof(places.data) == "object" ?
                    places.data.map((place, index) => {
                        return <option value={place.id} key={place.id}>{place.name}</option>
                    })
                    : <></>
            }
            {/* <optgroup label="Danau">
            <option value="danau">Danau Kaco</option>
            <option value="danau">Danau Gunung Tujuh</option>
            <option value="danau">Danau Kerinci</option>
            </optgroup>
            <optgroup label="Mata Air">
            <option value="mataAir">Air Panas Semurup</option>
            <option value="mataAir">Air Terjun Telun Berasap</option>
            </optgroup>
            <optgroup label="Bukit">
            <option value="mataAir">Bukit Cinta</option>
            <option value="mataAir">Bukit Khayangan</option>
            <option value="mataAir">Panorama Bukit Tirai Embun</option>
            </optgroup>
            <optgroup label="Gunung">
            <option value="mataAir">Gunung Kerinci</option>
            <option value="mataAir">Gunung Tujuh</option>
            </optgroup>
            <optgroup label="Kebun Teh">
            <option value="parrot">Kebun Teh Kayu Aro</option>
            </optgroup>
            <optgroup label="Pantai">
            <option value="parrot">Pantai Indah Koto Petai</option>
            </optgroup>
            <optgroup label="Taman">
            <option value="parrot">Taman Nasional Kerinci Seblat</option>
            <option value="parrot">Taman Putri Tunggal</option>
            <option value="parrot">Taman Aroma Pecco</option>
            </optgroup>
            <optgroup label="Waterpark">
            <option value="parrot">Waterpark Pancoe7</option>
            </optgroup>
            <optgroup label="Hutan">
            <option value="parrot">Agroekowisata Hutan Pinus</option> 
            </optgroup> */}
        </select>
    );
}

export default PlacesSelection;