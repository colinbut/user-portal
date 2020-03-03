import React from 'react'
import Table from './Table'

class App extends React.Component {

    state = {
        data: [
            {
                name: 'Colin But',
                job: 'Software Engineer'
            },
            {
                name: 'Amy Man',
                job: 'Data Analyst'
            },
            {
                name: 'Daniel But',
                job: 'Project Manager'
            },
            {
                name: 'Martin Man',
                job: 'Application Support'
            },
            {
                name: 'Christine Man',
                job: 'UI/UX Designer'
            }
        ]
    }

    removeUser = index => {
        const { data } = this.state;
        
        this.setState({
            data: data.filter((data, i) => {
                return i !== index
            })
        })
    }

    render() {

        const { data } = this.state

        return (
            <div className="container">
                <Table userData={data} removeUser={this.removeUser} />
            </div>
        )
    }
}

export default App