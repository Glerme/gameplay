import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";

import { styles } from "./styles";

interface IButton extends RectButtonProps {
  title: string;
}

const Button: React.FC<IButton> = ({ title, ...rest }) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export { Button };
