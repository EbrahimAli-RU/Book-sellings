import Card from '../../component/card/card'
import SideBar from '../layout/Sidebar'

const Main = () => {
    return (
        <div className='content'>
            <div className='sidebar'>
                <SideBar />
            </div>
            <main className='cards__container'>
                <Card title='A Passage to the English Language A Passage to the English Language' price={125} />
                <Card title='A Passage to the English Language' price={125} />
                <Card title='A Passage to the English Language' price={125} />
                <Card title='A Passage to the English Language' price={125} />
                <Card title='A Passage to the English Language' price={125} />
                <Card title='A Passage to the English Language' price={125} />
            </main>
        </div>
    )
}

export default Main;