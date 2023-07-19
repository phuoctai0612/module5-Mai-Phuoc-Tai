import React from "react";


class StudentComponent extends React.Component {
   
    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th> 
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.students.map((student) =>
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
        );
    }
}
export default StudentComponent;