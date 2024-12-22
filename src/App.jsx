
import './components/source/Todo.css'
import TodoInput from './components/source/TodoInput'
import TodoList from './components/source/TodoList'

function App() {
  return (
    <div className='container'>
      <p className='titleText'>Todo list</p>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
