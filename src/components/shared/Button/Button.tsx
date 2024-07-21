import { HtmlHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  color: string;
  isActive: boolean;
  itemNumber: number;
}

export const Button = ({
  color,
  isActive,
  children,
  itemNumber,
  ...rest
}: Props) => {
  return (
    <button
      className={`${isActive ? styles[color] : ''} ${styles.btn}`}
      {...rest}
    >
      <span className={styles.btn_label}>0{itemNumber}</span>
      <span>{children}</span>
    </button>
  );
};
