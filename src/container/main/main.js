import Card from '../../component/card/card'
import SideBar from '../layout/Sidebar'
import { connect } from 'react-redux'

const Main = (props) => {

    let books = <p>Loading.....</p>
    console.log(props.books.length)
    if (props.books.length !== 0) {
        books = props.books.map(el => <Card photo={el.coverphoto} key={el._id} title={el.bookName} price={el.price} />)

    }
    return (
        <div className='content'>
            <div className='sidebar'>
                <SideBar />
            </div>
            <main className='cards__container'>
                {books}
            </main>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        books: state.book.books
    }
}

export default connect(mapStateToProps)(Main);