import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

type ISmallInput = TextInputProps;

const SmallInput: React.FC<ISmallInput> = ({ ...rest }) => {
  return (
    <TextInput style={styles.container} keyboardType="numeric" {...rest} />
  );
};

export { SmallInput };
