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
  { columns.map((name) => <th key={name}>{name}</th> )}
  </tr>
  </thead>
);

const Body = ({ objects }) =>
  <tbody>
  { objects.map( (object) =>
    <tr key={object.id}>
      <td>{object.id}</td>
      <td>{object.name}</td>
      <td>{object.description}</td>
    </tr>
  )}
  </tbody>

const App = ({ objects, onAdd }) =>
  <Layout>
    <Col md={6}>
      <Table responsive>
      <Header columns={['#', 'Name', 'Description']} />
      <Body objects={ objects } />
      </Table>
    </Col>
    <Col md={6}>
      <Form/>
    </Col>
  </Layout>

const mapStateToProps = (state) => {
  return {
    objects: state.objects
  }
}

const AppContainer = connect(
  mapStateToProps
)(App)

export default AppContainer;
