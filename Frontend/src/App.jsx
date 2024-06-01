import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/nav/Navbar'
import Home from './pages/Home'
import { FormProvider } from './context/FormContext'

function App() {

  return (
      <FormProvider>
    <div className='min-h-screen'>
    <Navbar/>
    <Outlet/>
    </div>
    </FormProvider>
  )
}

export default App
