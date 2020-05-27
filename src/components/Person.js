import React from 'react'


class Person extends React.Component {

    render() {
      return (
        <div>
          <p>
              {this.props.firstName},
              {this.props.lastName},
              {this.props.age}
          </p>
          <button onClick={this.props.handleDeletePerson}>
            Delete
          </button>

          <button onClick={this.props.handleEditPerson}>
            Edit
          </button>
        </div>
      );
    }
  }
  
  export default Person;