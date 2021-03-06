import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
      };
      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta
              name='google-site-verification'
              content='FdK0L5prquMXg4djTcVSAth67wA8GbJCciJs9q5ZBew'
            />
            <meta name='description' content={seo.description} />
            <meta name='image' content={seo.image} />
            <meta charSet='utf-8' />
            {seo.url && <meta property='og:url' content={seo.url} />}
            {(article ? true : null) && (
              <meta property='og:type' content='article' />
            )}
            <meta property='og:type' content='website' />

            {seo.title && <meta property='og:title' content={seo.title} />}
            {seo.description && (
              <meta property='og:description' content={seo.description} />
            )}
            {seo.image && (
              <meta
                property='og:image'
                content='https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-9/91273606_3300776629951515_1865864948798717952_n.png?_nc_cat=111&_nc_sid=85a577&_nc_ohc=TVNGuGO30KwAX8oZxti&_nc_ht=scontent.ffln1-1.fna&oh=9a5862f1adf886cf63972dadd11b4271&oe=5EB0EDF8'
              />
            )}

            {seo.image && <meta property='og:image:url' content={seo.image} />}

            {seo.image && (
              <meta property='og:image:type' content='image/jpeg' />
            )}
            <meta name='twitter:card' content='summary_large_image' />
            {twitterUsername && (
              <meta name='twitter:creator' content={twitterUsername} />
            )}
            {seo.title && <meta name='twitter:title' content={seo.title} />}
            {seo.description && (
              <meta name='twitter:description' content={seo.description} />
            )}
            {seo.image && <meta name='twitter:image' content={seo.image} />}
          </Helmet>
        </>
      );
    }}
  />
);
export default SEO;
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
};
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;
