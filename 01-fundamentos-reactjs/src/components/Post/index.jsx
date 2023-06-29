import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Post muito bacana, hein?!'])
  const [newCommentText, setNewCommentText] = useState('')
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault()
    setComments(prevState => [...prevState, newCommentText])
    setNewCommentText('')
  }

  function handleDeleteComment(id) {
    const commentWithoutDeletedOne = comments.filter((comment, index) => {
      return index !== id
    })
    setComments(commentWithoutDeletedOne)
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const isNewCommentEmpty = newCommentText.length === 0

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
            return (<p key={post.content}>{post.content}</p>)
          }
          if (post.type === 'link') {
            return (<p key={post.content}>👉 {' '}<a href="#">{post.content}</a></p>)
          }
          if (post.type === 'tags') {
            return (
              <p key={post.content}>
                {post.content.map((tag) => (<a href="#" key={tag}>{tag}{' '}</a>))}
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={(e) => handleCreateNewComment(e)} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) =>
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={() => handleDeleteComment(index)}
          />
        )}
      </div>
    </article>
  )
}
