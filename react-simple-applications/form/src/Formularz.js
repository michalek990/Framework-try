import { useState } from 'react'
import * as React from 'react'
function Formularz({ dodajPrace }) {
 const [opis, ustawOpis] = useState()
 const [nazwa, ustawNazwe] = useState()
 const [data, ustawDate] = useState()
 const [priorytet, ustawPriorytet] = useState(false)
 const handleSubmit = (e) => {
    dodajPrace([opis, nazwa, data, priorytet])
 e.preventDefault()
 }
 
 
 return (
 <form onSubmit={e => { handleSubmit(e) }}>
 <label>Opis pracy:</label> <br />
 <input name='opis' type='text' value={opis}
 onChange={e => ustawOpis(e.target.value)} /> <br />
 <label>Nazwa:</label> <br />
 <input name='nazwa' type='text' value={nazwa}
 onChange={e => ustawNazwe(e.target.value)} /> <br />
 <label>Date:</label> <br />
 <input name='data' type='date' value={data}
 onChange={e => ustawDate(e.target.value)} /> <br />
 <label>Priorytet:</label>
 <input name='priorytet' type='checkbox' 
 onChange={e => {if(e.target.checked){ustawPriorytet("TAK")}else{ustawPriorytet("NIE")};}} /> <br />
 <input type='submit' value='Dodaj zadanie' />
 </form>
 )
}
export default Formularz
