import React from "react";
import { View, Text } from "react-native";
import { global } from "../../styles/global";

import { Avatar } from "../Avatar";

import { styles } from "./styles";

export interface IMember {
  data: {
    id: string;
    username: string;
    avatarUrl: string;
    status: string;
  };
}

const Member: React.FC<IMember> = ({ data }) => {
  const isOnline = data.status === "online";

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatarUrl} />

      <View>
        <Text style={styles.title}>{data.username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline
                  ? global.colors.on
                  : global.colors.primary,
              },
            ]}
          />

          <Text style={styles.nameStatus}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export { Member };
