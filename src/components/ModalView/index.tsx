import React, { ReactNode } from "react";
import { View, Modal, ModalProps } from "react-native";

import { Background } from "../Background";

import { styles } from "./styles";

interface IModalView extends ModalProps {
  children: ReactNode;
}

const ModalView: React.FC<IModalView> = ({ children, ...rest }) => {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />

            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
};

export { ModalView };
