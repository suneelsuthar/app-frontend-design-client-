import React from "react";
import { Image, View, TouchableOpacity, ScrollView } from "react-native";
import theme from "./../../utils/colors";
import styles from "./styles";
import { Card, CardItem, Body, Item, Icon, Input, Button } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Text from './../../components/Text'
export default function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles._logView}>
        <Image source={require("../../../assets/logo.png")} style={styles._logo} />
      </View>
      <View style={[styles._bodyView, theme.bg]}>
        <View style={{ flex: 1 }}>
          <Card style={styles._card}>
            <CardItem>
              <Body>
                <Text style={styles._login_desc}>
                  For the fast and easy login, we'll need your digits, Don't
                  worry about remembering your password for latter
                </Text>
              </Body>
            </CardItem>
            <Item style={[styles._inputFiled, theme.borderColor]}>
              <Icon active name="call" style={theme.iconColor} />
              <Input
                placeholder="+1 0000-000-0000"
                keyboardType="number-pad"
                style={styles._input}
              />
            </Item>
            <Button style={[styles._continue_btn, theme.bg]} onPress={()=>props.navigation.navigate("ConfirmSms")}>
              <Text style={styles._btn_text}>Continue</Text>
            </Button>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles._footer_text}>Or sign in with</Text>

            <View style={styles._fotter_row}>
              <TouchableOpacity style={styles._fb_btn}>
                <EvilIcons name="sc-facebook" size={50} color="white" />
              </TouchableOpacity>

              <TouchableOpacity style={styles._apple_btn}>
                <FontAwesome name="apple" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles._footerBox}>
              <Text style={styles._box_text}>
                By clicking send, you accept our terms of service and privacy
                policy.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
