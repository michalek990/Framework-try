const listaZadan = [
    {
    id: 1,
    tekst: "Zrobienie zakupów",
    zrealizowano: true
    },
    {
    id: 2,
    tekst: "Przegląd techniczny samochodu",
    zrealizowano: false
    },
    {
    id: 3,
    tekst: "Wizyta u dentysty",
    zrealizowano: false
    },
   ]
//punkt A
console.log("Punkt A")
   function zad1(element,index,array){
       console.log(element.tekst)
   }
  listaZadan.forEach(zad1);
//punkt B
console.log("Punkt B")
//punk C
console.log("Punkt C")
function isDone(element,index,array){
   return element.zrealizowano
}
var zrealizowane = listaZadan.filter(isDone);
console.log(zrealizowane)


//zadanie 2.3
const poniedzialek = [
    {
    'nazwa': 'Przygotowania do zajęć z AI',
    'czas': 180
    },
    {
    'nazwa': 'Realizacja projektu z AI',
    'czas': 120
    }
   ]
   const wtorek = [
    {
    'nazwa': 'Rozbudowa swojego bloga',
    'czas': 240
    },
    {
    'nazwa': 'Administrowanie serwisem szkoly',
    'czas': 180
    },
    {
    'nazwa': 'Sluchanie koncertu online',
    'czas': 240
    }]
 console.log("Zadanie 2.3")
    function connect(el,el2){
        var temp = wtorek.length
        wtorek[temp] = el
        wtorek[temp+1] = el2
        return wtorek
        }
    poniedzialek.reduce(connect)

    var czasy = wtorek.map(function(x){
        return x.czas/60
    });

    function wiekszyniz2(element){
        return element>2
    }
    czasy.filter(wiekszyniz2)
    console.log(czasy)
    
    var stawka = wtorek.map(function(x){
        return (x.czas/60) * 35
    })
    
    var suma = stawka.reduce(function(accumulator, currentVal){
        return [(+accumulator)+(+currentVal)]
    })


    console.log(stawka)
    console.log(suma)

    var format = suma.map(function(x){
        return x.toFixed(2)
    })