import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useFormik} from "formik";

const Login = ({login}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            login(values)
        },
    });

    return (
        <div className='app__login'>
            <Form  onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text"
                                  name="email"
                                  onChange={formik.handleChange}
                                  value={formik.values.email}
                                  placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  name="password"
                                  onChange={formik.handleChange}
                                  value={formik.values.password}
                                  placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;