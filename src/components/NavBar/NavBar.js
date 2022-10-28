import { Link } from 'react-router-dom';
import style from './NavBar.module.scss';

const links = [
    ['Beranda', '/'],
    ['Rencanakan', '/rencana'],
    ['Rencanamu', '/hasilrencana'],
    ['Rekomendasi', '/rekomendasi'],
    // ['Reservasi', '/reservasi'],
];

const MainMenu = ()=>{
    return (
        <header className={style.base}>
            <h1 className={style.title}>Kerinci '22</h1>
            <nav id="mainMenu">
                <ul className={style.menu}>
                    {
                        links.map(([title, url], index)=>{
                            return <li key={index}><Link to={url} className={style.menuItem}>{title}</Link></li>
                        })
                    }
                </ul>
            </nav>
            {/* <nav id="userMenu">
                Halo,
                <Link to="/user">Anonim</Link>
            </nav> */}
        </header>
    )
}

export default MainMenu;