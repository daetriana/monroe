import {f} from './config';
import store from '../redux/store'
import { connect } from "react-redux";

export async function logIn(payload) { 
   //f.auth().signInWithEmailAndPassword(payload.username, payload.password) .then(response =>{

    f.auth().signInWithEmailAndPassword(payload.username, payload.password) .then(response =>{
        var user_uid = response.user.uid;
        f.firestore()
        .collection("users")
        .doc(user_uid)
        .get()
        .then(function(user) {
            if (user.exists) {
                alert(' user in in ')
                console.log(user.data())
                store.dispatch({
                    type: "DO_LOGIN_SUCCESS", payload: user.data()
            });
            } else {
                alert("User does not exist. Please try again.");
            }
        }).catch(function(error) {
            const { code, message } = error;
            alert(message);
        });
    }).catch(error => {
        const { code, message } = error;
        alert(message);
    });
}
export async function handlePasswordReset(values) {
    const { email } = values
    try {
        await this.props.f.passwordReset(email)
        console.log('Password reset email sent successfully')
        this.props.navigation.navigate('Login')
    } catch (error) {
        alert(error)
    }
}
 
connect(store => {
    return {
        user: store.login.user,     
    };
})


/* f.firestore()
                .collection('users')
                .doc('MXeauCiEKxq36OKkFOFu')
                .get().then((snap) =>{
                    this.props.dispatch({ type: "DO_LOGIN_SUCCESS", payload: snap.data()});
                }).catch(error => {
                    const { code, message } = error;
                });*/