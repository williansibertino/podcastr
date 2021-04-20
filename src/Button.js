import { useState } from 'react';

export default function Button (props){
    const [counter, setCounter] = useState(1);
    // [estado, alterarEstado] = definir valor inicial
    // mesmo método do curso devSamurai
    const increment = () => {
        setCounter(counter + 1);
    }

    // passar as propriedades
    // children - usa se para puxar atributos do pai
    return (
        <>
            <span>{counter}</span>
            <button onClick={increment} >{props.children}</button>
            <br />
        </>
    )
}