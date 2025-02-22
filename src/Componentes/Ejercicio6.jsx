export function Ejercicio6() {
    const Lista = [
        {
            Nombre: 'dog',
            Animal: '🐶'
        },
        {
            Nombre: 'cat',
            Animal: '😽'
        },
        {
            Nombre: 'chicken',
            Animal: '🐤'
        },
        {
            Nombre: 'cow',
            Animal: '🐮'
        },
        {
            Nombre: 'sheep',
            Animal: '🐑'
        },
        {
            Nombre: 'horse',
            Animal: '🐎'
        }
    ]
    const ListaNombres = Lista.map((item,index) =>
    {
        return (
            <div key={index}>
                {item.Animal} {item.Nombre}
            </div>
        );
    })
    return (
        <>
            {ListaNombres}
        </>
    );
}
