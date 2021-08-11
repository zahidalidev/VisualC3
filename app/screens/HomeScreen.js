import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons, Feather } from "@expo/vector-icons";

// images
import profileImg from "../../assets/images/Rectangle61.png"
import logo from "../../assets/images/CompanyLogo.png"
import guardeIcon from '../../assets/images/VectorHome.png';
import alertIcon from '../../assets/images/AlertIcon.png';
import mapImg from '../../assets/images/RectangleMap.png';

import Colors from '../config/Colors';
import Card from '../components/Card';
import BottomTabs from '../components/BottomTabs';

function HomeScreen(props) {

    const [profileImg1, setProfileImg1] = useState(profileImg)
    const [cardData, setCardData] = useState([
        {
            id: 0,
            title: "GuardMe",
            type: "guard",
            iconImg: guardeIcon
        },
        {
            id: 1,
            title: "Panic",
            type: "panic",
            iconImg: alertIcon
        },
    ])


    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }} >
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
                            <View style={{ flex: 1, marginLeft: RFPercentage(0.5), padding: RFPercentage(0.4), paddingLeft: RFPercentage(1), paddingRight: RFPercentage(1), borderRadius: RFPercentage(1), flexDirection: "row", justifyContent: "center", alignItems: 'center' }} >
                                <View style={{ width: RFPercentage(1.2), height: RFPercentage(1.2), borderRadius: 3, backgroundColor: Colors.danger }} ></View>
                                <Text style={{ fontSize: RFPercentage(2.7), marginLeft: RFPercentage(0.5), color: Colors.borderDark, letterSpacing: 1.2 }} >Palm Beach Gardens</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: RFPercentage(3), justifyContent: 'space-between', alignItems: "center", flex: 1, flexDirection: "row", width: "85%" }} >
                        <FlatList
                            data={cardData}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => <Card cardStyle={{ marginLeft: index % 2 == 1 ? RFPercentage(4) : 0 }} data={item} />}
                            contentContainerStyle={{ alignItems: "center" }}
                        />
                    </View>

                    {/* last showings */}
                    <View style={{ marginTop: RFPercentage(20), flexDirection: "column", width: "80%", justifyContent: "center", alignItems: "center" }} >
                        <View style={{ marginBottom: 5, alignItems: "center", flexDirection: "row", width: "97%", justifyContent: "space-between" }} >
                            <Text style={{ fontSize: RFPercentage(2.8), color: Colors.primary, fontWeight: "bold" }} >Your Last Showings</Text>
                            <Text style={{ color: "#585CE5" }} >see all</Text>
                        </View>
                        <View style={{ backgroundColor: Colors.lightBackground, padding: RFPercentage(1.2), height: RFPercentage(17), flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: Colors.borderGreen, borderRadius: RFPercentage(2.5) }} >

                            <View style={{ marginBottom: RFPercentage(1), flexDirection: "row", justifyContent: "space-between", flex: 1, width: "90%", alignItems: "center" }} >
                                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: Colors.borderBlue, borderRadius: RFPercentage(2), width: RFPercentage(7), height: RFPercentage(7), color: Colors }} >
                                    <Text style={{ color: Colors.white }} >July</Text>
                                    <Text style={{ color: Colors.white, fontWeight: "bold" }} >Friday</Text>
                                    <Text style={{ color: Colors.white, fontWeight: "bold" }} >2</Text>
                                </View>
                                <View>
                                    <Text style={{ color: Colors.primary, fontWeight: "bold" }} >420 Baxtor Rd, Jupiter</Text>
                                    <Text style={{ color: Colors.grey }} >+ Notes</Text>
                                    <Text style={{ color: Colors.grey }} >+ Attachments</Text>
                                </View>
                                <View style={{ justifyContent: "center", alignItems: "center", borderRadius: RFPercentage(2), width: RFPercentage(7), height: RFPercentage(7), color: Colors }} >
                                    <Image resizeMode="contain" width={RFPercentage(9)} height={RFPercentage(9)} source={mapImg} style={{ borderRadius: 4, width: RFPercentage(9), height: RFPercentage(9) }} />
                                </View>
                            </View>

                            <View style={{ borderRadius: RFPercentage(1.5), width: "95%", maxHeight: RFPercentage(6), backgroundColor: Colors.lightGreen, flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: RFPercentage(1) }} >
                                <Text style={{ color: Colors.borderGreen, fontSize: RFPercentage(2.1), fontWeight: "bold" }} >9:20am  - 11:50am</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <BottomTabs />
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