import { useState, useEffect } from "react";   


function Contador() {
    const [contador, setContador] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                setContador(contador + 1);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
    }; []});

    function togglePause() {
        setPaused(!paused);
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={togglePause}>{paused ? "Continuar" : "Pausar"}</button>
        </div>
    );
    
}

export default Contador;
