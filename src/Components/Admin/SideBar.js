import React from 'react';

const SideBar = ({setTogglePage}) => {
    return (
        <div >
            <div className="ms-5 p-4">
                <div className="p-2">
                 
                    <small onClick={()=>setTogglePage('list')} style={{ color: "blueviolet",cursor:"pointer" }}>Volenter Register List</small>
                </div>
                <div className="p-2 ">
                    <b style={{ cursor:"pointer"}} onClick={()=>setTogglePage('addFood')}>Add Food</b>
                </div>
                <div className="p-2 ">
                    <b style={{ cursor:"pointer"}} onClick={()=>setTogglePage('addStudent')}>Add Student</b>
                </div>
            </div>


        </div>
    );
};

export default SideBar;