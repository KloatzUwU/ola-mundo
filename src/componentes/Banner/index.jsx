import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import maca from 'assets/maça.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá, Mundo!
            </h1>
            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aperiam asperiores quae velit et ipsa, iure labore quos. Similique nihil illum ipsum voluptatum, doloribus itaque qui odit. Autem, sequi saepe?
            </p>
        </div>
        <div className={styles.imagens}>
            <img 
                src={circuloColorido}
                alt="circulo colorido"
                className={styles.circuloColorido} 
                aria-hidden={true}
            />
            <img 
                src={maca}
                alt="Foto de uma maça séria"
                className={styles.minhaFoto} 
            />
        </div>
    </div>
  )
}
