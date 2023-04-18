import Image from 'next/image';
// styles
import styles from '../../styles/layout/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>     
      <div className={styles.header_img}>   
                <Image      
                  className='profile'  
                    src='/images/robprofile.png'
                    width={200}
                    height={200}
                    alt='logo'
                    priority
                ></Image>           
            </div>            
    </header>
  );
}
