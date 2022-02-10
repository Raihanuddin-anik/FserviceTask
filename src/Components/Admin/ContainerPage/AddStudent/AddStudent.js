import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Notifications, {notify} from 'react-notify-toast';
const AddStudent = () => {
    const [StudentInfo, setStudentInfo] = useState({
        sId: '',
        sName: '',
        roll: '',
        shift: '',
        age: '',
        class: '',
        hall: '',
        status: ''
    })
    let myColor = { background: '#0E1717', text: "#FFFFFF" };
    const showNotification = () => notify.show('Student Info Added!', "custom", 2000,myColor);
    const handeSubmitStudentInfo = () => {
        
        fetch('http://localhost:4000/addStudent', {
            method: 'POST',
            body: JSON.stringify(StudentInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) =>{
             if(json === true){
                showNotification()
             }
            });
          

    }
    const handleSetValue = (e) => {
       
            const sValue = { ...StudentInfo }
            sValue[e.target.name] = e.target.value;
            setStudentInfo(sValue)
       
    }
    return (
        <div style={{width:"40rem",alignItems:"center",marginTop:"40px"}}>
            <Notifications />
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
                <Form.Control name="status" onBlur={handleSetValue}  placeholder="Status" />


                <br />
                <br />

                <Button onClick={() => handeSubmitStudentInfo()} className="btn btn-primary w-100" type="submit" >Submit</Button>

            </from>
          
        </div>
    );
};

export default AddStudent;