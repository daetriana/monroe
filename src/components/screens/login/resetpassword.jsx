import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {f, auth} from '../../../../utils/config'
import Icon from 'react-native-vector-icons/Ionicons';
const {width: WIDTH } = Dimensions.get('window');

class ForgotPassword extends Component {
    state = {
        email: ''
    }
    reset = () =>{

        const {email} = this.state;
                    try {
                        f.auth().sendPasswordResetEmail(email)
                        .then((cred)=>{
                            
                        }).catch(error => {
                            alert(error);
                            return;
                        })
                       // this.props.navigation.navigate('Login')
                       // setShowLoading(false);
                    }catch(e) {
                      //  setShowLoading(false);
                        alert(e.message);
                    }
    }
    render() {
        return (
            <View style={styles.container}>   
            <Ionicons name="md-unlock" size={100}  />  
                    <TextInput
                        style={styles.subContainer}
                        placeholder='Your Email'
                        leftIcon={
                            <Icon
                            name='mail'
                            size={24}
                            />
                        }
                        value={this.state.email}
                        onChangeText={(email =>{
                            this.setState({email})
                        })}
                    />

                    <TouchableOpacity
                    style={styles.textInput} 
                    onPress={() => this.reset()} 
                    >
                        <Text>Reset</Text> 
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.textInput}
                    onPress={() => {
                        this.props.navigation.navigate('Login');
                    }} 
                    >
                        <Text>Back to Login</Text>
                    </TouchableOpacity>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        height: 400,
        padding: 20
    },
    subContainer: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "grey",
        color: 'white',
        width: WIDTH -55,
        backgroundColor: '#A5D38D', 
        justifyContent:'center',
        alignItems: 'center',  
        fontWeight: 'bold',
        height: 50,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#D096CB',
        width : WIDTH -55,
        padding: 5
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        color: 'white',
        width: WIDTH -55,
        backgroundColor: '#A5D38D', 
        justifyContent:'center',
        alignItems: 'center',  
        fontWeight: 'bold',
        height: 50,
        marginTop: 20,
        borderRadius: 10
    },

})
export default ForgotPassword