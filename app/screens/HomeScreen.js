import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, View, Text, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons, Feather } from "@expo/vector-icons";


import img1 from "../../assets/images/Rectangle61.png"
import logo from "../../assets/images/CompanyLogo.png"

import Colors from '../config/Colors';

function HomeScreen(props) {

    const [profileImg1, setProfileImg1] = useState(img1)

    return (
        <View style={{ flex: 1 }} >
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            <ScrollView style={{ width: "100%" }}>
                <View style={styles.container}>
                    <View style={{ height: RFPercentage(8), flexDirection: "row", width: "85%", justifyContent: "center", alignItems: "center" }} >
                        <View>
                            <Image resizeMode="contain" width={RFPercentage(7)} height={RFPercentage(7)} source={profileImg1} style={{ borderRadius: 4, width: RFPercentage(7), height: RFPercentage(7) }} />
                        </View>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "flex-start", marginLeft: RFPercentage(1) }} >
                            <View style={{ marginLeft: RFPercentage(1) }} >
                                <Text style={{ letterSpacing: 0.8, fontSize: RFPercentage(2.9), fontWeight: "bold", color: Colors.primary }} >Hi, Stephanie!</Text>
                            </View>
                            <View style={{ marginTop: RFPercentage(0.5), marginLeft: RFPercentage(0.5), padding: RFPercentage(0.4), paddingLeft: RFPercentage(1), paddingRight: RFPercentage(1), borderRadius: RFPercentage(1), flexDirection: "row", backgroundColor: Colors.danger }} >
                                <MaterialIcons name="location-on" size={RFPercentage(1.4)} color={Colors.white} />
                                <Text style={{ fontSize: RFPercentage(1.4), marginLeft: RFPercentage(0.5), color: Colors.white, fontWeight: "bold", letterSpacing: 0.8 }} >Location Disabled</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 10, borderColor: Colors.border, padding: RFPercentage(0.7) }} >
                            <Feather name="settings" size={RFPercentage(3)} color={Colors.grey} />
                        </View>
                    </View>

                    {/* premier */}
                    <View style={{ marginTop: RFPercentage(3), padding: RFPercentage(2), height: RFPercentage(11), flexDirection: "row", width: "85%", justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: Colors.border, borderRadius: RFPercentage(2.5) }} >
                        <View>
                            <Image resizeMode="contain" width={RFPercentage(7)} height={RFPercentage(7)} source={logo} style={{ borderRadius: 4, width: RFPercentage(7), height: RFPercentage(7) }} />
                        </View>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "flex-start", marginLeft: RFPercentage(1) }} >
                            <View style={{ marginLeft: RFPercentage(1) }} >
                                <Text style={{ letterSpacing: 0.8, fontSize: RFPercentage(3.2), fontWeight: "bold", color: Colors.primary }} >Premier Brokers</Text>
                            </View>
                            <View style={{ marginLeft: RFPercentage(0.5), padding: RFPercentage(0.4), paddingLeft: RFPercentage(1), paddingRight: RFPercentage(1), borderRadius: RFPercentage(1), flexDirection: "row", justifyContent: "center", alignItems: 'center' }} >
                                <View style={{ width: RFPercentage(1.3), height: RFPercentage(1.3), borderRadius: 3, backgroundColor: Colors.danger }} ></View>
                                <Text style={{ fontSize: RFPercentage(2.7), marginLeft: RFPercentage(0.5), color: Colors.borderDark, letterSpacing: 1.2 }} >Palm Beach Gardens</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: RFPercentage(2.5)
    }
})

export default HomeScreen;