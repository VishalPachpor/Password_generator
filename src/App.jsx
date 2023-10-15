import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState(" ");
  const [length, setLength] = useState(8);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [numbersAllowed, setNumbersAllowed] = useState(false);

  const passwordGenerator = useCallback(
    ()=> {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numbersAllowed){
        str += "123456789"
      } 
      if(charactersAllowed){
        str += "!@#$%^&*(){}~`-_=+[]"
      }
      
      for(let i=1; i < array.length; i++){
        let char = Math.floor(Math.random() * str.length + 1);
        pass = str.charAt(char)
      }

      setPassword(pass)
    }, 
  [length, setPassword, charactersAllowed, numbersAllowed])

  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-4 my-8 text-orange-600 bg-gray-700 '>
      <div className='flex shadow-xl overflow-hidden mb-4'>
        <input type="text" name="" id="" />
      </div>
   </div>
    </>
  )
}

export default App
