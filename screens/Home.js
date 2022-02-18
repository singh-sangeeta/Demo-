import React from 'react';
import {
    View,
    Text,
    TouchableOpacity, Button,
    Image,
    StyleSheet, TouchableHighlight,
    TextInput, Icon
} from 'react-native';
import {
    PermissionModal,
    PermissionItem
} from "react-native-permissions-modal";

import Feather from 'react-native-vector-icons/Feather';



function Home() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View style={styles.image}>
                <TouchableHighlight
                    style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
                >
                    <Image
                        source={require('./assests/doctor1.jpg')}
                        style={styles.logo}
                        resizeMode="stretch" />
                </TouchableHighlight>
                <View>
                    <Text style={styles.title}>Hi Dr.</Text>
                    <Text style={styles.text}>How're you today?</Text>
                </View>
            </View>
            <View>
                <TextInput
                    placeholder="search Patient, health issue, ..."
                    inlineImageLeft="username"
                    inlineImagePadding={2}
                    underlineColorAndroid="transparent"
                    // value={search}
                    // onChangeText={(text) => {
                    //     setKey(text);
                    // }}
                    style={styles.input}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 30,
                }}
            >
                <View
                    style={{
                        marginLeft: '2%',
                        width: '60%',
                        shadowColor: '#000',
                        shadowOpacity: 1,
                        shadowOffset: {
                            width: 3,
                            height: 3
                        }
                    }}
                >
                    <Text style={styles.title}>Tasks for today</Text>
                    <Text style={styles.text}>5 of 9 completed</Text>
                </View>
                <View
                    style={{
                        padding: 15,
                        backgroundColor: 'white',
                        marginBottom: 15,
                        marginLeft: '2%',
                        width: 100,
                        height: 90,
                        shadowColor: '#000',
                        flexDirection: 'row',
                        shadowOpacity: 1,
                        shadowOffset: {
                            width: 3,
                            height: 3
                        }
                    }}>
                    <Text style={styles.textSign}> 5</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={styles.box}>
                    <View style={styles.image1}>
                        <TouchableHighlight
                            style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
                        >
                            <Image
                                source={require('./assests/calendar.png')}
                                style={styles.logo}
                                resizeMode="stretch" />
                        </TouchableHighlight>
                    </View>
                    <View style={{
                        flexDirection: 'column'
                    }}>
                        <Text style={styles.text1}>Schedule</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.image}>
                        <TouchableHighlight
                            style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
                        >
                            <Image
                                source={require('./assests/history.jpg')}
                                style={styles.logo}
                                resizeMode="stretch" />
                        </TouchableHighlight>
                    </View>
                    <Text style={styles.text1}>ConsultHistory</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={[styles.box, { flexDirection: 'column' }]}>
                    <View style={styles.image}>
                        <TouchableHighlight
                            style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
                        >
                            <Image
                                source={require('./assests/manage.png')}
                                style={styles.logo}
                                resizeMode="stretch" />
                        </TouchableHighlight>
                    </View>
                    <Text style={styles.text1}>Patient </Text>
                    <Text style={styles.text1}>Management</Text>
                </View>
                <View style={[styles.box, { flexDirection: 'column' }]}>
                    <View style={styles.image}>
                        <TouchableHighlight
                            style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]}
                        >
                            <Image
                                source={require('./assests/chat.png')}
                                style={styles.logo}
                                resizeMode="stretch" />
                        </TouchableHighlight>
                    </View>
                    <Text style={styles.text1}>FreeConsults </Text>
                    <Text style={styles.text1}>150+new</Text>
                </View>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>


        </View >

    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        marginLeft: 120,
        marginTop: 150
    },
    footer: {
        flex: 1,
        backgroundColor: '#3ACCCC',
        borderTopLeftRadius: 50,
        paddingVertical: 50,
        paddingHorizontal: 30,

    },
    image: {
        marginTop: 20,
        flexDirection: 'row'
    },
    image1: {
        marginTop: 10,
        flexDirection: 'column'
    },

    profileImgContainer: {
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 100,
    },
    logo: {
        height: 80,
        width: 80,
        borderRadius: 100,
    },
    title: {
        color: 'black',
        fontSize: 24,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    text: {
        color: 'black',
        marginTop: 2,
        fontSize: 20,
        marginLeft: 20,
        alignItems: "center",
    },
    text1: {
        color: 'black',
        marginTop: 2,
        fontSize: 16,
        textAlign: 'center',
        alignItems: "center",
    },
    button: {
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 8,
    },
    signIn: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 12,
        width: 150,
        height: 40,
        padding: 5,
        marginLeft: 60,
        justifyContent: 'center',
        alignItems: 'center',

    },
    login: {
        backgroundColor: "none",
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 12,
        padding: 5,
        marginRight: 30,
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSign: {
        color: '#3ACCCC',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginLeft: 15,
        marginTop: 8,
        textDecorationLine: 'underline'
    },
    textSign1: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    input: {
        backgroundColor: "#BDBFCE",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 22,
    },
    box: {
        padding: 15,
        backgroundColor: 'white',
        marginBottom: 15,
        marginLeft: '7%',
        marginTop: 10,
        borderRadius: 20,
        width: 150,
        height: 150,
        shadowColor: '#000',
        flexDirection: 'column',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },


    centeredView: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
