import Menu from 'components/Menu';
import styles from './HomePage.module.scss';
import React from 'react';
import AssinaturaNewsletter from 'components/AssinaturaNewsletter';

function HomePage() {
  return (
    <main className={styles.home}>
      <Menu />
      <AssinaturaNewsletter />
    </main>
  );
}

export default HomePage;
