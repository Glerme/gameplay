import React, { ReactNode } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";

import { Background } from "../Background";

import { styles } from "./styles";

interface IModalView extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

const ModalView: React.FC<IModalView> = ({ children, closeModal, ...rest }) => {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />

              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export { ModalView };
