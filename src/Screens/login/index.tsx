import React, { useState, useRef } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import theme from "./../../utils/colors";
import styles from "./styles";
import { Card, CardItem, Body, Item, Icon, Input, Button } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Text from "./../../components/Text";
import { Dimensions } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Login(props) {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ height: windowHeight + 60 }}>
          <View style={styles._logView}>
            <Image
              source={require("../../../assets/logo.png")}
              style={styles._logo}
            />
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
                  {/* {showMessage && (
                      <View>
                        <Text>Value : {value}</Text>
                        <Text>Formatted Value : {formattedValue}</Text>
                        <Text>Valid : {valid ? "true" : "false"}</Text>
                      </View>
                    )} */}
                  <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    disableArrowIcon={true}
                    placeholder="0000-000-0000"
                    defaultCode="US"
                    containerStyle={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width:"90%"
                    }}
                    textContainerStyle={{ backgroundColor: "transparent"}}
                    layout="first"
                    onChangeText={(text) => {
                      setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                      setFormattedValue(text);
                    }}
                    autoFocus
                  />
                  {/* <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        const checkValid = phoneInput.current?.isValidNumber(
                          value
                        );
                        setShowMessage(true);
                        setValid(checkValid ? checkValid : false);
                      }}
                    >
                      <Text>Check</Text> */}
                  {/* </TouchableOpacity> */}
                </Item>
                <Button
                  style={[styles._continue_btn, theme.bg]}
                  onPress={() => props.navigation.navigate("ConfirmSms")}
                >
                  <Text style={styles._btn_text}>Continue</Text>
                </Button>
              </Card>
            </View>
            <View style={{ flex: 1 }}>
              {/* <ScrollView showsVerticalScrollIndicator={false}> */}
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
              {/* </ScrollView> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
