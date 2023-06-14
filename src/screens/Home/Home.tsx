import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Login } from './Login/Login';


type SummaryProps = Array<{
    id: string;
    date: string;
    amount: number;
    completed: number;
}>

export function Home() {
    const [loading, setLoading] = useState(true)
    const [summary, setSummary] = useState<SummaryProps | null>(null)

    const { navigate } = useNavigation()


    return (
        <View style={styles.back}>
            <View style={styles.container}>
                <Text style={styles.navbar}>DIFERENTE</Text>
            </View>
            <View>
                <Login />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fe4f20',
        flex: 1,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        width: '100vw',
        backgroundColor: '#f5f3ef'
    },

    navbar: {
        height: 74,
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
