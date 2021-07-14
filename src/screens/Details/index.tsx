import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  ImageBackground,
  Text,
  View,
  FlatList,
  Alert,
  Share,
  Platform,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import * as Linking from "expo-linking";

import { Fontisto } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { IMember, Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import BannerImg from "../../assets/banner.png";

import { global } from "../../styles/global";
import { styles } from "./styles";
import { IListGamesData } from "../../components/ListGames";
import { useCallback } from "react";
import { api } from "../../services/api";
import { useEffect } from "react";
import { Loading } from "../../components/Loading";

interface IParams {
  guildSelected: IListGamesData;
}

interface IWidget {
  id: string;
  name: string;
  instant_invite: string;
  members: IMember[];
}

const Details: React.FC = () => {
  const route = useRoute();
  const { guildSelected } = route.params as IParams;
  const [loading, setLoading] = useState(true);
  const [widget, setWidget] = useState<IWidget>({} as IWidget);

  const fetchGuildInfo = useCallback(async () => {
    try {
      const { data } = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json `
      );
      setWidget(data);
    } catch (error) {
      Alert.alert("Verifique as configurações do servidor.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleShare = useCallback(() => {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({ message, url: widget.instant_invite });
  }, []);

  const handleOpenGuild = useCallback(() => {
    Linking.openURL(widget.instant_invite);
  }, []);

  useEffect(() => {
    fetchGuildInfo();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShare}>
              <Fontisto name="share" size={24} color={global.colors.heading} />
            </BorderlessButton>
          )
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}> {guildSelected.guild.name} </Text>
          <Text style={styles.subTitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Loading />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget?.members?.length}`}
          />

          <FlatList
            data={widget?.members}
            keyExtractor={(item) => item.data?.id}
            renderItem={({ item }) => <Member data={item?.data} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      )}
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
      </View>
    </Background>
  );
};

export { Details };
