import React from "react";
import { Text, View } from "react-native";

import { SvgProps } from "react-native-svg";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { LinearGradient } from "expo-linear-gradient";

import { global } from "../../styles/global";
import { styles } from "./styles";

interface ICategory extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
}

const Category: React.FC<ICategory> = ({
  icon: Icon,
  title,
  checked = false,
  hasCheckBox = false,
  ...rest
}) => {
  const { secondary40, secondary50, secondary70, secondary90 } = global.colors;
  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary90 : secondary50, secondary40]}
        >
          {hasCheckBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
};

export { Category };
