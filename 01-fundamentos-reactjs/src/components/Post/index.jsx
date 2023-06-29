import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author} >
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(post => {
          if (post.type === 'paragraph') {
            return (<p>{post.content}</p>)
          }
          if (post.type === 'link') {
            return (<p key={post.content}>👉 {' '}<a href="#">{post.content}</a></p>)
          }
          if (post.type === 'tags') {
            return (
              <p>
                {post.content.map((tag) => (<a href="#" key={tag}>{tag}{' '}</a>))}
              </p>
            )
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
