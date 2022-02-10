import React, { useEffect, useState } from 'react';
import './Foods.css'
const Foods = () => {
    const [Food, setFood] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/foods')
            .then(response => response.json())
            .then(json => setFood(json))
    }, [])
    return (
        <div>
            <section style={{ overflowX: "auto" }}>
                <table>
                    <tr className='Table_Reader_Row'>
                        <th className="Table_Header" >Food-Id</th>
                        <th className="Table_Header">Meal Name</th>
                        <th className="Table_Header">Price</th>
                 
                    </tr>
                    {(Food).map(Data =>
                        <tr className='Table_Reader_Row'>
                            <td className="Table_Data" >#{Data.fId}</td>
                            <td className="Table_Data">{Data.fName}</td>
                            <td className="Table_Data">${Data.fPrice}</td>
                            
                        </tr>
                    )}
                </table>
            </section>
        </div>
    );
};

export default Foods;