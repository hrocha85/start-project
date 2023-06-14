import { useCallback, useState } from 'react';
import { Text, View, ScrollView, Alert, StyleSheet, Image } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import dayjs from 'dayjs';


type SummaryProps = Array<{
    id: string;
    date: string;
    amount: number;
    completed: number;
}>

export function Navbar() {
    const [loading, setLoading] = useState(true)
    const [summary, setSummary] = useState<SummaryProps | null>(null)

    const { navigate } = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.navbar}>DIFERENTE</Text>
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

    navbar: {
        height: '74px',
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
