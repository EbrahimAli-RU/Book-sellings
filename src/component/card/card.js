import Photo from '../../assets/img/book1.jpg'

const Card = () => {
    return (
        <div className='book__card'>
            <div className='book__card__top'>
                <div className='book__card__top-box'>
                    <img src={Photo} alt='BOOK' className='book__card__top-box-photo' />
                </div>
                <div className='book__card__top-detail'>
                    <h5 className='book__title'>A Passage to the English Language</h5>
                    <p className="book__price"><span>৳</span>125</p>
                </div>
            </div>
            <div className='book__card__buttons'>
                <button className='btn detail'>Detail</button>
                <button className='btn add-to'>Add to cart</button>
            </div>
        </div>
    )
}

export default Card;