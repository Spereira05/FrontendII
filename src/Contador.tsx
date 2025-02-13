import { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }

    return (
        <div>
            <h1>Contador</h1>
            <h3>{contador}</h3>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default Contador;