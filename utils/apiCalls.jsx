import {f} from './config';
import store from '../redux/store'
import { connect } from "react-redux";

export async function logIn(payload) { 
    f.auth().signInWithEmailAndPassword(payload.username, payload.password) .then(response =>{
        var user_uid = response.user.uid;
        f.firestore()
        .collection("users")
        .doc(user_uid)
        .get()
        .then(function(user) {
            if (user.exists) {
                alert(' user in in ')
                store.dispatch({
                    type: "DO_LOGIN_SUCCESS", payload: user.data()
            });
            } else {
                alert("NO NO DIVESTED BLACK WOMEN ALLOWED");
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
        alert('Password reset email sent successfully')
        this.props.navigation.navigate('Login')
    } catch (error) {
        alert(error)
    }
}
export async function fetchTweetss(){
    var tweets = [];
    f.firestore().collection("tweets").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            tweets.push(doc.data())
        });
        store.dispatch({
        type: "FETCH_TWEETS_FULFILLED", payload: tweets
    })
    }).catch(err =>{
        alert(err)
    }); 
    
    console.log(store.getState())
}
export function logOut(){
    f.auth().signOut();
}

connect(store => {
    return {
        user: store.login.user,
        tweets: store.tweets.tweets,   
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