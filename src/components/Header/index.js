import React from "react";

import "./styles.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Header() {
  const data = useStaticQuery(graphql`
    query ImgHeader {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image: file(relativePath: { eq: "gelux-logo.png" }) {
        childImageSharp {
          fixed(height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <header className="container header">
      <Img
        className="icon"
        fixed={data.icon.childImageSharp.fixed}
        alt="icone da Gelux"
      />

      <Img
        className="logo"
        fixed={data.image.childImageSharp.fixed}
        alt="Logo da Gelux"
      />
      <div className="social-icons">
        <a href="https://www.facebook.com/gelux.eletrica/">
          <FaFacebookSquare color="#fff" />
        </a>
        <a href="https://www.instagram.com/gelux.eletrica/">
          <FaInstagram color="#fff" />
        </a>
        <a href="mailto:contato.gelux@gmail.com">
          <MdEmail color="#fff" />
        </a>
      </div>
    </header>
  );
}
