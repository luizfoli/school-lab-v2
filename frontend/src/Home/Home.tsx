import React from 'react';
import './Home.css';

import SideMenu from './SideMenu/SideMenu';
import Header from '../MainContent/Header/Header';

function Home() {


  return (
    <main>
      <section id="leftMenu">
        <SideMenu />
      </section>
      <section id="mainContent">
        <Header />
      </section>
    </main>
  );
}

export default Home;