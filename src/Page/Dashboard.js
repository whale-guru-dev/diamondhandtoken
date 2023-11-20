import React from 'react'; 
import Navbar from '../Components/Dashboard/Navbar/Navbar';
import Vault from '../Components/Dashboard/Vault/Vault';
import Copyright from '../Components/Staking/Copyright/Copyright';

const Dashboard = () => {
    return (
        <div className='dashboard-wrapper'>
           <Navbar/>
           <Vault/>
           <Copyright/>
        </div>
    );
};

export default Dashboard;