import React, { useState } from 'react';

export function Ejercicio7() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const manejarCambioNombre = (event) => {
        setNombre(event.target.value);
    };

    const manejarCambioApellido = (event) => {
        setApellido(event.target.value);
    };

    const Alerta = (event) => {
        event.preventDefault();
        alert(`Hola ${nombre} ${apellido}`);
        manejarReset();
    }
    
    const manejarReset = () => {
        setNombre('');
        setApellido('');
    };
    return (
        <>
            <form>
                <label>
                    <label for="Nombre">Nombre </label>
                    <input type="text" name="Nombre"  value={nombre} onChange={manejarCambioNombre}/>
                    <br />
                    <label for="Apellidos">Apellidos </label>
                    <input type="text" name="Apellidos"  value={apellido} onChange={manejarCambioApellido}/>
                </label>
                <br />
                <input type="submit" value="Enviar" onClick={Alerta} />
                <input type="reset" value="Eliminar todo" onClick={manejarReset}/>
            </form>
        </>
    );
}
