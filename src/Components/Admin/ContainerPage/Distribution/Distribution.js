import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form"

const Distribution = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
            fetch('http://localhost:4000/distribution', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        
    }

    const [StudentId, setStudentId] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/students')
            .then(response => response.json())
            .then(json => setStudentId(json))
    },[])
    const [Food, setFood] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/foods')
            .then(response => response.json())
            .then(json => setFood(json))
    },[])
    return (
        <div style={{ width: "40rem", alignItems: "center", marginTop: "40px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("Id", { required: true })} placeholder="Id" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <select  aria-label="Default select example" className="w-100 form-select form-select-lg" {...register("Student_Id")} placeholder="Student Id">
                <option value="Student Id">Student Id</option>
                    {StudentId.map((data) => <option value={data.sId}>{data.sId}</option>)}
                </select>
               
                <input type="date" {...register("Date", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}   
                <select  {...register("Shift")}  className="w-100 form-select-lg">
                <option value="Shift">Shifts</option>
                    <option value="Nazrul">Nazrul</option>
                    <option value="Fazlul">Fazlul</option>
                    <option value="Qudrat">Qudrat</option>
                </select>
                <br/>
                <select  {...register("Status")}  className="w-100 form-select-lg">
                <option value="Status">Status</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Pending">Pending</option>
                </select>
                <br/>
               
                <select className="w-100 form-select-lg" {...register("FoodItem_Lists")} placeholder="Student Id">
                <option value="FoodItem Lists"> FoodItem Lists</option>
                    {Food.map((data) => <option value={data.fName}>{data.fName}</option>)}
                </select>
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Distribution;