import React from 'react';
import Person from './components/Person'
import Form from './components/Form'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      person : {
        firstName: '',
        lastName: '',
        age: ''
      },
      persons: [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 28,
        }, {
          firstName: 'Ana',
          lastName: 'Weee',
          age: 24,
        }, {
          firstName: 'Mikle',
          lastName: 'Jordan',
          age: 22,
        }
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);

}

handlePersonChange(prop, val) {
  this.setState({
    person: {
      ...this.state.person,
      ...{
        [prop] : val
      }
    }
  })

}

handleSubmit(event) {
  event.preventDefault();

  const { person } = this.state

  const persons = !person.ix && person.ix !== 0
    ? [...this.state.persons, person]
    : this.state.persons.map((p, ix) => {
      return ix === person.ix
        ? person
        : p
    })

  this.setState({
    person: {
      firstName : '',
      lastName: '',
      age: ''
    },
    persons
  })
}

handleDeletePerson(deleteIx) {
  this.setState({
    persons: this.state.persons.filter((_, ix) => deleteIx !== ix)
  })
}

handleEditPerson(ix) {
  this.setState({
    person : {
      ...this.state.persons[ix],
      ix
    }

  })
}

  render() {
    return (
      <div className='App'>
        <Form 
          firstName={this.state.person.firstName}
          lastName={this.state.person.lastName}
          age={this.state.person.age}
          person={this.state.person}
          onChangeFirstname={(e) => this.handlePersonChange('firstName', e.target.value)}
          onChangeLastName={(e) => this.handlePersonChange('lastName', e.target.value)}
          onChangeAge={(e) => this.handlePersonChange('age', e.target.value)}
          handleSubmit={this.handleSubmit}
        />
        {
          this.state.persons.map(({firstName, lastName, age}, ix) => {
            return (
              <div key={firstName + lastName + age}>
                <Person
                  firstName= {firstName}
                  lastName={lastName}
                  age={age}
                  handleDeletePerson={() => this.handleDeletePerson(ix)}
                  handleEditPerson={() => this.handleEditPerson(ix)}
                />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
