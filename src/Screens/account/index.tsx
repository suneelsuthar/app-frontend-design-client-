import React from "react";
import { Image, View, TouchableOpacity, ScrollView } from "react-native";
import theme from "./../../utils/colors";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ListItem, Left, Body, Right, Button, Header, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Text from "./../../components/Text";

export default function Account(props) {
  return (
    <View style={styles.container}>
      <Header
        style={{
          height: 70,
          elevation: 0,
          backgroundColor: "transparent",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" style={{ color: "black" }} />
          </Button>
        </Left>
        {/* <View style={{ flex: 1, justifyContent: "center",borderWidth:1 }}> */}
        <Image
          source={require("./../../../assets/logo.png")}
          style={{ height: 60, width: 120, marginRight: 20 }}
        />
        {/* </View> */}

        <TouchableOpacity
          style={styles._userAvatar}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Image
            source={require("./../../../assets/exist.jpg")}
            style={styles._profilePic}
          />
        </TouchableOpacity>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._circle}>
          <Image
            source={require("./../../../assets/avatar.png")}
            style={styles._avatarImg}
          />

          <TouchableOpacity style={[styles._editView, theme.bg]}>
            <MaterialIcons name="mode-edit" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <ListItem icon style={styles._list}>
          <Left>
            <Image
              source={require("./../../../assets/ordersicon.png")}
              style={styles._list_icon}
            />
          </Left>
          <Body style={{ borderBottomWidth: 0 }}>
            <Text style={styles._pages}>Orders</Text>
          </Body>
          <Right>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
          </Right>
        </ListItem>

        <ListItem icon style={styles._list}>
          <Left>
            <AntDesign
              name="staro"
              size={20}
              color="grey"
              style={{ marginLeft: 10 }}
            />
          </Left>
          <Body style={{ borderBottomWidth: 0 }}>
            <Text style={styles._pages}>Reviews</Text>
          </Body>
          <Right>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
          </Right>
        </ListItem>

        <ListItem icon style={styles._list}>
          <Left>
            <MaterialIcons
              name="payment"
              size={20}
              color="grey"
              style={{ marginLeft: 10 }}
            />
          </Left>
          <Body style={{ borderBottomWidth: 0 }}>
            <Text style={styles._pages}>Payment Methods</Text>
          </Body>
          <Right>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
          </Right>
        </ListItem>

        <ListItem icon style={styles._list}>
          <Left>
            <Entypo
              name="location"
              size={20}
              color="grey"
              style={{ marginLeft: 10 }}
            />
          </Left>
          <Body style={{ borderBottomWidth: 0 }}>
            <Text style={styles._pages}>Addresses</Text>
          </Body>
          <Right>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
          </Right>
        </ListItem>

        <ListItem icon style={styles._list}>
          <Left>
            <SimpleLineIcons
              name="user-follow"
              size={20}
              color="grey"
              style={{ marginLeft: 10 }}
            />
          </Left>
          <Body style={{ borderBottomWidth: 0 }}>
            <Text style={styles._pages}>Who I’m Following</Text>
          </Body>
          <Right>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
          </Right>
        </ListItem>

        <ListItem icon style={styles._list}>
          <Left>
            <MaterialIcons
              name="notifications-none"
              size={20}
              color="grey"
              style={{ marginLeft: 10 }}
            />
          </Left>
          <Body style={{ borderBottomWidth: 0 }}>
            <Text style={styles._pages}>Notifications</Text>
          </Body>
          <Right>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
          </Right>
        </ListItem>

        <ListItem icon style={styles._list}>
          <Left>
            <Image
              source={require("./../../../assets/sellericon.png")}
              style={styles._list_icon}
            />
          </Left>
          <Body style={{ borderBottomWidth: 0 }}>
            <Text style={styles._pages}>Become a Seller</Text>
          </Body>
          <Right>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
          </Right>
        </ListItem>
      </ScrollView>
    </View>
  );
}
