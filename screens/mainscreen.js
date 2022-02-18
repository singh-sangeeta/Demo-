import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Mainscreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/doctor.jpg')}
            style={styles.logo}
            resizeMode="stretch"
            /> */}
                <Image
                    source={require('../assests/doctor.jpg')}
                    style={styles.logo}
                    resizeMode="stretch" />
            </View>
            <View>
                <Text style={styles.title}> Help millions people</Text>
                <Text style={styles.title}> everywhere,everytime!</Text>
            </View>
            {/* <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        > */}<View style={styles.footer}>
                <View style={styles.button}>
                    <Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}
                            style={styles.login} >
                            <Text style={styles.textSign}>Log in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}
                            style={styles.signIn}>
                            <Text style={styles.textSign1}>Sign in</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
                <Text style={styles.text}>Are you a patient? Get Here</Text>
            </View>
            {/* </Animatable.View> */}
        </View>
    );
};

export default Mainscreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.75;

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
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: 'black',
        fontSize: 24,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        marginTop: 40,
        marginLeft: 70,
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
        color: 'white',
        fontWeight: 'bold'
    },
    textSign1: {
        color: 'black',
        fontWeight: 'bold'
    }
});
