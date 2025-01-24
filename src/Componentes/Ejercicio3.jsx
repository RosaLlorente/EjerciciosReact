export function Ejercicio3()
{
    function Alerta1()
    {
        return alert("Has realizado click en el boton 1");
    }
    function Alerta2()
    {
        return alert("Has realizado click en el boton 2");
    }
    function Alerta3()
    {
        return alert("Has realizado click en el boton 3");
    }
    return (
    <>
        <button onClick={Alerta1}>Haz click aqui</button>
        <button onClick={Alerta2}>Haz click aqui</button>
        <button onClick={Alerta3}>Haz click aqui</button>
    </>)
}