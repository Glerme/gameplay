import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

interface IListDivider {
  isCentered?: boolean;
}

const ListDivider: React.FC<IListDivider> = ({ isCentered, ...rest }) => {
  return (
    <View
      style={[
        styles.container,
        isCentered
          ? {
              marginVertical: 12,
            }
          : {
              marginTop: 2,
              marginBottom: 31,
            },
      ]}
    ></View>
  );
};

export { ListDivider };
