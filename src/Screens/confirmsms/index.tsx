import React from "react";
import { Image, View, TouchableOpacity,ScrollView,Dimensions } from "react-native";
import theme from "./../../utils/colors";
import styles from "./styles";
import { Item, Input } from "native-base";
import { Header, Left, Button, Icon } from "native-base";
import Text from './../../components/Text'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function ConfirmSms(props) {
  return (
    <View style={styles.container}>
      <Header
        style={{ height: 70, elevation: 0, backgroundColor: "transparent" ,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}
      >
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" style={{ color: "black" }} />
          </Button>
        </Left>
        {/* <View style={{ flex: 1, justifyContent: "center",borderWidth:1 }}> */}
          <Image
            source={require("./../../../assets/logo.png")}
            style={{ height: 60, width: 120,marginRight:40}}
          />
        {/* </View> */}
        <Text></Text>
      </Header>
      <ScrollView>
      <View style={[styles._innerView]}>
        <Image
          source={require("../../../assets/device.png")}
          style={styles._deviceImg}
        />
        <Text style={styles._desc}>
          We just texted you a code to confirm your identity
        </Text>

        <Item regular style={styles._codeInput}>
          <Input placeholder="Enter your code" keyboardType="number-pad" />
        </Item>
      </View>
      <TouchableOpacity
        style={[styles._confirmBtn, theme.bg]}
        onPress={() => props.navigation.navigate("NewAccount")}
      >
        <Text style={styles._confirmBtn_text}>Confirm</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
