import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
// import produto from 'assets/produto-02 1.png';
import styles from './Card.module.scss';

interface CardProps {
  name: string,
  preco: number,
  img: string
}

export default function Card(props: CardProps){
  return (
    <div className={styles.card}>
      <img src={`imagens/${props.img}.png`} alt="Planta" />
      <div>
        <h3>{props.name}</h3>
        <p>{`R$ ${props.preco.toFixed(2).replace('.',',')}`}</p>
        <a href="">Comprar <FaArrowRight className={styles.arrow} size={11}/></a>
      </div>
    </div>
  );
}