import Nav from '../components/Nav'
import Results from '../components/Results'
import React, { Component } from 'react';
import Layout from '../components/Layout';

class Home extends Component {
  render() {
    return (
      <Layout>
        <h1 className="neonPink">[HOME]
        </h1>
        <Nav />
        <Results />
      </Layout>
    )
  }
}

export default Home;

