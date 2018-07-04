import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageBackground
} from 'react-native';
const profileImage = require('./images/sam.jpg');
const friendsIcon = require('./images/man-user.png');
const favIcon = require('./images/plain-heart.png');
const msgIcon = require('./images/chat.png');

class Profilepage extends Component {
    state = {
        name: 'Samuel Adeyemo',
        lastName: 'Olu Adeyemo',
        occupation: 'Mobile Developer',
        friends: '1,200',
        favorites: '2,491',
        comments: '4,832',
    };

    render() {
        const {
            name,
            // lastName,
            occupation,
            friends,
            favorites,
            comments,
        } = this.state;

        return (
            <ImageBackground source={profileImage} style={styles.container}>
                <View style={styles.info}>
                    <View style={styles.personal}>
                        <Text style={styles.name}>{name}
                            {/* {lastName} */}
                        </Text>
                        <Text style={styles.occupation}>
                            {occupation.toUpperCase()}
                        </Text>
                    </View>
                    <View style={styles.stats}>
                        {this.renderStat(
                            { icon: friendsIcon, value: friends, selected: true })}
                        {this.renderStat({ icon: favIcon, value: favorites })}
                        {this.renderStat({ icon: msgIcon, value: comments })}
                    </View>
                </View>
            </ImageBackground>);
    }

    renderStat(options) {
        return (
            <View style={styles.stat}>
                <Image
                    source={options.icon}
                    style={[styles.icon, options.selected ?
                        styles.selected : null]}
                />
                <Text style={styles.counter}>{options.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: null,
        width: null,
    },

    info: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
    },

    info: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        top: null,
    },

    personal: {
        padding: 30,
    }, name: {
        color: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 30,
        fontWeight: 'bold',
    },
    occupation: {
        color: '#d6ec1b',
        marginTop: 5,
    },

    selected: {
        tintColor: '#d6ec1b',
    }, icon: {
        tintColor: '#504f9f',
        height: 30,
        width: 30,
    }, counter: {
        color: '#fff',
        fontSize: 15,
        marginTop: 5,
    },

    stats: {
        flexDirection: 'row',
    }, stat: {
        alignItems: 'center',
        backgroundColor: '#7675b7',
        borderColor: '#6e6db1',
        borderLeftWidth: 1,
        flex: 1,
        padding: 10,
    },

});
export default Profilepage;