import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// images
import profileImg from "../../assets/images/Rectangle62.png"
import showingSet from "../../assets/images/showingSet.png"
import reminderIcon from "../../assets/images/reminderIcon.png"
import notificationsIcon from "../../assets/images/notificationsIcon.png"
import cancelled from "../../assets/images/cancelled.png"

import Colors from '../config/Colors';
import BottomTabs from '../components/BottomTabs';
import NotificationCard from '../components/NotificationCard';

function NotificationsScreen(props) {

    const [profileImg1, setProfileImg1] = useState(profileImg)
    const [notificationDetails, setNotificationDetails] = useState([
        {
            day: "Today",
            deleteAll: true,
            notifications: [
                {
                    id: 0,
                    title: "Reminders Set for Appointment",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue morbi vulputate enim interdum felis.",
                    iconImg: reminderIcon,
                    backgroundColor: "rgba(26, 176, 149, 0.2)",
                    time: "1 minute ago",
                },
                {
                    id: 1,
                    title: "Showing Set for Tomorrow",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue morbi vulputate enim interdum felis.",
                    iconImg: showingSet,
                    backgroundColor: "rgba(88, 92, 229, 0.2)",
                    time: "5 minute ago",
                },
                {
                    id: 2,
                    title: "Notification from Samantha",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue morbi vulputate enim interdum felis.",
                    iconImg: notificationsIcon,
                    backgroundColor: "rgba(88, 92, 229, 0.2)",
                    time: "32 minute ago",
                },
            ]
        },
        {
            day: "Yesterday",
            deleteAll: false,
            notifications: [
                {
                    id: 0,
                    title: "Showing Cancelled",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue morbi vulputate enim interdum felis.",
                    iconImg: cancelled,
                    backgroundColor: "rgba(241, 81, 120, 0.2)",
                    time: "02.00 pm",
                },
                {
                    id: 1,
                    title: "Showing Set for Today",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue morbi vulputate enim interdum felis.",
                    iconImg: showingSet,
                    backgroundColor: "rgba(88, 92, 229, 0.2)",
                    time: "10.00 am",
                }
            ]
        }
    ])


    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }} >
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            <ScrollView style={{ width: "100%" }}>
                <View style={styles.container}>

                    <View style={{ height: RFPercentage(8), flexDirection: "row", width: "85%", justifyContent: "center", alignItems: "center" }} >
                        <View style={{ borderWidth: 1, borderRadius: 10, borderColor: Colors.border, padding: RFPercentage(0.8) }} >
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="arrow-left" size={RFPercentage(3)} color={Colors.grey} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ marginRight: RFPercentage(4), color: Colors.primary, fontSize: RFPercentage(2.1) }} >Notifications</Text>
                        </View>
                    </View>

                    {
                        notificationDetails.map((item, index) =>
                            <>
                                <View style={{ marginTop: RFPercentage(2), flexDirection: "row", width: "85%", justifyContent: "space-between", alignItems: "center" }} >
                                    <View style={{ justifyContent: "center", alignItems: "center" }} >
                                        <Text style={{ letterSpacing: 1, fontWeight: "bold", color: Colors.primary, fontSize: RFPercentage(2.1) }} >{item.day}</Text>
                                    </View>
                                    {item.deleteAll ?
                                        <View style={{ justifyContent: "center", alignItems: "center" }} >
                                            <Text style={{ letterSpacing: 0.5, color: Colors.dangerShade, fontSize: RFPercentage(2.1) }} >delete all</Text>
                                        </View>
                                        : null
                                    }
                                </View>

                                {item.notifications.map((notifi, index) =>
                                    <NotificationCard key={index} data={notifi} />
                                )}
                            </>
                        )
                    }
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
    }
})

export default NotificationsScreen;