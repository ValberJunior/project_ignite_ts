import React, { useState } from 'react';
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from '../Avatar';

type CommentProps = {
  content: string,
  onDeleteComment: (comment:string) => void;
}

const Comment = ({content, onDeleteComment}:CommentProps) => {

  //states
  const [likeCount, setLikeCount ] = useState(0);

  // methods
  const handleDeleteComment = ()=>{
    const confirmation = window.confirm(`Deseja apagar o comentário: "${content}" ?`);
    if(confirmation){
      onDeleteComment(content);
    } 
  }

  const handleLikeCount = ()=>{
    setLikeCount(state => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
        <Avatar
         src="https://github.com/ValberJunior.png"
         alt=""
         />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                  <strong>Valber Junior</strong>
                  <time title="11 de Maio as 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
              </div>
              <button 
                title="Deletar comentário"
                onClick={handleDeleteComment}
                >
                <Trash size={24}/>
              </button>
            </header>
            <p>{content}</p>
          </div>
          <footer>
            <button>
              <ThumbsUp
                onClick={handleLikeCount}
              />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
    </div>
  )
}

export default Comment