import React, { Component } from "react";
import * as Expo from "expo";
import Modal from "react-native-modalbox";
//import {TweetDisplay }from './tweetDisplay'
import {
StyleSheet,
View,
Text,
FlatList,
TouchableHighlight,
Platform,
Dimensions
} from "react-native";
import {
Container,
Header,
Body,
Content,
Left,
Title,
Thumbnail,
Col,
Row,
Grid,
Icon,
Spinner,
Fab,
Button,
Footer,
Input,
Right
} from "native-base";
import { List, ListItem } from "react-native-elements";

import { connect } from "react-redux";
//import styles from './homeStyle'



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

    openModal() {
    this.props.dispatch({ type: "NEW_TWEET_MODAL_OPEN" });
    }

    closeModal() {
    this.props.dispatch({ type: "NEW_TWEET_MODAL_CLOSE" });
    }

    postTweet() {
    this.props.dispatch({
        type: "POST_TWEET",
        payload: {
        user: this.props.user,
        tweetContent: this.state.newTweetContent
        }
    });
    }

    componentDidMount() {
    this.props.dispatch({ type: "FETCH_TWEETS" });
    }

    _keyExtractor = (item, index) => item.id;

    _profileClick(user) {
    this.props.navigation.navigate("Profile", user);
    }

    _tweetDetails(tweet) {
    this.props.navigation.navigate("TweetDetails", tweet);
    }

    render() {
    return (

<View></View>

    );
    }
}
