import React, { useEffect, useState } from 'react';
import ContainerPage from './ContainerPage';
import SideBar from './SideBar';


const Admin = () => {

    const [volenters, setVolenters] = useState([]);
    const [TogglePage, setTogglePage] = useState('list')
    console.log(TogglePage)
    useEffect(() => {
        fetch("https://ancient-sands-98079.herokuapp.com/allVolenters")
            .then(res => res.json())
            .then(data => {
                setVolenters(data)
            })
    }, [volenters._id])

    return (
       
            <div className="row">

                <div className="col-md-3">
                    <SideBar TogglePage={TogglePage} setTogglePage={setTogglePage}/>
                </div>
                <div className="col-md-9">
                    <ContainerPage TogglePage={TogglePage} setTogglePage={setTogglePage} data={volenters}/>
                </div>
            </div>
      
    );
};

export default Admin;