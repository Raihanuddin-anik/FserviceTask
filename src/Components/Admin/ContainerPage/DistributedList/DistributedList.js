import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const DistributedList = () => {
    const [Food, setFood] = useState([])
    console.log(Food)
    useEffect(() => {
        fetch('http://localhost:4000/delivered')
            .then(response => response.json())
            .then(json => setFood(json))
    }, [])
    const  deleteProduct = (id)=>{
        fetch(`http://localhost:4000/deleteServed/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
           console.log(result)
        })
      window.location.reload()
    }
    return (
        <div>
            <section style={{ overflowX: "auto" }}>
                <table>
                    <tr className='Table_Reader_Row'>
                        <th className="Table_Header" >Food-Id</th>
                        <th className="Table_Header">Student Id</th>
                        <th className="Table_Header">Date</th>
                        <th className="Table_Header">Shift</th>
                        <th className="Table_Header">Status</th>
                        <th className="Table_Header">Meal Name</th>
                    </tr>
                    {(Food).map(Data =>
                        <tr className='Table_Reader_Row'>
                            <td className="Table_Data" >#{Data.Id}</td>
                            <td className="Table_Data">{Data.Student_Id}</td>
                            <td className="Table_Data">${Data.Date}</td>
                            <td className="Table_Data">${Data.Shift}</td>
                            <td className="Table_Data">${Data.Status}</td>
                            <td className="Table_Data">${Data.FoodItem_Lists}</td>
                            <td className="Table_Data"><Button variant='danger' onClick={()=>deleteProduct(Data._id)}>Delete</Button></td>
                        </tr>
                    )}
                </table>
            </section>
        </div>
    );
};

export default DistributedList;