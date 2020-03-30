import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./styles.css";
export default function Intro() {
  return (
    <div className="container intro">
      <h1>Soluções Completas em Elétrica</h1>
      <div className="introduction">
        <aside>
          <p>Instalação e Manutenção Elétrica em Geral;</p>
          <p>Instalação e Manutenção em Sistemas de Iluminação;</p>
          <p>Projetos Elétricos e Luminotécnicos;</p>
          <p>Projetos e Execução de Serviços CELESC;</p>
          <p>Ensaios, Medições e Estudos Elétricos;</p>
        </aside>
        <nav>
          <h2>Entre em Contato</h2>
          <a href="">
            <div className="whats">
              <FaWhatsapp></FaWhatsapp>
            </div>
            <span>48 991815995</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
