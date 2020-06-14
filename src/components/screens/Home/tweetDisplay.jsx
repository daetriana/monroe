    import React, { Component } from 'react'
    import {
        View,
        Text,
        TouchableHighlight,
        Button
    } from "react-native";
    import {Thumbnail} from 'native-base'
    import styles from './homeStyle'
    export default class TweetDisplay extends Component {
        constructor(props) {
            super(props);
            this.state= {
                loading: true,
            }
            
        }
    render() {
        return (
            <View style={styles.tweet}>
            <TouchableHighlight
            onPress={this._profileClick.bind(this, this.props.item.user)}
            underlayColor="white"
            activeOpacity={0.75}
            >
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Thumbnail source={{ uri: this.props.item.user.avatar }} />
                <View
                style={{
                    flexDirection: "column",
                    justifyContent: "flex-start"
                }}
                >
                <Text
                    style={{
                    paddingLeft: 15,
                    fontWeight: "bold",
                    fontSize: 20
                    }}
                >
                    {this.props.item.user.name}
                </Text>

                <Text
                    style={{
                    paddingLeft: 15,
                    color: "#aaa",
                    fontSize: 16
                    }}
                >
                    {"@" + this.props.item.user.username}
                </Text>
                </View>
            </View>
            </TouchableHighlight>
            <Text style={styles.tweetText}>{this.props.item.tweetContent}</Text>
            <View style={styles.tweetFooter}>
            <View style={styles.footerIcons}>
                <Button
                transparent
                dark
                onPress={this._tweetDetails.bind(this, this.props.item)}
                >
                <Icon name="ios-text-outline" />
                <Text style={styles.badgeCount}>{this.props.item.replies}</Text>
                </Button>
            </View>
            <View style={styles.footerIcons}>
                <Button transparent dark>
                <Icon name="ios-repeat" />
                <Text style={styles.badgeCount}>{this.props.item.retweets}</Text>
                </Button>
            </View>
            <View style={styles.footerIcons}>
                <Button transparent dark>
                <Icon name="ios-heart-outline" />
                <Text style={styles.badgeCount}>{this.props.item.likes}</Text>
                </Button>
            </View>
            <View style={styles.footerIcons}>
                <Button transparent dark>
                <Icon name="ios-mail-outline" />
                </Button>
            </View>
            </View>
        </View>
        )
    }
    }