import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/maça.png'
import styles from './SobreMim.module.css'

export default function SobreMim() {
  return (
    <main>
      <PostModelo 
        fotoCapa={fotoCapa}
        titulo={"Sobre mim"}
      >
        <h3 className={styles.subtitulo}>
          Olá, eu sou a Manzana
        </h3>
        <img 
          src={fotoSobreMim}
          alt="foto da maça seria"
          className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ab recusandae. Porro incidunt quae nam, similique adipisci minima?
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus, mollitia quos aut aliquid voluptatum consequuntur ipsam in sunt. Illo inventore aut velit officia. Amet sed vel porro inventore ipsum.
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus, mollitia quos aut aliquid voluptatum consequuntur ipsam in sunt. Illo inventore aut velit officia. Amet sed vel porro inventore ipsum.
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus, mollitia quos aut aliquid voluptatum
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus, mollitia quos aut aliquid voluptatum consequuntur ipsam in sunt. Illo inventore aut velit officia. Amet
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus, mollitia quos aut aliquid voluptatum consequuntur ipsam in sunt. Illo inventore aut velit officia. Amet sed vel porro inventore ipsum.
        </p>
      </PostModelo>
    </main>
  )
}
