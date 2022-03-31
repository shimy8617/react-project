import React from 'react';
import ReactDOM from 'react-dom';

//CSS
//import './index.css';

const books = [
    {
        img: 'https://m.media-amazon.com/images/I/81KvOPlBd0L._AC_UL320_.jpg',
        title: 'Sold on a Monday: A Novel',
        author: 'Kristina McMorris',
    },
    {
        img: 'https://m.media-amazon.com/images/I/61pZUq-dKyL._AC_UL320_.jpg',
        title: 'Watching You: A Novel',
        author: 'Lisa Jewell',
    },
];

function BookList() {
    return <section className='booklist'>
        {books.map((book) => {
        const {img, title, author} = book;
        return (
        <div>
            <h3>{title}</h3>
            <h6>{author}</h6>
        </div>
        );
    })}
    </section>
}
const Book = (props) => {
    const { img, title, author } = props;

    return (
        <article className='book'>
            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    )
}

ReactDOM.render(<BookList />, document.getElementById('root'));