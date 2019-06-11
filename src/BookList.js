import React from 'react'
import Book from './Book'

class BookList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            books:props.books
        }
    }

    addToWishlist=(book)=>{
        console.log(book)
        this.props.addToWishlist(book);
    }

    render(){
        return(
            <React.Fragment>
            <h1>BookList</h1>
            {
                this.state.books.map((book)=>{
                    return <Book key={book.id} book={book} addToWishlist={this.addToWishlist}/>
                })
            }
            </React.Fragment>
        )
    }
}

export default BookList;