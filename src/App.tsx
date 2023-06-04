import { Header, Sidebar, Post } from "./components";
import "./styles/global.css";
import styles from "./styles/App.module.css";
import { posts } from "./mock";


function App() {

  return (
  <>
    <Header/>
    <div className={styles.wrapper}>
     <Sidebar/>
     <main>
        {
          posts.map( post => {
            return (
            <Post
              {...post}
              key={post.id}
              />
            )
          })
        }
     </main>
    </div>
  </>
  )
}

export default App
