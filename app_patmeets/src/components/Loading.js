import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function Loading(props) {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator {...props} />
    </View>
  );
}
