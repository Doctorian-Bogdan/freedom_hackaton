import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/freedom.svg';

function Header() {
  const location = useLocation().pathname;

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="лого" />
      <nav className="header__links">
        <Link to="/" className={location === '/' ? 'header__link header__link_active' : 'header__link'}>
          Статистика
        </Link>
        <Link to="/clients" className={location === '/clients' ? 'header__link header__link_active' : 'header__link'}>
          Клиенты
        </Link>
        <Link to="/" className="header__link">
          Каналы
        </Link>
      </nav>
    </header>
  );
}

export default Header;
