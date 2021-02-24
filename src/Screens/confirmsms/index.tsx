import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import theme from "./../../utils/colors";
import styles from "./styles";
import { Item, Input } from "native-base";
import { Header, Left, Button, Icon } from "native-base";
import Text from './../../components/Text'

export default function ConfirmSms(props) {
  return (
    <View style={styles.container}>
      <Header
        style={{ height: 70, elevation: 0, backgroundColor: "transparent" }}
      >
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" style={{ color: "black" }} />
          </Button>
        </Left>
        <View style={{ flex: 1, justifyContent: "center", paddingLeft: 30 }}>
          <Image
            source={require("./../../../assets/logo.png")}
            style={{ height: 60, width: 120 }}
          />
        </View>
      </Header>
      <View style={styles._innerView}>
        <Image
          source={require("../../../assets/device.png")}
          style={styles._deviceImg}
        />
        <Text style={styles._desc}>
          We just texted you a code to confirm your identity
        </Text>

        <Item regular style={styles._codeInput}>
          <Input placeholder="Enter your code" />
        </Item>
      </View>
      <TouchableOpacity
        style={[styles._confirmBtn, theme.bg]}
        onPress={() => props.navigation.navigate("NewAccount")}
      >
        <Text style={styles._confirmBtn_text}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}
