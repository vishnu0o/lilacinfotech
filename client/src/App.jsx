
import {Routes,Route} from 'react-router-dom'
import Routepage from './Routes'


function App() {
  

  return (
    <>
    <Routes>
     <Route path='/*' element={<Routepage/>}></Route>
    </Routes>
    </>
  )
}

export default App
