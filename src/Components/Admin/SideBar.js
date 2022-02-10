import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({setTogglePage}) => {
    return (
        <div >
            <div className="ms-5 p-4">
            
                <div className="p-2 ">
                    <Link to="/student" style={{ cursor:"pointer"}} >Students</Link>
                </div>
                <div className="p-2 ">
                    <Link to="/addStudent" style={{ cursor:"pointer"}} >Add Student</Link>
                </div>
                
                <div className="p-2 ">
                    <Link to="/addFood" style={{ cursor:"pointer"}} >addFood</Link>
                </div>
                <div className="p-2 ">
                    <Link to="/food" style={{ cursor:"pointer"}} >Foods</Link>
                </div>

                <div className="p-2 ">
                    <Link to="/distribution" style={{ cursor:"pointer"}} >Distribution</Link>
                </div>
                <div className="p-2 ">
                    <Link to="delivered" style={{ cursor:"pointer"}} >Distributed Student Lists</Link>
                </div>
            </div>


        </div>
    );
};

export default SideBar;