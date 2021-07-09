import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

type ITextArea = TextInputProps;

const TextArea: React.FC<ITextArea> = ({ ...rest }) => {
  return <TextInput style={styles.container} {...rest} />;
};

export { TextArea };
