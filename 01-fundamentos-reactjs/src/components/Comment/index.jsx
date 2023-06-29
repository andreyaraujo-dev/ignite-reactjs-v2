import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'
import { Avatar } from '../Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/andreyaraujo-dev.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Andrey Araújo</strong>
              <time title="16 de Junho às 07:00h" dateTime="2023-06-15 07:00">Cerca de 1h atrás</time>
            </div>

            <button type='button' title='Deletar comentário' onClick={onDeleteComment}>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>

        </div>
        <footer>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
