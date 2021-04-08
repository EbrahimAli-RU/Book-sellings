import Card from '../../component/card/card'
import SideBar from '../layout/Sidebar'

const Main = () => {
    return (
        <div className='content'>
            <div className='sidebar'>
                <SideBar />
            </div>
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