import React, { useCallback, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { IListGamesData, ListGames } from "../../components/ListGames";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { COLLECTION_APPOINTMENT } from "../../configs/database";
import { GuildData } from "../../components/Guild";
import { Loading } from "../../components/Loading";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<IListGamesData[]>([]);

  const handleAppointmentDetails = useCallback(
    (guildSelected: IListGamesData) => {
      navigation.navigate("Details", { guildSelected });
    },
    []
  );

  const handleAppointmentAdd = useCallback(() => {
    navigation.navigate("Create");
  }, []);

  const handleCategorySelect = useCallback((categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }, []);

  const loadGuilds = useCallback(async () => {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
    const storage: IListGamesData[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item?.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadGuilds();
    }, [category])
  );

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentAdd} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          <ListHeader
            title="Partidas Agendadas"
            subtitle={`Total ${appointments.length}`}
          />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListGames
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            style={styles.matches}
            contentContainerStyle={{ paddingBottom: 69 }}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ListDivider}
          />
        </>
      )}
    </Background>
  );
};

export { Home };
