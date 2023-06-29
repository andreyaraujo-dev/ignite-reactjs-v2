import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/andreyaraujo-dev.png",
      name: "Andrey Araújo",
      role: "Fullstack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "tags", content: ["#novoprojeto", "#nlw", "#rocketseat"] },
    ],
    publishedAt: new Date("2023-04-23 19:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "tags", content: ["#novoprojeto", "#nlw", "#rocketseat"] },
    ],
    publishedAt: new Date("2023-06-23 23:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post  => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App