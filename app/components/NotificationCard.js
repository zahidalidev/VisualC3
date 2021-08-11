import React from 'react';
import { Image, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../config/Colors';

function NotificationCard({ data }) {
    return (
        <View style={{ flex: 1, borderRadius: RFPercentage(2), backgroundColor: Colors.lightBackground, marginTop: RFPercentage(3), height: RFPercentage(11), flexDirection: "row", width: "85%", justifyContent: "center", alignItems: "center" }} >
            <View style={{ position: "absolute", top: RFPercentage(2), left: RFPercentage(2), padding: RFPercentage(1), borderRadius: RFPercentage(1), backgroundColor: data.backgroundColor }} >
                <Image resizeMode="contain" width={RFPercentage(2)} height={RFPercentage(2)} source={data.iconImg} style={{ borderRadius: 4, width: RFPercentage(2), height: RFPercentage(2) }} />
            </View>

            <View style={{ maxWidth: "80%", marginLeft: "14%", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }} >
                <View >
                    <Text style={{ letterSpacing: 0.8, fontSize: RFPercentage(2), fontWeight: "bold", color: Colors.primary }} >{data.title}</Text>
                </View>
                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: 'center' }} >
                    <Text numberOfLines={2} style={{ fontSize: RFPercentage(1.8), color: Colors.borderDark, letterSpacing: 1.2 }} >{data.description}</Text>
                    <Text numberOfLines={1} style={{ alignSelf: "flex-start", fontSize: RFPercentage(1.8), color: Colors.borderDark, letterSpacing: 1.2 }} >{data.time}</Text>
                </View>
            </View>
        </View>
    );
}

export default NotificationCard;