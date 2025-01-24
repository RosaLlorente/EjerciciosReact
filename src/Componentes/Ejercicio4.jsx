import { useState } from 'react';

export function Ejercicio4() {
    const [numeroPulsaciones, setNumeroPulsaciones] = useState(0); // variable reactiva

    function IncrementarNumero() {
        setNumeroPulsaciones(prevNumero => prevNumero + 1); // Usamos el valor anterior
    }

    return (
        <>
            <button onClick={IncrementarNumero}>{numeroPulsaciones}</button>
        </>
    );
}
