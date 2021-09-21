import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function ListCard(props) {
    return (
        <Pressable onPress={() => props.removeItem(props.item.id)}>
            <View style={styles.card} key={props.item.id}>
                <Text>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Name:{" "}
                    </Text>
                    {props.item.name}
                </Text>
                <Text>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        Description:{" "}
                    </Text>
                    {props.item.description}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        backgroundColor: "white",
        shadowColor: "red",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
});
