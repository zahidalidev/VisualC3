import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../config/Colors';

function Card({ cardStyle, data }) {
    return (
        <View style={[{ width: RFPercentage(17.2), height: RFPercentage(17.2), backgroundColor: Colors.lightBackground, borderRadius: RFPercentage(2), justifyContent: 'center', alignItems: "center" }, cardStyle]} >
            <LinearGradient colors={[Colors.darkShade, data.type === 'panic' ? Colors.dangerShade : Colors.primaryShade]} start={[1, 2.5]} end={[1, 0]} style={{ width: RFPercentage(16), height: RFPercentage(16), borderRadius: RFPercentage(2) }} >
                <View style={{ justifyContent: 'center', alignItems: "center", margin: RFPercentage(2), width: RFPercentage(6.5), height: RFPercentage(6.5), borderRadius: RFPercentage(5), backgroundColor: Colors.white }} >
                    <Image resizeMode="contain" style={{ height: RFPercentage(3.8), height: RFPercentage(3.8) }} source={data.iconImg} />
                </View>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.3), fontWeight: "bold", letterSpacing: 1.2 }} >{data.title}</Text>
                </View>
            </LinearGradient >
        </View>
    );
}


export default Card;