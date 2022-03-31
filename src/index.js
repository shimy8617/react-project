import React from 'react';
import ReactDOM from 'react-dom';

//CSS
//import './index.css';

const books = [
    {
        id: 1,
        img: 'https://m.media-amazon.com/images/I/81KvOPlBd0L._AC_UL320_.jpg',
        title: 'Sold on a Monday: A Novel',
        author: 'Kristina McMorris',
    },
    {
        id: 2,
        img: 'https://m.media-amazon.com/images/I/61pZUq-dKyL._AC_UL320_.jpg',
        title: 'Watching You: A Novel',
        author: 'Lisa Jewell',
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/I/81YK2vnrqFL._AC_UL320_.jpg',
        title: 'Devoted',
        author: 'Dean Koontz',
    }, 
];

function BookList() {
    return <section className='booklist'>
        {books.map((book,index) => {
        return <Book key={book.id} {...book}></Book>;
    })}
    </section>
}
const Book = ({img, title, author}) => {
    /*console.log(props);
    const { img, title, author } = props;*/

    //attribute, eventHandler
    //onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello world');
    }
    const complexExample = (author) => {
        console.log(author);
    }

    return (
        <article className='book' onMouseOver={() => {
            console.log(title);

        }}>
            <img src={img} alt='' />
            <h1 onClick={()=> console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                reference example
            </button>
            <button type="button" onClick={() => complexExample(author)}>more complex example</button>
        </article>
    )
}

ReactDOM.render(<BookList />, document.getElementById('root'));