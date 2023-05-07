import { useState } from 'react';


const Filter = ({onFilter}) => {
  return (
    <div>
        filter shown with: <input onChange={onFilter} />
      </div>
  )
}


const PersonForm = ({
  addPerson,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}


const Person = ({person}) => {
  return (
    <p>{person.name}: {person.number}</p>
  );
}


const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(person =>
        <Person key={person.id} person={person} />
      )}
    </div>
  );
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState(persons);

  const addPerson = (event) => {
    event.preventDefault();

    const alreadyExists = persons.find(person => person.name === newName);

    if (alreadyExists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({
        name: newName,
        number: newNumber
      }));
      setFilter(filter.concat({
        name: newName,
        number: newNumber
      }));
      setNewName('');
      setNewNumber('');
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const onFilter = (event) => {
    const filtered = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilter(filtered);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilter={onFilter} />
      <h2>Add new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber} 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filter} />
    </div>
  )
}

export default App;