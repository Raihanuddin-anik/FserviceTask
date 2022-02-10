import React, { useEffect, useState } from 'react';
import './students.css';
import './students.css'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { set, useForm } from "react-hook-form";

const Students = () => {
  const [refresh, setrefresh] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (id, data) => {
        console.log("data", data)
        console.log("id", id)
        fetch(`http://localhost:4000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        })
            .then(res => res.json())
            .then(result => setrefresh(result))
             setShow(false)
    }
    const [show, setShow] = useState('');
    const [students, setStudents] = useState([]);
    const [updateData, setUpdateData] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/students')
            .then(response => response.json())
            .then(json => setStudents(json))
    }, [refresh])


    const hadleGetData = (id) => {

        fetch(`http://localhost:4000/student/${id}`)
            .then(response => response.json())
            .then(json => {
                setUpdateData(json)
                setShow(true)
                reset(json)
            })
        reset()
    }
    const  deleteProduct = (id)=>{
        fetch(`http://localhost:4000/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
           setrefresh('hello')
        })
      
    }
    return (
        <div className='container-fluid'>
            <section style={{ overflowX: "auto" }}>
                <table>
                    <tbody>
                    <tr className='Table_Reader_Row'>
                        <th className="Table_Header" >STUDENT-Id</th>
                        <th className="Table_Header">ROLL</th>
                        <th className="Table_Header">STUDENT-NAME</th>
                        <th className="Table_Header">AGE</th>
                        <th className="Table_Header">CLASS </th>
                        <th className="Table_Header">HALL </th>
                        <th className="Table_Header">STATUS </th>
                        <th className="Table_Header">Edit </th>
                    </tr>
                    {(students).map(Data =>
                        <tr className='Table_Reader_Row'>
                            <td className="Table_Data_Id" >#{Data.sId}</td>
                            <td className="Table_Data">{Data.roll}</td>
                            <td className="Table_Data">{Data.sName}</td>
                            <td className="Table_Data">{Data.age} <br /> </td>
                            <td className="Table_Data">{Data.class}</td>
                            <td className="Table_Data" >{Data.hall}</td>
                            <td className="Table_Data" >{Data.status}</td>
                            <td className="Table_Data Edit_Button" onClick={() => hadleGetData(Data._id)} ><Button >Edit</Button></td>
                            <td className="Table_Data Edit_Button" onClick={() => deleteProduct(Data._id)} ><Button variant="danger" >Delete</Button></td>
                        </tr>
                    )}
                    </tbody>
                </table>

                <Modal
                    show={show}
                    backdrop="static"
                    keyboard={false}
                >
                    <form onSubmit={handleSubmit((Data) => onSubmit(updateData._id, Data))}>

                        <input defaultValue={updateData.sId} {...register("sId")} placeholder="Student Id"/>
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <br />
                        <input defaultValue={updateData.roll} {...register("roll")} placeholder="Student Roll" />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <br />
                        <input defaultValue={updateData.sName} {...register("sName")} placeholder="Student Name"/>
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <br />
                        <input defaultValue={updateData.age} {...register("age")} placeholder=" Age"/>
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <br />
                        <input defaultValue={updateData.age} {...register("hall")} placeholder=" Hall"/>
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br/>
                        <br/>
                        <input defaultValue={updateData.class} {...register("class")} placeholder="Student Class"/>
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <br />
                        <input defaultValue={updateData.status} {...register("status")} placeholder=" Status" />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <br />
                        <input type="submit" />
                    </form>
                    <Button onClick={() => setShow(false)} >Close</Button>
                </Modal>
            </section>
        </div>
    );
};

export default Students;