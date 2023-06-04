import React from 'react';
import styles from './Sidebar.module.css';
import banner from '/assets/banner.avif';
import { PencilLine } from 'phosphor-react'
import Avatar from '../Avatar';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img 
            src={banner} 
            alt=""
            className={styles.cover}/>
        <div className={styles.profile}>
            <Avatar 
              src="https://github.com/ValberJunior.png"
              alt="Imagem de perfil"
              hasBorder
               />
            <strong>Valber Junior</strong>
            <span>Software Developer</span>
        </div>
        <footer>
           <a href="#">
             <PencilLine size={20} /> Editar seu perfil
           </a> 
        </footer>
    </aside>
  )
}

export default Sidebar