export function Ejercicio2()
{
    function Alerta()
    {
        return alert("Has realizado click");
    }
    return (
    <>
        <button onClick={Alerta}>Haz click aqui</button>
    </>)
}