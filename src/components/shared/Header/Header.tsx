import { Link } from 'react-router-dom';
import { PlanetI } from '../../../types';
import styles from './Header.module.css';
import hamburger from '/assets/icon-hamburger.svg';
import data from '../../../../public/data.json';
import { planetColors, PlanetColorsI } from '../../../utils';
import { useMenuContext } from '../../../context/menuContext';

export const Header = () => {
  const navLinks: string[] = data.map((item: PlanetI) => item.name);
  const { toggle } = useMenuContext();

  return (
    <nav className={styles.nav}>
      <h2 className={styles.nav_logo}>THE PLANETS</h2>
      <section className={styles.nav_links}>
        {navLinks.map((name) => (
          <Link
            key={name}
            style={{
              ['--color' as string]:
                planetColors[name.toLowerCase() as keyof PlanetColorsI],
            }}
            to={`/${name.toLowerCase()}`}
            className={styles.nav_link}
          >
            {name}
          </Link>
        ))}
      </section>
      <img
        src={hamburger}
        alt="hamburger icon"
        className={styles.menu}
        onClick={toggle}
      />
    </nav>
  );
};
