import Input from '../../component/dropodownInput/Input'

const SideBar = () => {
    const sortOption = ['high to low', 'low to high']
    return (
        <div className='sidebar__area'>
            <div className='sidebar__area-filter'>
                <p className='sidebar__area__title'>FILTER</p>
                <Input option={sortOption} />
                <Input option={sortOption} />
                <Input option={sortOption} />
            </div>
            <div className='sidebar__area-sort'>
                <p className='sidebar__area__title'>SORT</p>
                <Input option={sortOption} />
            </div>
        </div>
    )
}

export default SideBar;