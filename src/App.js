import React, { Component } from 'react';
import Layout from './Layout';
import Form from './Form';
import { Col, Table } from 'react-bootstrap';
import store from './Store';

import './App.css';

const Header = ({
  columns
}) => (
  <thead>
  <tr>
  { columns.map((name) => <th>{name}</th> )}
  </tr>
  </thead>
);

const Body = ({ lines }) =>
  <tbody>
  { lines.map( (id) =>
    <tr>
      <td>{id}</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  )}
  </tbody>

class App extends Component {
  render() {
    return (
      <Layout>
      <Col md={6}>
      <Table responsive>
      <Header columns={['#', 'Name', 'Description']} />
      <Body lines={ store.getState() } />
      </Table>
      </Col>
        <Col md={6}>
        <Form/>
        </Col>
      </Layout>
    );
  }
}

export default App;
