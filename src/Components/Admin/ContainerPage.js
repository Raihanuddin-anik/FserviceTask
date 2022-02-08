import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


const ContainerPage = ({ data, TogglePage }) => {

    const [StudentInfo, setStudentInfo] = useState({
        sId: '',
        sName: '',
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
    console.log(StudentInfo)
    const handleSetValue = (e) => {
        if (TogglePage === 'addStudent') {
            const sValue = { ...StudentInfo }
            sValue[e.target.name] = e.target.value;
            setStudentInfo(sValue)
        }
        else if (TogglePage === 'addFood'){
            const FValue = {...FoodInfo}
            FValue[e.target.name] = e.target.value;
            setFoodInfo(FValue)
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


                        <Form.Control name="fName" className="w-50" placeholder="Food Name" />
                        <br />
                        <Form.Control name="fPrice" className="w-50" placeholder="Food Price" />
                        <br />
                        <Form.Control name="fId" className="w-50" placeholder="Food Id" />
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
                        <Form.Control name="age" className="w-50" onBlur={handleSetValue} placeholder=" Age" />
                        <br />
                        <Form.Control name="class" className="w-50" onBlur={handleSetValue} placeholder="Class" />
                        <br />
                        <Form.Control name="hall" className="w-50" onBlur={handleSetValue} placeholder="Hall" />
                        <br />
                        <Form.Control name="status" className="w-50" onBlur={handleSetValue} placeholder="Status" />

                        <input className="btn btn-primary w-50" type="submit" />


                    </from>}


            </div>


        </div>
    );
};

export default ContainerPage;