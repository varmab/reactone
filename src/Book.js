import React from 'react'

class Book extends React.Component{
    constructor(props){
        super(props);

        this.state={
            book:props.book
        }
    }

    addToWishlist=()=>{
        this.props.addToWishlist(this.state.book);
    }

    render(){
        return(
            <React.Fragment>
                 <h1>{this.state.book.title}</h1>
                 <button onClick={this.addToWishlist}>Add to wishlist</button>
            </React.Fragment>
           
        )
    }
}

export default Book;