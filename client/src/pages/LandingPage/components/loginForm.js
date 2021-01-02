import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Col, Card, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      [event.target.name]: value
    });
  }

  login = (event) => {
    event.preventDefault();
  }
  
  render() {

    return (
      <Card>
            <Card.Body>
                <p>Log in and begin finding laundry service near you!</p>
                {console.log(this.props)}
                <Form>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} 
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        </Form.Group>

                      <Button 
                      variant="primary" 
                      type="submit"
                      onClick={this.login}>
                      <Link to='/home'>
                        Log in
                       </Link>
                      </Button>
                    
                    
                </Form>
                
                <a onClick={this.props.renderSignUp}>Don't have an account? Click here to sign up.</a>

            </Card.Body>
            
        </Card>
        
    );
  }
}

export default LoginForm;