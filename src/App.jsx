//Nucleo de mi proyecto
//une los componentes
import Header from "./componentes/header"
import ListadoPaciente from "./componentes/listapacientes"
import Formulario from "./componentes/formulario"
import Error from "./componentes/error"
import Paciente from "./componentes/pacientes"

function App() {

  return (
    <>
     <Header/>
     <ListadoPaciente/>
     <Formulario/>
     <Paciente/>
     <Error/>
    </>
   
  )
}

export default App
 