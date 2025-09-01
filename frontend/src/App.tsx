import { Button } from "broto-ui-react"

function App() {

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-center text-4xl">mangos</h1>
      <h2 className="text-center text-2xl">under construction !</h2>
      <Button primary={true} label="Click me" onClick={() => alert("Button clicked!")}></Button>
    </section>
  )
}

export default App
