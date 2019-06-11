import React from 'react'

class Users extends React.Component{
    constructor(){
        super();

        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((users)=>{
            this.setState({
                users:users,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                error:true,
                loading:false
            })
        })
    }

    render(){
        if(this.state.loading==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Loading...</p>
                </div>
            )
        }

        if(this.state.error==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Sorry, Failed to load data. Please try again later.</p>
                </div>
            )
        }
        return(
            <div>
                <h1>Users</h1>
                <ul>
                    {
                       this.state.users.map((user)=>{
                           return <li key={user.id}>{user.name}</li>
                       }) 
                    }
                </ul>
            </div>
        )
    }
}

export default Users;