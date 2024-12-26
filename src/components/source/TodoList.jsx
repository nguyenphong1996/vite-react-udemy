
const TodoList = (props) => {
    const { myname , age, data} = props
    // console.log('checkprops', dataList)
    return (
        <div className="containerTodoList">
            <p className="Todo">Learn ReactJS</p>
            <p className="Todo">Learn React Native</p>
            <p className="Todo">Learn Docker</p>
            <p>my name is: {myname}</p>
            <p>I'm {age} year old</p>
            <p>My address: {data.address}</p>
            <p>My phone: {data.phone}</p>
            <p>My email: {data.email}</p>
        </div>
    );
}

export default TodoList