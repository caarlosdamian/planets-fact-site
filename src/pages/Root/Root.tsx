import { Outlet, useNavigate } from 'react-router-dom';
import styles from './Root.module.css';
import { Header } from '../../components/shared/Header/Header';
import { useEffect } from 'react';
import { Menu } from '../../components/shared/Menu/Menu';
import { useMenuContext } from '../../context/menuContext';

export const Root = () => {
  const navegate = useNavigate();
  useEffect(() => {
    navegate('/mars');
  }, [navegate]);

  const { isOpen } = useMenuContext();

  return (
    <main className={styles.page}>
      <Header />
      {isOpen && <Menu />}
      <Outlet />
    </main>
  );
};
