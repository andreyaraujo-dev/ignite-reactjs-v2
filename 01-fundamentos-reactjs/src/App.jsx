import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Andrey Araújo" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet risus at risus tempor rhoncus nec nec odio. Aliquam ut tempor risus, lacinia faucibus orci. Nulla mollis nisl vel tellus dignissim, vitae efficitur purus hendrerit. Etiam eu purus ultrices, consequat mauris a, commodo nibh." />
          <Post author="Seu João" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet risus at risus tempor rhoncus nec nec odio. Aliquam ut tempor risus, lacinia faucibus orci. Nulla mollis nisl vel tellus dignissim, vitae efficitur purus hendrerit. Etiam eu purus ultrices, consequat mauris a, commodo nibh." />
        </main>
      </div>
    </div>
  )
}

export default App
