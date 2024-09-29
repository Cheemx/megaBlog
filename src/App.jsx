import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import {Header, Footer} from './components'
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
        authService.getCurrentUser()
        .then((userData) => {
            if(userData){
                dispatch(login({userData}))
            } else {
                dispatch(logout())
            }
        })
        .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gray-700'>
        <div className='w-full block'>
            <Header />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    </div>
  ) : (
    <div className='flex justify-center items-center min-h-screen bg-gray-700'>
        <div className='w-16 h-16 border-8 border-t-cyan-700 border-gray-300 rounded-full animate-spin'></div>
        <p className='ml-4 text-cyan-500'>Loading...</p>
    </div>
  )
}

export default App
