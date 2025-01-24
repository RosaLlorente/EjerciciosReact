export function Ejercicio5() {
    const lista = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']; 
    const ListaNombres = lista.map(nombre =>
    {
        return <li key={nombre.id}> {nombre} </li>
    })
    return (
        <>
            <ul>
                {ListaNombres}
            </ul>
        </>
    );
}
