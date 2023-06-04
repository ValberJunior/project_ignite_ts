import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Post.module.css';
import Comment from '../Comment';
import Avatar from '../Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { IPost } from '../../utils';

const Post = ({author,content,publishedAt} : IPost) => {
  // states
  const [ comments, setComments ] = useState(["Post muito bacana, hein?!"]);
  const [ newComment, setNewComment ] = useState("");

  // date
  const publishDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{ locale: ptBR});
  const publishDateRelativeToNow = formatDistanceToNow(publishedAt,{ locale: ptBR, addSuffix: true})
  
  // methods
  const handleCreateNewComment = (event : FormEvent) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("")
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  }

  const deleteComment = (commentToDelete : string) => {
    const commentsWithoutDeletedOne = comments.filter((coment) => { return coment !== commentToDelete})
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar
                  src={author.avatarUrl}
                  alt={author.name}
                  hasBorder
                  />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishDateRelativeToNow}
            </time>
        </header>
        <div className={styles.content}>
          { content.map( item => { 
            if(item.type === "paragraph")
              return(
                <p 
                  key={item.content}>
                    {item.content}
                </p>
              )
            else if(item.type === "link")
              return(
                <p 
                  key={item.content}>
                    <a href="#">
                      {item.content}
                    </a>
                </p>
              )
           })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea 
            placeholder="Deixe um comentário"
            onChange={handleNewCommentChange}
            value={newComment}
            required
            />
            <footer>
              <button 
                type="submit"
                disabled={isNewCommentEmpty}
              >
                Publicar
              </button>
            </footer>
        </form>

        <div className={styles.commentsList}>
           {
            comments.map( item => {
              return(
                <Comment 
                  key={item}
                  content={item}
                  onDeleteComment={deleteComment}
                   />
              )
            })
           }
        </div>
    </article>
  )
}

export default Post