import { useCallback, useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import dayjs from 'dayjs';


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
        <View >
            <Text>home</Text>
        </View>
    )
} 