import React, { Component } from 'react'
import {
    Container, Text, Header, Left, Body,
    Right,
    Icon,
    Title,
    StyleProvider,
    Content,
    Grid,
    Col,
    Row,
    Input,
    Item,
    Form,
    Label,
    Footer,
    FooterTab,
    Spinner, View
} from "native-base";
import { connect } from "react-redux";
import {
    StyleSheet,
    AppState
} from 'react-native';
@connect(store => {
    return {
        tweets: store.tweets.tweets,
        fetchingTweets: store.tweets.fetchingTweets,
        fetchedTweets: store.tweets.fetchedTweets,
        errorTweets: store.tweets.error,
        user: store.login.user,
        tweetPosted: store.tweets.tweetPosted,
        newTweetModalOpen: store.tweets.newTweetModalOpen
    };
})
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTweetContent: ""
        };
}
    postTweet() {
        this.props.dispatch({ type: "POST_TWEET", payload: {
                user: this.props.user,
                tweetContent: this.state.newTweetContent
            }
        });
    }
    componentDidMount() {
        this.props.dispatch({ type: "FETCH_TWEETS" });
    }
    render() {
        return(
            <View style = {styles.container}>
                <Text> HomeScreen</Text>
            </View>
    )}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});