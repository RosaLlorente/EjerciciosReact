import {Ejercicio1} from './Componentes/Ejercicio1';
import {Ejercicio2} from './Componentes/Ejercicio2';
import {Ejercicio3} from './Componentes/Ejercicio3';
import {Ejercicio4} from './Componentes/Ejercicio4';
import {Ejercicio5} from './Componentes/Ejercicio5';
import {Ejercicio6} from './Componentes/Ejercicio6';
import {Ejercicio7} from './Componentes/Ejercicio7';
import {Ejercicio8} from './Componentes/Ejercicio8';
import {Ejercicio9} from './Componentes/Ejercicio9';
import './App.css'

function App() {

  return (
    <>
      <h1>RELACION DE EJERCICIOS DE REACT</h1>
      <h2>Ejercicio 1: ¡Hola mundo!</h2> 
      <p>Cada tutorial de inicio sobre un lenguaje de programación te enseña cómo emitir el mensaje "¡Hola, mundo!" usando el lenguaje.</p>
      <Ejercicio1 />
      <hr />

      <h2>Ejercicio 2: Captura de clics de usuarios</h2>
      <p>Este ejercicio le permitirá comenzar con el manejo de eventos, que es un concepto básico no solo en React sino también en JavaScript (que es otro requisito previo antes de aprender React) .</p>
      <Ejercicio2 />
      <hr />

      <h2>Exercise 3: Custom Component</h2>
      <p> Pero gran parte del poder que React nos brinda a los desarrolladores es poder crear nuestros propios componentes y reutilizarlos.</p>
      <Ejercicio3 />
      <hr />

      <h2>Ejercicio 4: Estado y propiedades</h2>
      <p> Utilice el useStategancho de React para realizar un seguimiento de cuántas veces se hace clic en un botón y mostrar el número.</p>
      <Ejercicio4 />
      <hr />

      <h2>Ejercicio 5: Mapeo a través de una lista y representación</h2>
      <p>En este ejercicio, en lugar de codificar manualmente e "imperativamente" la representación de cada elemento de una lista, utilice la función de mapa para "declarar" cómo React debe representar la lista.</p>
      <p>Dada una matriz:['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']</p>
      <p>Utilice la función de mapa para representarlos en una lista desordenada</p>
      <Ejercicio5 />
      <hr />

      <h2>Ejercicio 6: Mapeo a través de una lista y representación (con un componente personalizado)</h2>
      <p>En lugar de utilizar las etiquetas HTML uly li, cree un componente personalizado que acepte una lista como su propiedad y la represente en consecuencia.</p>
      <Ejercicio6 />
      <hr />

      <h2>Ejercicio 7: Construir un formulario</h2>
      <p>Cree un formulario que acepte un nombre y un apellido. Y en lugar de un aburrido botón de "Enviar", cree un botón que diga "Salúdame" y que, al hacer clic, emita un mensaje de alerta "¡Hola, [nombre] [apellido]!".</p>
      <Ejercicio7 />
      <hr />
      
      <h2>Ejercicio 8: Representación de JSON</h2>
      <ol>
        <li>Crea un componente personalizado para representar cada chiste.</li>
        <li>Utilizando la función de mapa, mapee cada objeto en la matriz. Utilice el componente personalizado para representar cada objeto.</li>
      </ol>
      <Ejercicio8 />
      <hr />

      <h2>Ejercicio 9: Trabajar con una API</h2>
      <ol>
        <li>Mostrar la información básica de cada usuario en una tarjeta.</li>
        <li>Cuando se pasa el cursor sobre una tarjeta, esta se gira para mostrar más información sobre el usuario.</li>
        <li>También debería haber un botón que, al hacer clic, obtenga otro conjunto de 10 usuarios aleatorios, que actualice las tarjetas.</li>
      </ol>
      <Ejercicio9 />
    </>
  )
}

export default App
