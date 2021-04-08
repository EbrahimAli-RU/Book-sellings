import Photo from '../../assets/img/book1.jpg'

const Card = ({ title, price }) => {
    return (
        <div className='book__card'>
            <div className='book__card__top'>
                <div className='book__card__top-box'>
                    <img src={Photo} alt='BOOK' className='book__card__top-box-photo' />
                </div>
                <div className='book__card__top-detail'>
                    <h5 className='book__title'>{title.length < 45 ? `${title}` : `${title.substr(1, 42)}...`}</h5>
                    <p className="book__price"><span>৳</span>{price}</p>
                </div>
            </div>
            <div className='book__card__buttons'>
                <button className='btn detail'><a href='/'>Detail</a></button>
                <button className='btn add-to'>Add to wishlist</button>
            </div>
        </div>
    )
}

export default Card;