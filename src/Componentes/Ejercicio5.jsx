export function Ejercicio5() {
    const lista = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']; 
    const ListaNombres = lista.map((nombre, index) =>
    {
        return <li key={index}> {nombre} </li>
    })
    return (
        <>
            <ul>
                {ListaNombres}
            </ul>
        </>
    );
}
