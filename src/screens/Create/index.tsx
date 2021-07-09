import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";
import { GuildIcon } from "../../components/GuildIcon";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildData } from "../../components/Guild";

import { styles } from "./styles";
import { global } from "../../styles/global";

const Create: React.FC = () => {
  const [category, setCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [guild, setGuild] = useState<GuildData>({} as GuildData);

  const handleOpenGuilds = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleGuildSelect = useCallback((guildSelected: GuildData) => {
    setGuild(guildSelected);
    setOpenModal(false);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar Partida" />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={global.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}> Dia e mês </Text>

                <View style={styles.colunm}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}> / </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}> Horário </Text>

                <View style={styles.colunm}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}> : </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>

      <ModalView visible={openModal}>
        <Guilds handleGuildsSelected={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};

export { Create };
