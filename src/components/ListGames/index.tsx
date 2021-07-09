import React from "react";
import { View, Text } from "react-native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { categories } from "../../utils/category";

import { GuildIcon } from "../GuildIcon";

import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import { styles } from "./styles";
import { global } from "../../styles/global";

interface GuildProps {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
}

interface IListGamesData {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

interface IListGames extends RectButtonProps {
  data: IListGamesData;
}

const ListGames: React.FC<IListGames> = ({ data, ...rest }) => {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>

            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg
                fill={owner ? global.colors.primary : global.colors.on}
              />

              <Text
                style={[
                  styles.player,
                  { color: owner ? global.colors.primary : global.colors.on },
                ]}
              >
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

export { ListGames };
