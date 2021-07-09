import React from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildData } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

interface IGuilds {
  handleGuildsSelected: (guild: GuildData) => void;
}

const Guilds: React.FC<IGuilds> = ({ handleGuildsSelected }) => {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "img.png",
      owner: true,
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildsSelected(item)} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          showsVerticalScrollIndicator={false}
          style={styles.guild}
        />
      </View>
    </>
  );
};

export { Guilds };
