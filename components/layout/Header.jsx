// styles
import styles from '../../styles/layout/Header.module.scss'

import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>     
      <h1>Robert Wägar - aka Rob-One</h1>
      <Link href="/">Home sweet home </Link>   
    </header>
  );
}
