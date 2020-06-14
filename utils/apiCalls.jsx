import {f} from './config';
//import store from '../redux/store'
import { connect } from "react-redux"


export function logIn(payload) { 
    f.auth().signInWithEmailAndPassword(payload.username, payload.password) .then(response =>{
        var user_uid = response.user.uid;
        var userInfo = {};
        f.firestore()
        .collection("users")
        .doc(user_uid)
        .get()
        .then(function(user) {
            if (user.exists) {
                userInfo = user.data();
            } 
        }).catch(function(error) {
            const { code, message } = error;
            alert(message);
        });
    }).catch(error => {
        const { code, message } = error;
        alert(message);
    });
    return userInfo
}
export async function handlePasswordReset(values) {
    const { email } = values
    try {
        await this.props.f.passwordReset(email)
        alert('Password reset email sent successfully')
        this.props.navigation.navigate('Login')
    } catch (error) {
        alert(error)
    }
}
export function getTweets(){
    var tweets = [];
    return  f.firestore().collection("tweets").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            tweets.push(doc.data())
        });
        return tweets;
    }).catch(err =>{
        alert(err)
    }); 
}
export function logOut(){
    f.auth().signOut();
}


