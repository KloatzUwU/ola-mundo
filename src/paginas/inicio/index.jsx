import React from 'react'
import styles from './inicio.module.css'
import posts from 'assets/json/posts.json'
import PostCard from 'componentes/PostCard'

export default function Inicio() {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}
