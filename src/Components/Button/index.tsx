
const Button = ({type, className, title, onClick}:any) => {
    return <button type={type} className={className} onClick={onClick}>{title}</button>
}

export default Button
