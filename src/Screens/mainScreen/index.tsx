import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import theme from "./../../utils/colors";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Header, Right } from "native-base";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import Text from './../../components/Text'

export default function MainScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  let newArr = [
    { img: require("./../../../assets/newone.png") },
    { img: require("./../../../assets/newtwo.png") },
    { img: require("./../../../assets/newthree.png") },
  ];

  let commingSoon = [
    { img: require("./../../../assets/comingone.png") },
    { img: require("./../../../assets/comingtwo.png") },
    { img: require("./../../../assets/comingthree.png") },
  ];

  let moreShows = [
    { img: require("../../../assets/moreone.png") },
    { img: require("../../../assets/moretwo.png") },
    { img: require("../../../assets/morethree.png") },
  ];

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const menu = useRef();

  const hideMenu = () => {
    menu.current.hide();
  };

  const showMenu = () => {
    menu.current.show()
  };

  const ViewProfile =()=>{
    props.navigation.navigate("ProfilePhoto")
    hideMenu()
  }

  const Logout =()=>{
    props.navigation.navigate("Login")
    hideMenu()

  }
  return (
    <View style={styles.container}>
      <Header
        style={{ height: 70, elevation: 0, backgroundColor: "transparent" }}
      >
        <Right>
          <Menu
            ref={menu}
            button={
              <TouchableOpacity
                style={styles._userAvatar}
                onPress={showMenu}
              >
                <Image
                  source={require("./../../../assets/avatar.png")}
                  style={styles._profilePic}
                />
              </TouchableOpacity>
            }
          >
            <MenuItem onPress={()=>ViewProfile()}>View Pofile</MenuItem>

            <MenuItem onPress={()=>Logout()}>Logout</MenuItem>
          </Menu>
        </Right>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles._screenHeading}>What’s on now!</Text>
        <View style={styles._newArrView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newArr.map((val, i) => {
              return (
                <View key={i} style={styles._imageView}>
                  <Image source={val.img} style={styles._image} />
                </View>
              );
            })}
          </ScrollView>
        </View>

        <Text style={styles._screenHeading}>Coming up soon</Text>
        <View style={styles._newArrView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {commingSoon.map((val, i) => {
              return (
                <View key={i} style={styles._imageView}>
                  <Image source={val.img} style={styles._image} />
                  <TouchableOpacity style={styles._circle}>
                    <Feather
                      name="user-plus"
                      size={20}
                      style={[theme.iconColor]}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <Text style={styles._screenHeading}>More shows</Text>
        <View style={styles._newArrView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {moreShows.map((val, i) => {
              return (
                <View key={i} style={styles._imageView}>
                  <Image source={val.img} style={styles._image} />
                  <TouchableOpacity style={styles._circle}>
                    <Feather
                      name="user-plus"
                      size={20}
                      style={[theme.iconColor]}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
      {/* modal */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles._crossCircle}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
              <Image
                source={require("../../../assets/notificationimage.png")}
                style={styles._notificationImage}
              />
              <Text style={styles._screenHeading}>Can we notify you?</Text>
              <Text style={styles._desc}>
                Please allow us to send you notifications..
              </Text>

              <TouchableOpacity style={[styles._confirmBtn, theme.bg]}>
                <Text style={styles._confirmBtn_text}>Allow</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles._confirmBtn, { backgroundColor: "#e4e4e4" }]}
                onPress={()=>setModalVisible(false)}
              >
                <Text style={[styles._confirmBtn_text, { color: "#525252" }]}>
                  Dismiss
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
