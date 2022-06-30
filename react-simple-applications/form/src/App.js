import { useState } from 'react'
import KartaPrac from './Kartaprac'
import Formularz from './Formularz'
function Program() {
 const [dziennikZadan, ustawDziennikZadan] = useState([])
 const dodajPrace = (zadanie) => {
 let zadania = [...dziennikZadan, zadanie]
 ustawDziennikZadan(zadania)
 }
 return (
 <section>
 <Formularz dodajPrace={dodajPrace}/>
 <KartaPrac dziennik={dziennikZadan}/>
 </section>
 )
}
export default Program
