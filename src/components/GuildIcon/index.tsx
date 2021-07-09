import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

const GuildIcon: React.FC = ({ ...rest }) => {
  const uri =
    "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png";

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
};

export { GuildIcon };
