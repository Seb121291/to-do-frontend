import InputSection from "../components/InputSection"
import TodoList from "../components/TodoList"
import { useEffect } from "react"

export default function TodoApp() {

  useEffect(() => { 
    async function fetchTodoList(url) {
      const data = await fetch(url)
      const TodoList = data.json() 
    }

    fetchTodoList(mock_url)
  }, [])

  return (
    <div>
      <InputSection />
      <TodoList />
    </div>
  )
}