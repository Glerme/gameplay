import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";

import IIlustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";

const Singin: React.FC = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image source={IIlustrationImg} style={styles.img} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e organize suas jogatinas {`\n`}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com o Discord"
          activeOpacity={0.7}
          onPress={handleSignIn}
        />
      </View>
    </View>
  );
};

export { Singin };
