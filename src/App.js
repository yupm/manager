import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component{
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBCHTXEERfrYx0AI_-0I3aNstfWw2n3IE0",
            authDomain: "manager-60afc.firebaseapp.com",
            databaseURL: "https://manager-60afc.firebaseio.com",
            projectId: "manager-60afc",
            storageBucket: "manager-60afc.appspot.com",
            messagingSenderId: "683024852435"
          };
          firebase.initializeApp(config);   
    }


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
           <Provider store={store}>
                <LoginForm />
            </Provider> 
        );
    }
}

export default App;