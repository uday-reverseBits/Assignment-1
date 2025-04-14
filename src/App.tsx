import './App.css'
import { Button } from './components/button'

function App() {
  const bgColor: string[] = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-pink-500"]

  return (
    <>

      {bgColor.map((color) => {
        return <Button bgColor={color} />
      })}

    </>
  )
}

export default App
