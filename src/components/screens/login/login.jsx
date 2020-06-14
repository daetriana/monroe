import React, { Component } from 'react'
import * as Expo from "expo";
import { StyleSheet, Dimensions, TextInput, TouchableOpacity, Button, ActivityIndicator, ImageBackground } from "react-native";
import image from '../../../../assets/splash.png'
import {f} from '../../../../utils/config';
import styles from './loginStyles' 
import {
    Text,
    Spinner, View
} from "native-base";
import { setUsername } from '../../../../redux/actions/loginActions';
import { connect } from "react-redux";
//import Speedometer from './Speedometer'
@connect(store => {
    return {
        username: store.login.username,
        password: store.login.password,
        loginStatus: store.login.loginStatus
    };
})
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state= {
            loading: true,
        }
        
    }
    componentDidMount(){
        var user = f.auth().currentUser;
        if(!user){
            this.setState({loading:true})
        }else{
            this.props.navigation.navigate('Home')
        }
        this.setState({loading:false})
    }
    login = () => {
        this.props.dispatch({
            type: "DO_LOGIN",
            payload: {
                username: this.props.username, 
                password: this.props.password 
            }
        });
    }
    goToForgotPassword = () => {
        this.props.navigation.navigate('FP')
    }
    renderLoading() {
        return (
            <View style = {styles.container} >       
                <ImageBackground source = {image} style={styles.image}>
                    <Text style = {styles.text}> The Divested Space</Text>
                </ImageBackground>
            </View>
        );
    }
    renderLogIn() {
        return(
            <View>
                { this.props.loginStatus === "success" ?(
                    this.props.navigation.navigate('Home')
                ):(
                    <View style = {styles.container}>
                        <Text style = {styles.text}> The Divested Space</Text>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Username"
                        onChangeText={username =>
                            this.props.dispatch({
                                type: "SET_USERNAME",
                                payload: username
                            })}
                        
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={password =>
                            this.props.dispatch({
                                type: "SET_PASSWORD",
                                payload: password
                            })}
                        
                        underlineColorAndroid="transparent"
                    />
                </View> 
            
                <View style= {{  alignSelf:'flex-end'}}>
                {this.props.loginStatus === "ongoing" ? <Spinner /> : null}
                {this.props.loginStatus === "failed" ? (
                    <Text style={{ color: "#f92a3f" }}>Login Failed</Text>
                    ) : null
                }
                    <Button
                        title='Forgot Password?'
                        onPress={this.goToForgotPassword}
                        titleStyle={{
                            color: '#039BE5'
                        }}
                        type='clear'
                        
                    /> 
                </View>
            
                <TouchableOpacity
                    style={styles.loginText}
                    onPress={() => this.login()} >
                    <Text> Log In</Text>
                </TouchableOpacity>    
            </View> 
                )}
            </View>
        );  
    }
    
    render() {
        return(
            <View style = {styles.container}>
                {this.state.loading ? this.renderLoading():(
                    this.renderLogIn()
                )}
            </View> 
        );
    }
}
