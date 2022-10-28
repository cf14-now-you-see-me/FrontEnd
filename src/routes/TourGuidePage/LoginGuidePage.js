import React, {useState} from 'react';
import axios from 'axios';
import style from './TourGuidePage.module.scss';
import ButtonAction from '../../components/Buttons/ButtonAction';

const LoginGuidePage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const LoginGuide = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('#', {
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
        <h2>Masuk!</h2>
        <form onSubmit={LoginGuide} className={style.rencanaRightContainer}>
          <fieldset>
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
                <ButtonAction>Masuk</ButtonAction>
              </div>
            </span>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default LoginGuidePage;
