const Input = ({ option }) => {
    console.log(option)
    return (
        <select id='division' className='dropdown__input'>
            {option.map(el => <option key={el}>{el}</option>)}
        </select>
    )
}

export default Input;