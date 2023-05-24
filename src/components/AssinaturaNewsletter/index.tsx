import React from 'react';
// import PlantImage from 'assets/imagem-hero 1.png';
import styles from './AssinaturaNewsletter.module.scss';

export default function AssinaturaNewsletter(){
  return(
    <div className={styles.newsLetter}>
      <div className={styles.newsLetter__titulo}>
        <h1>
          Sua casa com as
          <strong>melhores <br /> plantas</strong>
        </h1>
        <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
      </div>
      <form>
        <input type="email" placeholder='Insira seu E-mail' name="email"/>
        <button>Assinar Newsletter</button>
      </form>
    </div>
  );
}