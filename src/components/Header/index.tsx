import React, { ReactNode } from "react";
import { View, Text, Image } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

import { Background } from "../../components/Background";
import { global } from "../../styles/global";

interface IHeader {
  title: string;
  action?: ReactNode;
}

const Header: React.FC<IHeader> = ({ title, action }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[global.colors.secondary100, global.colors.secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={global.colors.heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action && <View>{action}</View>}
    </LinearGradient>
  );
};

export { Header };
