import React, {useState} from 'react';
import axios from 'axios';
import style from './TourGuidePage.module.scss';
import ButtonAction from "../../components/Buttons/ButtonAction";

const DaftarGuidePage = () => {
  const [name, setname] = useState();
  const [idCard, setIdCard] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const RegisterGuide = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('#', {
        name: name,
        idCard: idCard,
        phonenumber: phonenumber,
        email: email,
        password: password
      });
    } catch (error) {
      console.log (error);
    }
  };

  return (
    <main className={style.rencanaContainer} style={{display: 'grid'}}>
      <section className="standardSection">
        <h2>Daftarkan dirimu!</h2>
        <form onSubmit={RegisterGuide} className={style.rencanaRightContainer}>
          <fieldset>
            <div className="singleRow" style={{marginTop: '2%'}}>
              <h3>Nama Lengkap</h3>
              <br />
              <input
                type="text"
                placeholder="Nama Lengkap"
                value={name}
                onChange={(e) => setname(e.target.value)}
              ></input>
            </div>
            <br />
            <div className="singleRow">
              <h3>Nomor Kartu Identitas</h3>
              <br />
              <input
                type="text"
                placeholder="123456789"
                value={idCard}
                onChange={(e) => setIdCard(e.target.value)}
              ></input>
            </div>
            <br />
            <div className="singleRow">
              <h3>Nomor Telepon/HP</h3>
              <br />
              <input
                type="text"
                placeholder="081234567890"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              ></input>
            </div>
            <br />
            <div className="singleRow">
              <h3>Email</h3>
              <br />
              <input
                type="text"
                placeholder="nama@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <br />
            <div className="singleRow">
              <h3>Kata Sandi</h3>
              <br />
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <br />
            <span>
              <div className={style.actions}>
                <ButtonAction>Daftar</ButtonAction>
              </div>
            </span>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default DaftarGuidePage;
