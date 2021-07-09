import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { global } from "../../styles/global";

type IButtonAdd = RectButtonProps;

const ButtonAdd: React.FC<IButtonAdd> = ({ ...rest }) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={global.colors.heading}
        size={24}
      />
    </RectButton>
  );
};

export { ButtonAdd };
