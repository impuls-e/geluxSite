/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

import './styles.css';

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query BackgroungImage {
        desktop: file(relativePath: { eq: "ponte-iluminada.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <>
      <main>
        <BackgroundImage
          Tag='section'
          className='background'
          fluid={imageData}
          backgroundColor={`#040e18`}
        />
        {children}
      </main>
    </>
  );
}
