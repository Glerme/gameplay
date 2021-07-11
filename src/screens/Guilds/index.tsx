import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildData } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";

import { styles } from "./styles";

interface IGuilds {
  handleGuildsSelected: (guild: GuildData) => void;
}

const Guilds: React.FC<IGuilds> = ({ handleGuildsSelected }) => {
  const [guilds, setGuilds] = useState<GuildData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGuilds = useCallback(async () => {
    const { data } = await api.get("/users/@me/guilds");

    setGuilds(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={guilds}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Guild data={item} onPress={() => handleGuildsSelected(item)} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            ListHeaderComponent={() => <ListDivider isCentered />}
            showsVerticalScrollIndicator={false}
            style={styles.guild}
            contentContainerStyle={{ paddingBottom: 69, paddingTop: 69 }}
          />
        )}
      </View>
    </>
  );
};

export { Guilds };
