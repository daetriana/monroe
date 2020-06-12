import React, { Component } from 'react'

export default class Login2 extends Component {
  render() {
    return (
        <View style = {styles.container}>

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
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center', 
    },
    ActivityIndicator:{
        position: 'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'black',
        opacity:0.5,
        justifyContent:'center'
    },

    bottom: {
        marginBottom: 36,
        position: 'absolute',
        bottom: 100,
        alignItems:'center',
        justifyContent: 'center', 
    },
    or: { 
        color: "black",
    },
    loginText: {
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
    placeholder: {
        color: "red"
    },
    InputContainer: {
        marginTop: 30,
        borderColor: "grey",
        backgroundColor: '#F7F8F8',
        width : WIDTH -55,
        borderRadius: 10
    },
    body: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        color: "#696969",
        width: WIDTH -55,
    },
    button : {
        width: 356,
        height: 50,
        backgroundColor: '#A5D38D',
        borderRadius: 10,
        justifyContent:'center',
        alignItems: 'center',
        margin : 5,
        marginTop: 5,
        fontWeight: 'bold'
    },
    email : {
        width: 356,
        height: 57,
        backgroundColor: '#A5D38D',
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center',
        margin : 5,
        marginTop: 5,
        fontWeight: 'bold'
    },
    actions : {
        color: 'white'
    }, 
    text :{
        color: 'white',
        textAlign:'center',
        fontSize: 25,
    },
    textBox:{
        borderRadius: 45,
        backgroundColor:'pink',
        width: WIDTH - 50,
        height: 45,
        marginBottom: 10,
        opacity: .6,
        color:'black',
        paddingLeft: 10

    },
    forgotPw : {   
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-end'
    }
});