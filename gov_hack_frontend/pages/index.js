import Nav from '../components/Nav'
import Results from '../components/Results'
import React, { Component } from 'react';
import Layout from '../components/Layout';
import ButtonNeon from '../components/ButtonNeon'

class Home extends Component {
  render() {
    return (
      <Layout>
        <h1 className="neonPink">[HOME]
        </h1>
        <div className="animate-pulse py-6">
        </div>
        <Nav />
        <Results />
      </Layout>
    )
  }
}

export default Home;

