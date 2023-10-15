import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState(" ");
  const [length, setLength] = useState(8);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [numbersAllowed, setNumbersAllowed] = useState(false);

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numbersAllowed) {
        str += "123456789"
      }
      if (charactersAllowed) {
        str += "!@#$%^&*(){}~`-_=+[]"
      }

      for (let i = 1 < array.lengt; i++;) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass = str.charAt(char);
      }

      setPassword(pass)
    },
    [length, setPassword, charactersAllowed, numbersAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 text-white'>

          <input
            type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
          />
          <button className='bg-blue-700 outline-none px-3 py-0.5 text-white rounded-lg'>Copy</button>
        </div>

        <div className='flex tex-sm gap-x-2 '>
          <div className='flex text-center gap-x-1 '>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}

            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div>
            <input type="checkbox"
              defaultChecked={numbersAllowed}
              className='cursor-pointer'
              onChange={() => {
                setNumbersAllowed((prev) = !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>

          <div >
            <input type="checkbox"
              value={length}
              className='cursor-pointer'
            />
            <label htmlFor="">Characters</label>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
