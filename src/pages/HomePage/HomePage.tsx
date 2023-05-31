import Menu from 'components/Menu';
import styles from './HomePage.module.scss';
import React from 'react';
import AssinaturaNewsletter from 'components/AssinaturaNewsletter';
import Ofertas from 'components/Ofertas';

function HomePage() {
  return (
    <main className={styles.home}>
      <Menu />
      <AssinaturaNewsletter />
      <Ofertas />
    </main>
  );
}

export default HomePage;
