import React, {useState, useEffect} from 'react';
import Card from './Card';
import styles from './Ofertas.module.scss';
import axios from 'axios';
// import axios from 'axios';

interface Plant {
  name: string,
  preco: number,
  img: string,
  ordem: number
}

export default function Ofertas(){
  const [lista, setLista] = useState<Plant[]>([]);
  // axios.get('http://localhost:3004/plantas')
  //   .then((dados) => {
  //     if(dados){
  //       setLista(dados);
  //     }
  //   });
  // fetch('http://localhost:3004/plantas')
  //   .then(data => data.json())
  //   .then(plant => console.log(plant));
  useEffect(() => {
    axios('http://localhost:3004/plantas')
      .then(res => setLista(res.data));
  },[]);
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>
        conheça nossas <br />
        <strong>ofertas</strong>
      </h2>
      <section className={styles.container__cards}>
        {lista?.filter((dados)=> dados.ordem > 0).map((dados,index) => (<Card key={index} name={dados.name} img={dados.img} preco={dados.preco}/>))}
      </section>
    </div>
  );
}