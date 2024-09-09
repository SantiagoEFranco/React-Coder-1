import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'

function App() {


  return (
    <>
    <NavBar />
    <ItemListContainer ItemListTitle="Bienvenidos a RPM" greeting="La tienda donde podes encontrar tu moto ideal!"/>
    </>
  )
}

export default App
