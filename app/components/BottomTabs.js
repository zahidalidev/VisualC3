import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"

import bottomImg from "../../assets/images/Subtract.png"
import homeImg from "../../assets/images/VectorHome(2).png"

import Colors from '../config/Colors';

function BottomTabs(props) {
    return (
        <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%" }}>
            <ImageBackground style={{ justifyContent: "space-around", flexDirection: "row", width: "100%", height: RFPercentage(9) }} source={bottomImg}  >
                <TouchableOpacity style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10, justifyContent: "center",
                    alignItems: 'center', position: "absolute",
                    bottom: RFPercentage(-3), left: RFPercentage(8.5),
                    marginBottom: RFPercentage(5), width: RFPercentage(8),
                    height: RFPercentage(8), borderRadius: RFPercentage(10),
                    backgroundColor: Colors.primaryShade
                }} >
                    <Image source={homeImg} />
                </TouchableOpacity>
                <View style={{ width: "50%", justifyContent: "center", alignItems: 'flex-end' }} >
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="chat" color={Colors.borderDark} size={RFPercentage(4)} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "30%", justifyContent: "center", alignItems: 'center' }} >
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" color={"#2A2A64"} size={RFPercentage(3.4)} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default BottomTabs;