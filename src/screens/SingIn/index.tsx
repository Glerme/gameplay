import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";

import IIlustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import { useAuth } from "../../hooks/auth";
import { global } from "../../styles/global";

const Singin: React.FC = () => {
  const { singIn, loading } = useAuth();

  const handleSignIn = async () => {
    try {
      await singIn();
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IIlustrationImg}
          style={styles.img}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}e organize suas jogatinas {`\n`}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          {loading ? (
            <ActivityIndicator color={global.colors.primary} />
          ) : (
            <ButtonIcon
              title="Entrar com o Discord"
              activeOpacity={0.7}
              onPress={handleSignIn}
            />
          )}
        </View>
      </View>
    </Background>
  );
};

export { Singin };
