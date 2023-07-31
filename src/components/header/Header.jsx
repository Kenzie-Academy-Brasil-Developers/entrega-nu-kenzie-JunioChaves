import Logo from '../../assets/NuKenzie.svg'
import style from './style.module.scss'


export const Header = () => {
    return (
      <header className={style.header}>
          <div className={style.logo}>
            <img src={Logo} alt="Logo Nu kenzie" />
          </div>
      
      </header>
    );
}

