import React, { useState } from 'react';
import { Button, Form, FormSelect } from 'react-bootstrap';


const ContainerPage = ({ data, TogglePage }) => {

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
    const [FoodInfo, setFoodInfo] = useState({
        fName: '',
        fPrice: '',
        fId: ''
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
        if (TogglePage === 'addStudent') {
            const sValue = { ...StudentInfo }
            sValue[e.target.name] = e.target.value;
            setStudentInfo(sValue)
        }
        else if (TogglePage === 'addFood') {
            const FValue = { ...FoodInfo }
            FValue[e.target.name] = e.target.value;
            setFoodInfo(FValue)
        }
        else {
            console.log(' ')
        }
    }
    return (
        <div className="mt-5" >


            <div style={{ border: '20px solid #f5f6fa', borderRadius: "10px", borderBottom: "80px solid #f5f6fa", }}>
                {TogglePage === 'list' && <div style={{ padding: "20px", borderRadius: "10px" }} >
                    <h4 className="pb-3">Volenter Register List</h4>
                    <table>
                        <tr>
                            <th className="pe-3" >Student Name</th>
                            <th className="pe-3">Email Id</th>
                            <th className="pe-3">Registered Date</th>
                            <th className="pe-3">Volenter List</th>
                            <th className="pe-3">Action</th>

                        </tr>
                    </table>

                </div>
                }

                {TogglePage === 'addFood' &&
                    <from style={{ padding: "20px", borderRadius: "10px" }} >


                        <Form.Control name="fName" onBlur={handleSetValue} className="w-50" placeholder="Food Name" />
                        <br />
                        <Form.Control name="fPrice" onBlur={handleSetValue} className="w-50" placeholder="Food Price" />
                        <br />
                        <Form.Control name="fId" onBlur={handleSetValue} className="w-50" placeholder="Food Id" />
                        <br />


                        <input className="btn btn-primary w-50" type="submit" />


                    </from>}


                {TogglePage === 'addStudent' &&
                    <from style={{ padding: "20px", borderRadius: "10px" }} >


                        <br />

                        <Form.Control name="sId" className="w-50" onBlur={handleSetValue} placeholder="Student Id" />
                        <br />
                        <Form.Control name="sName" className="w-50" onBlur={handleSetValue} placeholder="Student Name" />
                        <br />
                        <Form.Control type="number" name="age" className="w-50" onBlur={handleSetValue} placeholder=" Age" />
                        <br />
                        <Form.Control type="number" name="roll" className="w-50" onBlur={handleSetValue} placeholder=" Roll" />
                        <br />
                        <Form.Control type="number" name="class" className="w-50" onBlur={handleSetValue} placeholder="Class" />
                        <br />
                        <Form.Control name="hall" className="w-50" onBlur={handleSetValue} placeholder="Hall" />
                        <br />
                        <Form.Select name="status" className='w-50' aria-label="Default select example" placeholder="Status" >
                            <option value="Active">Active</option>
                            <option value="InActive">InActive</option>
                        </Form.Select>
                        <br />

                        <Button onClick={() => handeSubmitStudentInfo()} className="btn btn-primary w-50" type="submit" >Submit</Button>

                    </from>}
                {TogglePage === 'distribution' &&
                    <from style={{ padding: "20px", borderRadius: "10px" }} >


                        <br />
                        <Form.Control name="Id" className="w-50" onBlur={handleSetValue} placeholder="Id" />
                        <br />
                        <Form.Control name="sId" className="w-50" onBlur={handleSetValue} placeholder="Student Id" />
                        <br />
                        <Form.Control name="date" type='date' className="w-50" onBlur={handleSetValue} placeholder="Student Name" />
                        <br />
                        <Form.Select name="status" className='w-50' aria-label="Default select example" placeholder="Status" >
                            <option value="Active">Shift1</option>
                            <option value="InActive">Shift2</option>
                            <option value="InActive">Shift3</option>
                        </Form.Select>
                        <br />
                        <Form.Control type="number" name="roll" className="w-50" onBlur={handleSetValue} placeholder=" Roll" />
                        <br />
                        <Form.Select name="status" className='w-50' aria-label="Default select example" placeholder="Status" >
                            <option value="Active">FoodItemList</option>
                            <option value="InActive">InActive</option>
                        </Form.Select>
                        <br />

                        <Button onClick={() => handeSubmitStudentInfo()} className="btn btn-primary w-50" type="submit" >Submit</Button>

                    </from>}

            </div>


        </div>
    );
};

export default ContainerPage;