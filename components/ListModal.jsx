import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

export default function ListModal(props) {
    const [name, setName] = useState(" ");
    const [description, setDescription] = useState("");
    const nameInputHandler = (event) => {
        setName(event);
    };
    const descriptionInputHandler = (event) => {
        setDescription(event);
    };
    const clearInput = () => {
        setDescription("");
        setName("");
    };
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}
        >
            <View style={styles.container}>
                <Text style={styles.heading}>Add a List</Text>
                <TextInput
                    onChangeText={nameInputHandler}
                    style={styles.input}
                    placeholder="Name"
                />
                <TextInput
                    onChangeText={descriptionInputHandler}
                    style={styles.input}
                    placeholder="Description"
                    multiline={true}
                    numberOfLines={3}
                />
                <Button
                    title="Add the List"
                    style={styles.button}
                    disabled={name.length < 5}
                    onPress={() => {
                        props.setModalVisible(!props.modalVisible);
                        props.updateList(name, description);
                        clearInput();
                    }}
                />
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: "auto",
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "grey",
        borderWidth: 2,
    },
    heading: {
        fontSize: 30,
        textAlign: "center",
        backgroundColor: "skyblue",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    button: {
        fontSize: 20,
        backgroundColor: "skyblue",
        color: "black",
        textAlign: "center",
        padding: 20,
    },
    input: {
        padding: 10,
        width: 200,
        borderColor: "black",
        borderWidth: 2,
        margin: 10,
        backgroundColor: "white",
    },
});
