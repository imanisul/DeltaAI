import React from 'react';
import {signInWithPopup} from 'firebase/auth';
import {auth, googleProvider} from '../utils/firebase.js';
import api from '../utils/axios.js'

function App() {

  
  const handleLogin = async (token) => {
      try {
        const {data }= await api.post('/auth/login', token);
        console.log(data)
      } catch (error) {
        console.log(error)
      }
  }

  const googleLogin = async () => {
    const data = await signInWithPopup(auth, googleProvider);
    const token = data.user.getIdToken();
    console.log(token)
    await handleLogin(token);
    console.log(data)
  }
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
      <button className='w-50 h-24 bg-white'
        onClick={googleLogin}
      >
        Continue With Google
      </button>
    </div>
  )
}

export default App