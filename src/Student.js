import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            students: [],
        };
    }

    componentDidMount() {
        const url = "http://localhost:3000/student/";
        //const url = "https://student-records-details.herokuapp.com/student/";
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    students: result,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        const { error, students } = this.state;
        if (error) {
            return <div>Error: {error}</div>;
        } else {
            return (
                <div className="App">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Staff ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student._id}>
                                    <td>{student._id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.staffid}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}

export default Student;