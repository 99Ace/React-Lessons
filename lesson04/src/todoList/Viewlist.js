import React from 'react'
import axios from 'axios'
export default class Viewlist extends React.Component {
    state = {
        data: []
    }

    loadData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })
    }

    componentDidMount() {
        this.loadData
    }

    render() {

        return (
            <div>
            <h1 className='title is-1'> Summary of listing </h1>
            <h1 className='title is-2'> Summary of listing </h1>
            <h1 className='title is-3'> Summary of listing </h1>
            <h1 className='title is-4'> Summary of listing </h1>
            <h1 className='title is-5'> Summary of listing </h1>
            <h1 className='title is-6'> Summary of listing </h1>
            <div className='block'>
            <table>
                <th></th>
                <tr>
                    <td></td>
                </tr>
            </table>
            </div>
        </div>
        )
    }
}
