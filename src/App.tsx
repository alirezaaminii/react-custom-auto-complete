import reactLogo from './assets/react.svg'
import './App.css'
import {DropDown} from "./components/dropdown";
import {useState} from "react";
import {DropdownOption} from "./hooks/useDropDown/types";

const options = [
  {
    label: 'Science',
    value: 'science'
  },
  {
    label: 'Education',
    value: 'education'
  },
  {
    label: 'Art',
    value: 'art'
  },
  {
    label: 'Sport',
    value: 'sport'
  },
  {
    label: 'Games',
    value: 'games'
  },
  {
    label: 'Health',
    value: 'health'
  },
  {
    label: 'Bottle',
    value: 'bottle'
  },
  {
    label: 'Laptop',
    value: 'laptop'
  },
  {
    label: 'Stand',
    value: 'stand'
  },
]

function App() {
  const [value, setValue] = useState<DropdownOption | null>(null);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <DropDown value={value} options={options} onSelect={setValue} />
    </div>
  )
}

export default App
