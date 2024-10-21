import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import { View, Text, ScrollView, SafeAreaView, Image, TextInput, StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ScrollView >
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});