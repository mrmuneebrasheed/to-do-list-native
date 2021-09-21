import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Modal,
    Alert,
    Pressable,
    TouchableOpacity,
} from "react-native";
import ListCard from "./components/ListCard";
import ListModal from "./components/ListModal";

export default function App() {
    const [showModal, setShowModal] = useState(false);
    const [list, setList] = useState([]);
    const updateList = (name, description) => {
        list.push({ name: name, description: description, id: Math.random() });
        setList(list);
    };
    const removeItem = (id) => {
        const newList = list?.filter((item) => item.id !== id);
        setList(newList);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>To Do List</Text>
            <View
                style={{
                    width: 300,
                    borderWidth: 1,
                    borderColor: "grey",
                    padding: 10,
                    marginVertical: 10,
                }}
            >
                {list?.map((item) => (
                    <ListCard removeItem={removeItem} item={item} />
                ))}
            </View>
            <View
                style={{
                    borderColor: "black",
                    borderWidth: 1,
                    backgroundColor: "white",
                }}
            >
                <ListModal
                    updateList={updateList}
                    modalVisible={showModal}
                    setModalVisible={setShowModal}
                />
                <TouchableOpacity
                    onPress={() => {
                        setShowModal(!showModal);
                    }}
                >
                    <Text style={styles.button}>+ Add a List</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: "auto",
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 30,
        textAlign: "center",
        backgroundColor: "white",
        padding: 10,
        borderColor: "grey",
        borderWidth: 1,
    },
    button: {
        fontSize: 20,
        backgroundColor: "skyblue",
        color: "black",
        textAlign: "center",
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
});
