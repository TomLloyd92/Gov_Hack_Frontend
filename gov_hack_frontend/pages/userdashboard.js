import Results from '../components/Results'
import React, { Component } from 'react';
import Layout from '../components/Layout';


class UserDashboard extends Component
{
  render()
  {
    return (
      <Layout>
        <h1 className="neonPink">[USER DASHBOARD]
        </h1>
        <div>
        <Results/>
        </div>
      </Layout>
  )}
}

export default UserDashboard;