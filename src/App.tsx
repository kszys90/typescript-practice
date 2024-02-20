import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";
import React from 'react'
import { type FormHandle } from "./components/Form";
function App() {
  const customRef = React.useRef<FormHandle>(null)

  function handleSave(data: unknown) {
    const extractedData = data as { name: string, id: number }
    console.log(extractedData)
    customRef.current?.clear()
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customRef}>
        <Input label="Name" id="name" type="text" />
        <Input label="Age" id="age" type="number" />
        <p>
          <Button>Click me!</Button>
        </p>
      </Form>
    </main>
  )
}

export default App;
