import React from "react";

import "./styles.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Header() {
  const data = useStaticQuery(graphql`
    query ImgHeader {
      image: file(relativePath: { eq: "geluxlogo.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <header className="container header">
      <Img fixed={data.image.childImageSharp.fixed} alt="Logo da Gelux" />
      <div className="social-icons">
        <a href="https://www.facebook.com/belabelindaapliques/">
          <FaFacebookSquare color="#F9E233" />
        </a>
        <a href="https://www.instagram.com/belabelindabr/">
          <FaInstagram color="#F9E233" />
        </a>
        <a href="https://www.instagram.com/belabelindabr/">
          <MdEmail color="#F9E233" />
        </a>
      </div>
    </header>
  );
}
