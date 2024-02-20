import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";
import React from 'react'

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string, id: number }
  }
  return (
    <main>
      <Form onSave={handleSave}>
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
