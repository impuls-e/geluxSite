import React from 'react';
import { FaWhatsapp, FaExternalLinkAlt } from 'react-icons/fa';
import './styles.css';
import { SocialProfileJsonLd } from 'gatsby-plugin-next-seo';

export default function Intro() {
  return (
    <>
      <SocialProfileJsonLd
        type='Person'
        name='Impulse'
        url='https://geluxeletrica.com.br/'
        sameAs={[
          'https://www.facebook.com/geluxeletrica',
          'https://instagram.com/geluxeletrica',
        ]}
      />
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
            <h3>Florianópolis - SC</h3>
            <a href='https://wa.me/5548991815995'>
              <div className='whats'>
                <FaWhatsapp></FaWhatsapp>
              </div>
              <span>
                (48) 99181-5995 <FaExternalLinkAlt />
              </span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
