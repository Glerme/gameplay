import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Fontisto } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import BannerImg from "../../assets/banner.png";

import { global } from "../../styles/global";
import { styles } from "./styles";

const Details: React.FC = () => {
  const navigation = useNavigation();

  const members = [
    {
      id: "1",
      username: "Guilherme",
      avatarUrl: "https://github.com/Glerme.png",
      status: "online",
    },
    {
      id: "2",
      username: "Guilherme",
      avatarUrl: "https://github.com/Glerme.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={global.colors.heading} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}> Lendários </Text>
          <Text style={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            nihil accusantium quibusdam voluptates aperiam ullam. Rerum dolorem
            voluptatem in! Suscipit blanditiis porro sit mollitia nihil corrupti
            labore dolores nemo laboriosam?
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
};

export { Details };
