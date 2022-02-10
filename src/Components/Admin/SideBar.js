import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({setTogglePage}) => {
    return (
        <div >
            <div className="ms-5 p-4">
            
                <div className="p-2 ">
                    <Link to="/student" style={{ cursor:"pointer"}} >Student</Link>
                </div>
                <div className="p-2 ">
                    <Link to="/addStudent" style={{ cursor:"pointer"}} >Add Student</Link>
                </div>
                <div className="p-2 ">
                    <Link to="/distribution" style={{ cursor:"pointer"}} >Distribution</Link>
                </div>
                <div className="p-2 ">
                    <Link to="/addFood" style={{ cursor:"pointer"}} >addFood</Link>
                </div>
                <div className="p-2 ">
                    <Link to="/food" style={{ cursor:"pointer"}} >Food</Link>
                </div>
                <div className="p-2 ">
                    <b style={{ cursor:"pointer"}} >Distributed To Student</b>
                </div>
            </div>


        </div>
    );
};

export default SideBar;