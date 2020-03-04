import React from 'react'
import Table from './Table'
import Form from './Form';

class App extends React.Component {

    state = {
        data: []
    }

    removeUser = index => {
        const { data } = this.state;
        
        this.setState({
            data: data.filter((data, i) => {
                return i !== index
            })
        })
    }

    addUser = user => {
        this.setState({
            data: [...this.state.data, user]
        })
    }

    render() {

        const { data } = this.state

        return (
            <div className="container">
                <Table userData={data} removeUser={this.removeUser} />
                <Form addUser={this.addUser} />
            </div>
        )
    }
}

export default App