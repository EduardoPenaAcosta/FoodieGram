
import styled from "styled-components";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  Image,
  Button,
} from "react-native";
import Constants from "expo-constants";

export const colors = {
    white: '#FFFF',
    black: '#0000',
    darkChocolate: '#5D442F',
    brown: '#503B29',
    primary: "#332424",
    secondary: "#4D3636",
    tertiary: "#E6E6E6",
    alternative: "#999999",
    lightBrown: '#887565',
    brownOrange: '#AE6527',
    red:'FF0000',
    green: '00A720',
    yellow: 'FFE100',
    black: '#0000',
}

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${colors.darkChocolate};
  letter-spacing: 0.5px;
  font-style: normal;
`;
