import React, { useCallback, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListGames } from "../../components/ListGames";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";

import { styles } from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");

  const handleAppointmentDetails = useCallback(() => {
    navigation.navigate("Details");
  }, []);

  const handleAppointmentAdd = useCallback(() => {
    navigation.navigate("Create");
  }, []);

  const appointment = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:00h",
      description: "Lorem ipsum dolor",
    },
    {
      id: "2",
      guild: {
        id: "2",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "2",
      date: "22/06 às 20:00h",
      description: "Lorem ipsum dolor",
    },
  ];

  const handleCategorySelect = useCallback((categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }, []);

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
      <View>
        <ListHeader title="Partidas Agendadas" subtitle="Total 6" />

        <FlatList
          data={appointment}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListGames data={item} onPress={handleAppointmentDetails} />
          )}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ListDivider}
        />
      </View>
    </Background>
  );
};

export { Home };
