
import React, { Component } from 'react';
import Layout from '../components/Layout';
import DashBoardCards from '../components/DashBoardCards'

class UserDashboard extends Component
{
  render()
  {
    return (
      <Layout>
        <h1 className="neonPink">[USER DASHBOARD]
        </h1>
        <DashBoardCards/>
      </Layout>
  )}
}

export default UserDashboard;