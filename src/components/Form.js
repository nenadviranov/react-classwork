import React from 'react'

class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              name="firstName" 
              value={this.props.firstName}
              onChange={this.props.onChangeFirstname}
            />
            <br/>
            <input 
              type="text" 
              name="lastName" 
              value={this.props.lastName} 
              onChange={this.props.onChangeLastName}
            />
            <br/>
            <input 
              type="text" 
              name="age" 
              value={this.props.age} 
              onChange={this.props.onChangeAge}
            />
            <br/>
            <button type="submit">
              {
                !this.props.person.ix && this.props.person.ix !== 0 
                  ? 'Add'
                  : 'Update'
              }
            </button>
          </form>
        )
    }
}

export default Form