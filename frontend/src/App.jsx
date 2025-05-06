// Desc: Main App component
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import { AuthProvide } from './context/authContext'

function App() {
  return (
    <>
      <AuthProvide>
        <Navbar />
        <main className='min-h-screen max-w-7xl mx-auto px-4 py-6 font-primary'>
          <Outlet /> 
        </main>
        <Footer />

      </AuthProvide>

    </>
  )
}

export default App
