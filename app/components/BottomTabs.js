import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"

import bottomImg from "../../assets/images/Subtract.png"
import homeImg from "../../assets/images/VectorHome(2).png"

import Colors from '../config/Colors';

function BottomTabs(props) {
    return (
        <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%" }}>
            <ImageBackground style={{ justifyContent: "space-around", flexDirection: "row", width: "100%", height: RFPercentage(9) }} source={bottomImg}  >
                <View style={{ justifyContent: "center", alignItems: 'center', elevation: 10, position: "absolute", bottom: RFPercentage(-3), left: RFPercentage(8.5), marginBottom: RFPercentage(5), width: RFPercentage(8), height: RFPercentage(8), borderRadius: RFPercentage(10), backgroundColor: Colors.primaryShade }} >
                    <Image source={homeImg} />
                </View>
                <View style={{ width: "50%", justifyContent: "center", alignItems: 'flex-end' }} >
                    <MaterialCommunityIcons name="chat" color={Colors.borderDark} size={RFPercentage(4)} />
                </View>
                <View style={{ width: "30%", justifyContent: "center", alignItems: 'center' }} >
                    <Ionicons name="notifications-outline" color={Colors.black} size={RFPercentage(4)} />
                </View>
            </ImageBackground>
        </View>
    );
}

export default BottomTabs;