import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from './signpost.module.scss';

export const directions = [
  {
    emoji: "🏢",
    label: "App Drawer",
    url: "#here",
    description: "Explore the Wiki",
  },

  {
    emoji: "🦑",
    label: "Players",
    url: "https://my.metagame.wtf",
    description: "The list of players of MetaGame.",
  },
  {
    emoji: "🎪",
    label: "Guilds",
    url: "/docs/enter-metagame/guilds-of-metagame",
    description: "The list of guilds considered to be a part of MetaGame.",
  },
  {
    emoji: "📚",
    label: "Playbooks",
    url: "http://localhost:3000/docs/playbooks/playbooks-lobby",
    description: "The list of guilds considered to be a part of MetaGame.",
  },
  {
    emoji: "📅",
    label: "Calendar",
    url:
      "docs/resources/calendar",
    description: "Meetings, gatherings and events",
  },
  {
    emoji: "🗺️",
    label: "Raids & Projects",
    url: "/docs/enter-metagame/navigation-board",
    description: "Find raids that peak your interest.",
  },
  {
    emoji: "🗞",
    label: "Newsletter",
    url: "https://metagame.substack.com/",
    description: "MetaGame News.",
  },
  {
    emoji: "📝",
    label: "Forum",
    url: "https://forum.metagame.wtf/",
    description: "Thoughtful MetaGame.",
  },
  {
    emoji: "🎤",
    label: "MetaMedia",
    url: "https://anchor.fm/MetaGame/",
    description: "A MetaGame Podcast.",
  },
  {
    emoji: "💬",
    label: "Discord",
    url: "https://discord.gg/awTtjcQ9Us",
    description: "Fast-paced MetaGame.",
  },
  {
    emoji: "🐤",
    label: "Twitter",
    url: "https://twitter.com/metafam",
    description: "Follow MetaGame on Twitter.",
  },
  {
    emoji: "😺",
    label: "Github",
    url: "https://github.com/MetaFam/TheGame",
    description: "Where we build.",
  },
  {
    emoji: "🚢",
    label: "Patrons",
    url: "https://my.metagame.wtf/patrons",
    description: "The list of guilds considered to be a part of MetaGame.",
  },
  {
    emoji: "🌱",
    label: "Seed Market",
    url:
      "https://balancer.exchange/#/swap/ether/0x30cf203b48edaa42c3b4918e955fed26cd012a3f",
    description: "Buy Seeds here",
  },


];

export function SignpostItem(props, key) {
  const [menuActive, setMenuActive] = useState(false);
  const { emoji, label, url, description } = props;

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const display = window.innerWidth;
        if (display >= 1280) {
          const sidebar = document.querySelector('[class^="sidebar"]');

          const menu = document.querySelector('[class^="sidebar"] .menu');
          if (sidebar !== 'undefined' && sidebar !== null) {
            menuActive
            ? sidebar?.classList.add('highlight')
            : sidebar?.classList.remove('highlight');
          // menuActive
          //   ? menu?.classList.add('menu--show')
          //   : menu?.classList.remove('menu--show');
        }

      }
    }
    setTimeout(() => {
      menuActive && toggleMenu();
    }, 5000);
    return () => {};
  }, [menuActive]);

  return (
    <ListItem key={`item-${key}`}>
      <Link
        className={url && url === '#here' ? 'trigger' : null}
        key={`link-${key}`}
        to={useBaseUrl(url)}
        title={description}
        onClick={url && url === '#here' ? toggleMenu : null}
      >
        <span>{emoji}</span>
        <span>{label}</span>
      </Link>
    </ListItem>
  );
}

export const ListItem = (props) => {
  const { children } = props;
  return <li className={styles.signpostItem}>{children}</li>;
};

export function Signpost() {
  return (
    <div className={styles.wrapper}>
      <img
        alt="MetaGame Wiki Logo"
        width="300"
        src="https://cdn.substack.com/image/fetch/w_300,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fe93a37b7-2a48-421c-80b7-3079eca8beb7_2048x881.png"
      />
      {/* <div className={styles.metaFest}>
        <a href="/docs/metafest">
          <div className={styles.aspectBox}>
            <img
              alt="MetaFest Logo"
              width="100%"
              src="/img/MetaFest.png"
            />
          </div>
        </a>
      </div> */}
      <ul className={styles.signpost}>
        {directions &&
          directions.length > 0 &&
          directions.map((direction, idx) => (
            <SignpostItem {...direction} key={`sp-${idx}`} />
          ))}
        </ul>
    </div>
  );
}
