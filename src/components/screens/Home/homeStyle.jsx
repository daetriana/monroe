
import { StyleSheet } from 'react-native';
import {Dimensions
} from "react-native";
const {width: WIDTH } = Dimensions.get('window');
export default StyleSheet.create({
    topMargin: {
        marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        backgroundColor: "white",
        zIndex: -1
    },
    content: {
        padding: 10,
        backgroundColor: "white"
    },
    heading: {
        fontSize: 32,
        fontWeight: "400",
        marginBottom: 30
    },
    tweet: {
        paddingTop: 20,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "column"
    },
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
    modalFooter: {
        backgroundColor: "white",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        height: 54,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 5
    },
    modal: {
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        zIndex: 4,
        elevation: 4,
        height: Dimensions.get("window").height - Expo.Constants.statusBarHeight,
        marginTop: Expo.Constants.statusBarHeight / 2
    }
});