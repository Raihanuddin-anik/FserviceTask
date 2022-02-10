import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const AddFood = () => {
    const [FoodInfo, setFoodInfo] = useState({
        fName: '',
        fPrice: '',
        fId: ''
    })
    const handleSetValue = (e) => {
            const FValue = { ...FoodInfo }
            FValue[e.target.name] = e.target.value;
            setFoodInfo(FValue)    
    }
    const handleSubmitValue = () =>{
        fetch('http://localhost:4000/addFood', {
            method: 'POST',
            body: JSON.stringify(FoodInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <div style={{width:"40rem",alignItems:"center",marginTop:"40px"}}>
              
                    <from  >
                        <Form.Control name="fName" onBlur={handleSetValue}  placeholder="Food Name" />
                        <br />
                        <br/>
                        <Form.Control name="fPrice" onBlur={handleSetValue}  placeholder="Food Price" />
                        <br />
                        <br/>
                        <Form.Control name="fId" onBlur={handleSetValue}  placeholder="Food Id" />
                        <br />
                        <br/>
                        <input className="btn btn-primary" onClick={()=>handleSubmitValue()} type="submit" />
                    </from>

        </div>
    );
};

export default AddFood;