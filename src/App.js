import React, { Component } from 'react';
import Layout from './Layout';
import Form from './Form';
import { Col, Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addObject } from './Store'
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

const App = ({ lines, onAdd }) =>
  <Layout>
    <Col md={6}>
      <Table responsive>
      <Header columns={['#', 'Name', 'Description']} />
      <Body lines={ lines } />
      </Table>
    </Col>
    <Col md={6}>
      <Form/>
    </Col>
  </Layout>

const mapStateToProps = (state) => {
  return {
    lines: state
  }
}

const AppContainer = connect(
  mapStateToProps
)(App)

export default AppContainer;
