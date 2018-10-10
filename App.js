import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import KeyboardSpacer from "react-native-keyboard-spacer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          _id: 1,
          text: "Test message 1",
          createdAt: new Date(),
          user: {
            _id: 2
          }
        },
        {
          _id: 2,
          text: "Test message 2",
          createdAt: new Date(),
          user: {
            _id: 1
          }
        },
        {
          _id: 3,
          text: "Test message 3",
          createdAt: new Date(),
          user: {
            _id: 2
          }
        },
        {
          _id: 4,
          text: "Test message 4",
          createdAt: new Date(),
          user: {
            _id: 1
          }
        },
        {
          _id: 5,
          text: "Version 6",
          createdAt: new Date(),
          user: {
            _id: 1
          }
        }
      ]
    };
  }
  render () {
    return (
        <View style={styles.container}>
          <GiftedChat
            messages={this.state.messages}
            onSend={() => {}}
            keyboardShouldPersistTaps="never"
            user={{
              _id: 1
            }}
            renderAvatar={null}
          />
          {Platform.OS === "android" && <KeyboardSpacer />}
        </View>
    )
  }
}
