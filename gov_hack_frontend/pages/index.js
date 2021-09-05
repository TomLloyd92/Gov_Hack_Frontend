import React, { Component } from 'react';
import Layout from '../components/Layout';

class Home extends Component {
  render() {
    return (
      <Layout>
        <h1 className="neonPink">[HOME]
        </h1>



        {/* <main class="w-1/2  grid place-content-center min-h-full content-center	align-content: center"> */}
          <main className="px-40 py-6 mb-10 text-center ">
          <p >
          Hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Tempore ipsum magnam deleniti maxime accusamus eveniet praesentium voluptatibus id molestias? 
          Nostrum quo nisi quam. Quas facilis repellat voluptatum autem maiores deserunt!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Maxime sapiente voluptatibus vero eius, labore dolor cumque.
          Necessitatibus libero, cumque excepturi facere commodi aspernatur ut neque ratione placeat error magni obcaecati!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Aperiam exercitationem fuga illo. Fuga deserunt corporis rerum suscipit aliquid! Consectetur modi, magni quas neque unde repudiandae accusamus quisquam eligendi vitae alias.
          </p>
        </main>
      </Layout>
    )
  }
}

export default Home;

