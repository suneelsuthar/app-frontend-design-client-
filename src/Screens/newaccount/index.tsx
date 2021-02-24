import React from "react";
import {View, TouchableOpacity,Image,ScrollView } from "react-native";
import theme from "./../../utils/colors";
import styles from "./styles";
import { Item, Input } from "native-base";
import { Header, Left, Button, Icon } from "native-base";
import Text from './../../components/Text'

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
      <View style={styles._innerView}>
        <Text style={styles._desc}>
          We haven’t seen you before. Create a new account.
        </Text>

        <Item regular style={styles._codeInput}>
          <Input placeholder="First name" />
        </Item>

        <Item regular style={styles._codeInput}>
          <Input placeholder="Last name" />
        </Item>

        <Item regular style={styles._codeInput}>
          <Input placeholder="Email address" keyboardType="email-address" />
        </Item>
      </View>
      <TouchableOpacity style={[styles._confirmBtn, theme.bg]} onPress={()=>props.navigation.navigate("ProfilePhoto")}>
        <Text style={styles._confirmBtn_text}>Go</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
