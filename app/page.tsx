
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { AddToDo } from './add-new-todo'
import TodoList from './todo-list'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      
        <h2 className={inter.className}>
        Todo App&nbsp;
          </h2>
      </div>
    <AddToDo/>
     {/* @ts-expect-error Server Component */}
     
     <TodoList/>
    </main>
  )
}
