import React from 'react';
import './FirstPage.css';
import Information from '../Information/Information';

function FirstPage() {
  return (
    <section className='first_page'>
      <div className='container__'>
        <Information />
      </div>
    </section>
  );
}

export default FirstPage;