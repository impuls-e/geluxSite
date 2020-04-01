import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './styles.css';
export default function Intro() {
  return (
    <div className='container intro'>
      <h1>Soluções Completas em Elétrica</h1>
      <div className='introduction'>
        <ul>
          <li>Instalação e Manutenção Elétrica em Geral</li>
          <li>Instalação e Manutenção em Sistemas de Iluminação</li>
          <li>Projetos Elétricos e Luminotécnicos</li>
          <li>Projetos e Execução de Serviços CELESC</li>
          <li>Ensaios, Medições e Estudos Elétricos</li>
        </ul>
        <nav>
          <h2>Entre em Contato</h2>
          <a href='https://wa.me/5548991815995'>
            <div className='whats'>
              <FaWhatsapp></FaWhatsapp>
            </div>
            <span>(48) 99181-5995</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
