import {useState} from 'react'

const FunButton = ({title}) => {
    // Math.floor(Math.random()*16777215).toString(16);
    const [background, setBackground] = useState('blue')
    const [size, setSize] = useState(36)


    const changeButton = () => {
        const color = Math.floor(Math.random()*16777215).toString(16)
        setBackground(`#${color}`)
        const randomSize = Math.floor(Math.random() * 100)
        setSize(randomSize)
        
    }

    return (
        <button onClick={changeButton} style={{padding: "5px", borderRadius: "8px", fontSize: size, backgroundColor: background}}>
         {title}
        </button>
    )
}

export default FunButton