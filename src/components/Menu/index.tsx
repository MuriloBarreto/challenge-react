import React from 'react';
import styles from './Menu.module.scss';
import Logo from 'assets/logo.png';

export default function Menu(){
  return (
    <header className={styles.cabecalho}>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <li><a href="">Como fazer</a>/</li>
        <li><a href="">Ofertas</a>/</li>
        <li><a href="">Depoimentos</a>/</li>
        <li><a href="">Videos</a>/</li>
        <li><a href="">Meu carrinho</a></li>
      </nav>
    </header>
  );
}