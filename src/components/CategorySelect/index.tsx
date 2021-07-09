import React from "react";
import { View, ScrollView } from "react-native";

import { categories } from "../../utils/category";

import { global } from "../../styles/global";
import { Category } from "../Category";

import { styles } from "./styles";

interface ICategorySelect {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

const CategorySelect: React.FC<ICategorySelect> = ({
  categorySelected,
  hasCheckBox = false,
  setCategory,
}) => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
};

export { CategorySelect };
