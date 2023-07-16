import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import DogApi from './components/DogApi'
function App() {

  const [dog, setDog] = useState({})
  const URL = 'https://dog.ceo/api/breeds/image/random'

  const FethDog = async () => {
    const response = await axios.get(URL)
    setDog(response.data)
  }

  useEffect(() => {
    FethDog();
  }, [])


  console.log(dog)





  return (
    <div>
      <DogApi dog={dog} FethDog={FethDog} />

    </div>
  )
}

export default App
