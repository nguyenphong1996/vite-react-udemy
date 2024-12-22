
const TodoInput = () => {
    return (
        <div className='addTodo'>
            <input
                type='text'
                className='textInput'
                placeholder='Enter your task' />
            <button className='button'>Add</button>
        </div>
    );
}

export default TodoInput