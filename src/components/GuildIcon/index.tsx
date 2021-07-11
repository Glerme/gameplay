import React from "react";
import { Image, View } from "react-native";

const { CDN_IMAGE } = process.env;

import DiscordSvg from "../../assets/discord.svg";
import { styles } from "./styles";

interface IGuildIcon {
  guildId: string;
  iconId: string | null;
}

const GuildIcon: React.FC<IGuildIcon> = ({ guildId, iconId, ...rest }) => {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
};

export { GuildIcon };
