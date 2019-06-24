import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }

        this.myTodoRef=React.createRef();
    }

    onTodoChange=(e)=>{
        var todo=e.target.value;
        this.setState({
            todo:todo
        })
    }

    addTodo=()=>{
        this.setState({
            todos:this.state.todos.concat(this.state.todo)
        },()=>{
            this.setState({
                todo:''
            })
        })
    }

    componentDidMount(){
        this.myTodoRef.current.focus();
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" ref={this.myTodoRef} value={this.state.todo} onChange={this.onTodoChange} name="todo"/>
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {
                        this.state.todos.map((todo,index)=>{
                            return <li key={index}>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;