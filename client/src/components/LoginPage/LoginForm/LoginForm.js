import React, {Component} from 'react';
import { Button, Icon, Form, Row, Input, Col } from 'react-materialize';

class LoginForm extends Component {
    render () {
        return (
            <div className="registerForm">
                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} label="Username" validate><Icon>account_box</Icon></Input>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} m={12}>
                        <Input s={12} type='Password' label='Password'><Icon>account_box</Icon></Input>
                    </Col>
                </Row>
                <Button waves='light'>Submit<Icon left>cloud</Icon></Button>
            </div>
        );
    }
}

export default LoginForm;
