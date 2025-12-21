// components/Navbar.js (com JS para responsividade)
import Link from 'next/link';
// import { useState } from 'react';
import styles from './Navbar.module.css'; // Se usar CSS Modules

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      {/* <button onClick={() => setIsOpen(!isOpen)}>Menu</button> */}
       {/* Botão Hambúrguer */}
      {/* <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}> */}
      <ul className={`${styles.navList}`}>
        <li><Link href="/" className={styles.navLink}>Início |</Link></li>
        <li><Link href="/ocorrencia" className={styles.navLink}>Cadastrar |</Link></li>
        <li><Link href="/verOcorrencia" className={styles.navLink}>Ver Ocorrências |</Link></li>
        <li><Link href="/servicos" className={styles.navLink}>Sair</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;





// // components/Navbar.js
// import Link from 'next/link';

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><Link href="/">Início</Link></li>
//         <li><Link href="/sobre">Sobre</Link></li>
//         <li><Link href="/servicos">Serviços</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
