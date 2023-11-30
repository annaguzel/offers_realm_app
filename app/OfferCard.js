import React from "react";
import { Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import { Card, Button } from "react-native-paper";

const OfferCard = ({ offer }) => {
  const copyToClipboard = () => {
    Clipboard.setString(offer.discountCode);
    Alert.alert(
      "Copied!",
      `Discount code ${offer.discountCode} copied to clipboard.`
    );
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{offer.companyName}</Text>
        <Text style={styles.description}>{offer.description}</Text>
        <Button
          mode="contained"
          onPress={copyToClipboard}
          style={styles.button}
        >
          {offer.discountCode}
        </Button>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: "center",
    width: "90%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#5266CA", // Or any other color you prefer
  },
});

export default OfferCard;
