import Button from "../../components/Buttons/Button";
import ButtonLink from "../../components/Buttons/ButtonLink";
import PlacesSelection from "../../components/PlacesSelection/PlacesSelection";
import rencanaPic from './rencanaPage.png';
import style from './RencanaPage.module.scss';
import { useEffect, useState } from "react";
import ButtonAction from "../../components/Buttons/ButtonAction";

const RencanaPage = () => {
    const [tglMulai, setTglMulai] = useState();
    const [tglSelesai, setTglSelesai] = useState();
    const [budget, setBudget] = useState();
    const [selected, setSelected] = useState("none");

    const handleTglMulai = (e) => {
        localStorage.setItem('rencana__tgl_mulai', e.target.value);
        setTglMulai(e.target.value);
    }
    const handleTglSelesai = (e) => {
        localStorage.setItem('rencana__tgl_selesai', e.target.value);
        setTglSelesai(e.target.value);
    }
    const handleChange = (e) => {
        localStorage.setItem('rencana__destinasi_1', e.target.value);
        setSelected(e.target.selectedOptions[0].value);
    }
    const GetDest1 = () => {
        let i = localStorage.getItem('rencana__destinasi_1');
        useEffect(()=>{
            if (!i) {
                setSelected("none")
            }
            setSelected(i);
        });
        return i;
    }

    return (
        <main className={style.rencanaContainer} style={{ display:'grid'}}>
            <section className='standardSection'>
            <h2>Rencanakan petualanganmu</h2>
                <form action="/hasilrencana" className={style.rencanaRightContainer}>
                <img src={rencanaPic} className={style.imageAuth} alt='Atur rencanamu'/>
                    <fieldset>
                        <h3>Masukkan jadwal</h3>
                        <div className="singleRow">
                            <label for="startDate">Mulai: </label>
                            <input type="date" value={localStorage.getItem('rencana__tgl_mulai')} onChange={handleTglMulai} required="1" id="startDate" name="start"></input>
                        </div>
                        <div className="singleRow">
                            <label for="endDate">Selesai: </label>
                            <input type="date" required="1" value={localStorage.getItem('rencana__tgl_selesai')} onChange={handleTglSelesai}  id="endDate" name="end"></input>
                        </div>
                        <br/>
                        <h3>Destinasi utama</h3>
                        <div className="singleRow">
                            <label for="wisata1">Destinasi 1:</label>
                            <PlacesSelection selected={GetDest1()} onChange={handleChange} id="wisata1"/>
                        </div>
                        <div className={style.actions}>
                            <ButtonLink to={"/rekomendasi" + (selected=="none"? "" : `?id=${selected}`)}>Lihat rekomendasi</ButtonLink>
                        </div>
                        <div className="singleRow">
                            <h3>Budget (Rp)</h3>
                            <input type="number" placeholder='100.000'name="budget"></input>
                        </div>
                        <br/>
                        <span>
                        <div className={style.actions}>
                        <ButtonAction>Lihat Rencana Untukmu!</ButtonAction>
                        </div>
                        </span>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}

export default RencanaPage;