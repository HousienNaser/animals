import {useState} from "react"
import AnimalShow from "./AnimalShow"

const getRandomAnimal= ()=>{
  const animals = ['cat','bird','cat','cow', 'dog','gator','horse']
  return animals[Math.round(Math.random() * animals.length)]
}

function App(){
  const [animals, setAnimals] = useState([])
  const handleClick = ()=> {
    setAnimals([...animals , getRandomAnimal()])
  }

  const renderedAnimals =animals.map((animals,index)=>{
    return <AnimalShow type = {animals} key={index}/>
  })
  return <div>
    <button onClick={handleClick}>Show Animal</button>
    <h2>{renderedAnimals} </h2>
  </div>
}
export default App;