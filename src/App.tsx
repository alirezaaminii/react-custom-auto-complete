import {useState} from "react";
import reactLogo from './assets/react.svg'
import './App.css'
import {AutoComplete} from "./components/auto-complete";
import {ISuggestion} from "./components/auto-complete/types";

const suggestions: ISuggestion[] = [
  {
    id: 'apple',
    label: 'Apple'
  },
  {
    id: 'gillette',
    label: 'Gillette'
  },
  {
    id: 'mastercard',
    label: 'Mastercard'
  },
  {
    id: 'the-walt-disney-company',
    label: 'The Walt Disney Company'
  },
  {
    id: 'facebook',
    label: 'Facebook'
  },
  {
    id: 'louis-vuitton',
    label: 'Louis Vuitton'
  }
]

function App() {
  const [tags, setTags] = useState<string[]>([]);

  const handleSelectTag = (tag: string) => {
    setTags(prevState => [...prevState, tag])
  }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" loading="lazy" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" loading="lazy" />
        </a>
      </div>
      <AutoComplete tags={tags} suggestions={suggestions} onSelect={handleSelectTag} />
    </div>
  )
}

export default App
