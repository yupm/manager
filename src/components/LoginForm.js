import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {
    
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(pw){
        this.props.passwordChanged(pw);
    }

    onButtonPress(){

        const { email, pass } = this.props;
        console.log('Button pressed');
        console.log(this.props) 

        this.props.loginUser( { email, pass });
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{ backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if(this.props.loading) {
            return (<Spinner size="large" />);
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
            Login
            </Button>
        );
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
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
};

const mapStateToProps = ( { auth }) => {

    const {email, pass, error, loading } = auth;

    return { email, pass, error, loading };
};

const styles ={
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }

}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser } )(LoginForm);
