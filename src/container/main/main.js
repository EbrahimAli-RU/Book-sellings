import Card from '../../component/card/card'

const Main = () => {
    return (
        <div className='content'>
            <div className='sidebar'>SIDEBAR</div>
            <main className='cards__container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </main>
        </div>
    )
}

export default Main;