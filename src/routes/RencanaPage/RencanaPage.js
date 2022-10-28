import Button from "../../components/Buttons/Button";
import ButtonLink from "../../components/Buttons/ButtonLink";
import PlacesSelection from "../../components/PlacesSelection/PlacesSelection";
import rencanaPic from './rencanaPage.png';
import style from './RencanaPage.module.scss';
import { useState } from "react";
import ButtonAction from "../../components/Buttons/ButtonAction";

const RencanaPage = () => {
    const [tglMulai, setTglMulai] = useState();
    const [tglSelesai, setTglSelesai] = useState();
    const [budget, setBudget] = useState();
    const [selected, setSelected] = useState("none");
    const handleChange = (e) => {
        setSelected(e.target.selectedOptions[0].value);
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
                            <input type="date" onChange={e=>setTglMulai(e.target.value)} required="1" id="startDate" name="start"></input>
                        </div>
                        <div className="singleRow">
                            <label for="endDate">Selesai: </label>
                            <input type="date" required="1" onChange={e=>setTglSelesai(e.target.value)}  id="endDate" name="end"></input>
                        </div>
                        <br/>
                        <h3>Destinasi utama</h3>
                        <div className="singleRow">
                            <label for="wisata1">Destinasi 1:</label>
                            <PlacesSelection onChange={handleChange} id="wisata1"/>
                        </div>
                        <div className="singleRow">
                            <label for="wisata2">Destinasi 2:</label>
                            <PlacesSelection id="wisata2"/>
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