import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);

  const handleChange = (event) => {
    setLength(event.target.value);
  };

  const handleNumberChange = () => {
    setNumbers(prev => !prev);
  }

  const handleCharacterChange = () => {
    setCharacters(prev => !prev);
  } 

  useEffect(() => {
    
    let generatedPassword = "";
    let pwd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz';
    if(numbers) pwd+='0123456789';
    if(characters) pwd+=`.,:;!?'"-_+=*/<>()[]{}%^~@$#&|¢°§`;

    for(let i=1;i<=length;i++){
      let ranIndex = Math.random()*pwd.length+1;
      generatedPassword+=pwd.charAt(ranIndex);
    }

    setPassword(generatedPassword);
  }, [length,numbers,characters]);

  return (
    <div className="w-screen h-screen overflow-x-hidden flex justify-center items-center">
      <div className="bg-slate-600 flex-col rounded-xl w-[50%]">
        <h1 className="text-2xl text-white m-4 text-center">
          Password Generator
        </h1>
        <div className="flex items-center justify-center m-6">
          <input
            type="text"
            className="w-[70%] h-10 rounded-lg border-1 border-black bg-white"
            value={password}
            disabled
          />
          <div className="bg-emerald-300 p-[0.5rem] ml-[-10px] rounded-e-lg font-semibold cursor-pointer">
            copy
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <input
              type="range"
              value={length}
              min="8"
              max="100"
              onChange={handleChange}
              className="m-4"
            />
            <div className="text-lg text-yellow-300 font-medium">
              Length: {length}
            </div>
          </div>

          <div className="flex items-center ml-4 gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" onChange={handleNumberChange}/>
              <div className="text-lg text-yellow-300 font-medium">Numbers</div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" onChange={handleCharacterChange}/>
              <div className="text-lg text-yellow-300 font-medium">
                Characters
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
