import { useState } from 'react'


const Person = ({person}) => {
  return (
    <p>{person.name}</p>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault();

    const alreadyExists = persons.find(person => person.name === newName);

    if (alreadyExists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newObject = {
        name: newName
      }
      setPersons(persons.concat(newObject));
      setNewName('');
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}

export default App