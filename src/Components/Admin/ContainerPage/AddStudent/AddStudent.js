import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddStudent = () => {
    const [StudentInfo, setStudentInfo] = useState({
        sId: '',
        sName: '',
        roll: '',
        shift: '',
        age: '',
        class: '',
        hall: '',
        status: {}
    })
    const handeSubmitStudentInfo = () => {
        console.log(StudentInfo)
        fetch('http://localhost:4000/addStudent', {
            method: 'POST',
            body: JSON.stringify(StudentInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    const handleSetValue = (e) => {
       
            const sValue = { ...StudentInfo }
            sValue[e.target.name] = e.target.value;
            setStudentInfo(sValue)
       
    }
    return (
        <div style={{width:"40rem",alignItems:"center",marginTop:"40px"}}>
            <from  >

                <Form.Control name="sId" className="w-100" onBlur={handleSetValue} placeholder="Student Id" />
                <br />
                <br />
                <Form.Control name="sName"  onBlur={handleSetValue} placeholder="Student Name" />
                <br />
                <br />
                <Form.Control type="number" name="age"  onBlur={handleSetValue} placeholder=" Age" />
                <br />
                <br />
                <Form.Control type="number" name="roll"  onBlur={handleSetValue} placeholder=" Roll" />
                <br />
                <br />
                <Form.Control type="number" name="class" onBlur={handleSetValue} placeholder="Class" />
                <br />
                <br />
                <Form.Control name="hall" onBlur={handleSetValue} placeholder="Hall" />
                <br />
                <br />
                <Form.Control name="status"  aria-label="Default select example" placeholder="Status" />


                <br />
                <br />

                <Button onClick={() => handeSubmitStudentInfo()} className="btn btn-primary w-100" type="submit" >Submit</Button>

            </from>
        </div>
    );
};

export default AddStudent;