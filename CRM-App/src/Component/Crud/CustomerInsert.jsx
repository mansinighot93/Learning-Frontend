import React, { useContext, useState } from 'react';
import { CustomerContext } from '../Context/CustomerContext';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';

const CustomerInsert = () => {
  const { addCustomer } = useContext(CustomerContext);
  const [customer, setCustomer] = useState({ firstName: '', lastName: '', email: '', contactnumber: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer({ ...customer, id: Date.now() });
    navigate('/');
  };

  return (
    <Card style={{ width: '30rem', margin: '20px auto' }}>
      <Card.Body>
        <Card.Title>Insert New Customer</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={customer.firstName} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={customer.lastName} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={customer.email} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control 
              type="text" 
              name="contactnumber" 
              placeholder="Contact Number" 
              value={customer.contactnumber} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Insert
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CustomerInsert;
