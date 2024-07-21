import { Link } from 'react-router-dom';
import { planetColors, PlanetColorsI } from '../../../utils';
import { data } from '../../../utils/data';
import styles from './Menu.module.css';
import { useMenuContext } from '../../../context/menuContext';

export const Menu = () => {
  const { toggle } = useMenuContext();
  const planets = data.map((item) => item.name);
  return (
    <div className={styles.menu}>
      {planets.map((planet) => (
        <Link
          to={`/${planet.toLowerCase()}`}
          className={styles.menu_item}
          onClick={toggle}
        >
          <div className={styles.menu_item_content}>
            <div
              className={styles.dot}
              style={{
                ['--color' as string]:
                  planetColors[planet.toLowerCase() as keyof PlanetColorsI],
              }}
            />
            <p className={styles.label}>{planet}</p>
          </div>
          <img
            src="/assets/icon-chevron.svg"
            alt="chevron"
            className={styles.arrow}
          />
        </Link>
      ))}
    </div>
  );
};
