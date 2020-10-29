import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

const features = [
  {
    title: 'For Players',
    imageUrl: 'assets/players.png',
    description:
      ' MetaGame is for those who want to play an active role in building the future. For those who want to: - Build their knowledge, get experience & level up. - Find cool projects, solve problems & get paid. - Become a part of something bigger.',
    linkText: 'Through here',
    linkTo: 'docs/start-here/for-players',
  },
  {
    title: 'For Guilds',
    imageUrl: 'assets/guilds.png',
    description:
      'It\'s also for groups of people, those building tools & services for a decentralized future. For those who want: - Help finding tools, frameworks & funds accessible. - Help getting value-aligned contributors & adopters. - Become a part of the "new world" puzzle.',
    // linkText: 'Through here',
    // linkTo: 'docs/start-here/for-guilds',
  },
  {
    title: 'For Patrons',
    imageUrl: 'assets/patrons.png',
    description:
      'Those who really want to see MetaGame succeed, but prefer to help with funds. Why? - They love builder onboarding & support systems. - Membership and other things, all paid in Seeds. - Understanding MetaGame made them go: Fuck yeah!',
    // linkText: 'Through here',
    // linkTo: 'docs/start-here/for-patrons',
  },
  {
    title: 'For Lamers',
    imageUrl: 'assets/patrons.png',
    description:
      'Those who prefer to push their self-interest over everyone & only detract from the commons. Not for: - Those who want to get rich quick & buy Lambos. - Those who say, but do not do. - Those who like to complain.',
    // linkText: 'Through here',
    // linkTo: 'docs/start-here/for-patrons',
  },
];

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.08)',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'flex-start',
  flexFlow: 'row nowrap',
  flex: '0 0 100%',
  marginBottom: '20px',
  padding: '20px',
  textAlign: 'left',
  width: '100%',
};
const imgWrap = {
  flex: '0 0 33%',
  width: '33%',
};
const mainWrap = {
  flexGrow: 1,
  paddingLeft: '20px',
};
const aspectBox = {
  // position: 'relative',
  // outline: '1px solid red',
  // height: '0',
  // paddingTop: '100%',
  // overflow: 'hidden',
};
const imgStyle = {
  // position: 'absolute',
  // top: '0',
  // left: '0',
  // width: '100%',
  // height: '100%',
};
const titleStyle = {
  fontFamily: '"IBM Plex Mono"',
  color: 'white',
  marginBottom: '3px',
};
const textStyle = {};
function Panel({ imageUrl, title, description, linkText, linkTo }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col', styles.feature)} style={panelStyle}>
      {imgUrl && (
        <div style={imgWrap}>
          <img style={imgStyle} src={imgUrl} alt={title} />
        </div>
      )}
      <div style={mainWrap}>
        {title && <h2 style={titleStyle}>{title}</h2>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  let wikipath = 'home';
  const wrapperStyle = {
    width: '680px',
    maxWidth: '680px',
    overflow: 'hidden',
  };

  useEffect(() => {
    wikipath = window.location.pathname === '/' ? 'home' : 'docs';
  });

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div className={classnames('wrapper', wikipath)}>
        <div className={classnames('inner-wrapper')} style={wrapperStyle}>
          <header className={classnames('hero', styles.heroBanner)}>
            <div className='container'>
              <div style={aspectBox}>
                <img
                  alt='MetaGame Wiki Logo'
                  className={styles.wikiLogo}
                  width='555'
                  src={useBaseUrl('img/wiki-logo.png')}
                />
              </div>
              <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className='button button--primary button--lg'
                  to={useBaseUrl('docs/introduction')}
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </header>
          <main>
            {features && features.length && (
              <section className={styles.features}>
                <div className='container'>
                  <div
                    className='row'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {features.map((props, idx) => (
                      <Panel key={idx} {...props} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
