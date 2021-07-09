import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";

import { styles } from "./styles";
import { global } from "../../styles/global";

const Create: React.FC = () => {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

  return (
    <Background>
      <Header title="Agendar Partida" />

      <Text style={styles.label}>Categoria</Text>

      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      {/*  1:08:03 */}

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            <View style={styles.image} />

            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione um servidor</Text>
            </View>

            <Feather
              name="chevron-right"
              color={global.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  );
};

export { Create };
