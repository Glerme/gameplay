import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { GuildIcon } from "../GuildIcon";

import { styles } from "./styles";
import { global } from "../../styles/global";

export interface GuildData {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

interface IGuild extends TouchableOpacityProps {
  data: GuildData;
}

const Guild: React.FC<IGuild> = ({ data, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>
            {data.owner ? "Administrador" : "Convidado"}
          </Text>
        </View>
      </View>

      <Feather name="chevron-right" color={global.colors.heading} size={24} />
    </TouchableOpacity>
  );
};

export { Guild };
