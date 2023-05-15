import React from 'react';
import './Information.css';
import premium from '../imagens/premium.png';

function Information (){
  return (
      <div className='container__'>
        <div className="information">
          <h1 className='title'>Tá acabando: 3 meses de Premium por R$ 0,00</h1>
          <h2 className='description'> Começa hoje a ouvir música sem anúncios e offline grátis até 10 de agosto de 2023.Cancela quando quiseres.
            <br></br><br></br>A oferta termina em 6d: 7h: 19min.</h2>
          <div>
            <button type='button' className='promotion' >Experimente 3 meses por R$ 0,00</button>
            <button type='button' className='plans'>VER PLANOS</button>
            <p className='terms'>Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos e Condições. Disponível apenas para quem nunca usou o Premium. A oferta termina em 16/05/2023.</p>
          </div>
        </div>
        <div>
          <img src={premium} alt='premium' className='premium' style={{ Width: '100px', height: 'auto' }}></img>
        </div>
      </div>
  );
}

export default Information;