import './components/source/Todo.css'
import TodoInput from './components/source/TodoInput'
import TodoList from './components/source/TodoList'

function App() {
  const myname = 'phongnguyen';
  const age = 18;
  const data = {
    address: 'TPHCM',
    phone: '0123456789',
    email: 'phongnguyen.pha@gmail.com'
  }
  return (
    <div className='container'>
      <p className='titleText'>Todo list</p>
      <TodoInput />
      <TodoList myname={myname} age={age} data={data}  />
    </div>
  )
}

export default App