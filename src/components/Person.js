import React from 'react'


class Person extends React.Component {

    constructor(props) {
        super(props)

        this.state = {blah : 0}

    }

    render() {
      return (
        <p>
            {this.props.name},
            {this.props.firstName},
            {this.props.lastName},
            {this.props.age}
        </p>
      );
    }
  }
  
  export default Person;