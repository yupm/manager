import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';


class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(pw){
        this.props.passwordChanged(pw);
    }

    render () {
        return (
            <Card>
                <CardSection>
                    <Input
                        label = "Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.pass}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        pass: state.auth.password   //!!! using pass instead of password
    };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged } )(LoginForm);
