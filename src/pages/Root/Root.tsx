import { Outlet } from 'react-router-dom';
import styles from './Root.module.css';
import { Header } from '../../components/shared/Header/Header';

export const Root = () => {
  return (
    <main className={styles.page}>
      <Header />
      <Outlet />
    </main>
  );
};
