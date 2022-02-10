import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Notifications, {notify} from 'react-notify-toast';

const MainPage = () => {

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
            .then(result =>{
                 setrefresh(result)
                 notify.show('Toasty!');
                })
        setShow(false)
    }
    const [show, setShow] = useState(false);
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
    return (
        <div>
            <div style={{ border: '20px solid #f5f6fa', borderRadius: "10px", borderBottom: "80px solid #f5f6fa", }}>
                <div style={{ padding: "20px", borderRadius: "10px" }} >
                <section style={{ overflowX: "auto" }}>
                <Notifications />
                
                    <table>
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
                                <td className="Table_Data" >Active</td>
                                <td className="Table_Data "  ><input type="checkbox" id="topping" name="topping"  /></td>
                            </tr>
                        )}
                    </table>
                </section>
            </div>
        </div>
        </div>
        
    );
};

export default MainPage;