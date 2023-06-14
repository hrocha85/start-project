import { useCallback, useState } from 'react';
import { Text, View, ScrollView, Alert, StyleSheet, Image, TextInput, Button } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import dayjs from 'dayjs';
import { TabTypes } from '../../../routes/tab';


type SummaryProps = Array<{
    id: string;
    date: string;
    amount: number;
    completed: number;
}>

export function Login() {
    const [CEP, onChangeCEP] = useState('');
    const [Email, onChangeEmail] = useState('');

    const navigation = useNavigation<TabTypes>()

    const continuar = () => {
        console.log(CEP, Email)
        navigation.navigate("Entrega")
    }

    return (
        <View style={styles.containerProgressbar}>
            {/* <View style={styles.view}>
                <View style={styles.view2}>
                    <Text style={styles.progressbar}>1</Text>
                    <Text style={styles.progressbar}>2</Text>
                    <Text style={styles.progressbar}>3</Text>
                    <Text style={styles.progressbar}>4</Text>
                </View>
            </View> */}
            <View style={styles.containerLogin}>
                <View style={styles.containerDesconto}>
                    <Text style={styles.desconto}>Com essa cesta você<Text style={styles.desconto40}>economiza até 40%</Text>de desconto em comparação ao mercado tradicional de orgânico</Text>
                </View>
                <View>
                    <Text style={styles.desconto}>CEP</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeCEP}
                        value={CEP}
                    />
                </View>
                <View>
                    <Text style={styles.desconto}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={Email}
                    />
                </View>
                <Button
                    title="Continuar"
                    color="#fe4f20"
                    onPress={() => continuar()}
                />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    containerProgressbar: {
        flex: 1,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        width: '100vw',
    },
    view: {
        flex: 1,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        display: 'flex',
        flexWrap: 'nowrap',
    },
    view2: {
        position: 'relative',
        flexDirection: 'column',

    },
    progressbar: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desconto: {

        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desconto40: {

        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 13,
        color: '#fe4f20',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerLogin: {
        borderRadius: 15,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
        width: '90%',
        height: '100%',
        backgroundColor: 'white',
        padding: 25
    },
    containerDesconto: {
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom: 10,
        width: '100%',
        height: '40%',
        backgroundColor: '#fff0ec'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
