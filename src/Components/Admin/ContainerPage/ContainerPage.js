import React, { useState } from 'react';
import { Button, Form, FormSelect } from 'react-bootstrap';


const ContainerPage = () => {

    
    return (
        <div className="mt-5" >
            <div style={{ border: '20px solid #f5f6fa', borderRadius: "10px", borderBottom: "80px solid #f5f6fa", }}>
                 <div style={{ padding: "20px", borderRadius: "10px" }} >
                    <h4 className="pb-3">Volenter Register List</h4>
                    <table>
                        <tr>
                            <th className="pe-3" >Student Id</th>
                            <th className="pe-3">FullName</th>
                            <th className="pe-3">Roll</th>
                            <th className="pe-3">Age</th>
                            <th className="pe-3">Class</th>
                            <th className="pe-3">Hall</th>
                            <th className="pe-3">Status</th>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default ContainerPage;