import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableHighlight,
    Platform, Button
} from "react-native";
export default class TweetDisplay extends Component {
  render() {
    return (
      <View>
        <Text style={styles.tweetText}>{item.tweetContent}</Text>
            <View style={styles.tweetFooter}>
                <View style={styles.footerIcons}>
                    <Button
                        transparent
                        dark
                        onPress={this._tweetDetails.bind(this, item)}
                    >
                        <Icon name="ios-text-outline" />
                        <Text style={styles.badgeCount}>{item.replies}</Text>
                    </Button>
                </View>
                <View style={styles.footerIcons}>
                    <Button transparent dark>
                        <Icon name="ios-repeat" />
                        <Text style={styles.badgeCount}>{item.retweets}</Text>
                    </Button>
                </View>
                <View style={styles.footerIcons}>
                    <Button transparent dark>
                        <Icon name="ios-heart-outline" />
                        <Text style={styles.badgeCount}>{item.likes}</Text>
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
const styles = StyleSheet.create({
  tweetText: {
      marginTop: 10,
      fontSize: 18,
      color: "#555"
  },
  tweetFooter: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 0
  },
  badgeCount: {
      fontSize: 12,
      paddingLeft: 5
  },
  footerIcons: {
      flexDirection: "row",
      alignItems: "center"
  },

});