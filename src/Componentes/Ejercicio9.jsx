import React, { useState, useEffect } from 'react';
export function Ejercicio9() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch(" https://random-data-api.com/api/users/random_user?size=10",{method: "GET"})
        .then((res) => res.json())
        .then((datosRecibidos) =>
        {
            setUsuarios(datosRecibidos);
        })
        .catch((err) => console.log("error".err));
    }, []);



    return (
    <div>
        <ol>
            {usuarios.map((usuario, index) => (
            <li key={index}>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={usuario.avatar} alt="Avatar" style={{ width: "300px", height: "300px" }} />
                        </div>
                        <div className="flip-card-back">
                        <h1>
                            {usuario.first_name} {usuario.last_name}
                            </h1>
                            <p>{usuario.employment.title}</p>
                            <p>{usuario.employment.key_skill}</p>
                        </div>
                    </div>
                </div>
            </li>
            ))}
        </ol>
    </div>
    );
    
}
