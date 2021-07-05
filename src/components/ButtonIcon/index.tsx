import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, Image } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

interface IButtonIcon extends RectButtonProps {
  title: string;
}

const ButtonIcon: React.FC<IButtonIcon> = ({ title, ...rest }) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export { ButtonIcon };
