import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaursant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2023/03/colorful-ice-cream-cone.jpg",
    ],
    address = "100 some randome street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarly,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white", borderRadius: 5 },
  cover: { padding: 10, backgroundColor: "white" },
  title: { padding: 10 },
});
