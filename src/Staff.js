import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            staffs: [],
        };
    }

    componentDidMount() {
        const url = "http://localhost:3000/staff/";
        //const url = "https://student-staff-details.herokuapp.com/GetAllStaff/"
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    staffs: result,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        const { error, staffs } = this.state;
        if (error) {
            return <div>Error: {error}</div>;
        } else {
            return (
                <div className="App">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Student Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffs.map((staff) => (
                                <tr key={staff._id}>
                                    <td>{staff._id}</td>
                                    <td>{staff.id}</td>
                                    <td>{staff.name}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.stuCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}

export default Staff;