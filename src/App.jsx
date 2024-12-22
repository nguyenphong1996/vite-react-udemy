
import './components/source/Todo.css'

function App() {
  return (
    <div className='container'>
      <p className='titleText'>Todo list</p>
      <div className='addTodo'>
        <input
          type='text'
          className='textInput'
          placeholder='Enter your task' />
        <button className='button'>Add</button>
      </div>
    </div>
  )
}

export default App
