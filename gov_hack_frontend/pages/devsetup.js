import React, { Component } from 'react';
import GovNav from '../components/GovNav';
import Layout from '../components/Layout';
import TimelockForm from '../components/TimelockForm';

class DevSetup extends Component {
  render() {
    return (
      <Layout>
        <h1 className="neonPink">[Dev Setup]
        </h1>
        <GovNav/>
        <TimelockForm/>
      </Layout>
    )
  }
}

export default DevSetup;