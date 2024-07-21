import { HtmlHTMLAttributes } from 'react';
import styles from './Sectionbutton.module.css';
import { planetColors, PlanetColorsI } from '../../../utils';

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  name: string;
}

const Sectionbutton = ({ isActive, name, ...rest }: Props) => {
  return (
    <button
      style={{
        ['--color' as string]:
          planetColors[name.toLowerCase() as keyof PlanetColorsI],
      }}
      className={`${styles.section_btn} ${isActive ? styles.active : ''} `}
      {...rest}
    />
  );
};

export default Sectionbutton;
