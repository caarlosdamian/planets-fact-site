import { HtmlHTMLAttributes } from 'react';
import styles from './Button.module.css';
import { planetColors, PlanetColorsI } from '../../../utils';

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  itemNumber: number;
  name: string;
}

export const Button = ({
  name,
  isActive,
  children,
  itemNumber,
  ...rest
}: Props) => {
  return (
    <button
      style={{
        ['--color' as string]:
          planetColors[name.toLowerCase() as keyof PlanetColorsI],
      }}
      className={`${isActive ? styles.active : ''} ${styles.btn}`}
      {...rest}
    >
      <span className={styles.btn_label}>0{itemNumber}</span>
      <span>{children}</span>
    </button>
  );
};
