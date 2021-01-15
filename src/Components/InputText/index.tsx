import './InputText.css'

const InputText = ({ onChange, value, title }: any) => {
    return <input type="text" className="input-control" placeholder={title} autoComplete="off" onChange={onChange} value={ value} autoFocus />
    
}

export default InputText
