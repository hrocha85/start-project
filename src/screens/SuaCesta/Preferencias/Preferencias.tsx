import { useCallback, useState } from 'react';
import { View, ScrollView, Alert, StyleSheet, Image, TextInput, Button } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { RadioButton, Text } from 'react-native-paper';

import dayjs from 'dayjs';


type SummaryProps = Array<{
    id: string;
    date: string;
    amount: number;
    completed: number;
}>

export function Preferencias() {
    const [CEP, onChangeCEP] = useState('');
    const [Endereco, onChangeEndereco] = useState('');
    const [Numero, onChangeNumero] = useState('');
    const [Bairro, onChangeBairro] = useState('');
    const [Cidade, onChangeCidade] = useState('');
    const [Estado, onChangeEstado] = useState('');

    const [valueDia, setValueDia] = useState('');
    const [valuePeriodo, setValuePeriodo] = useState('');
    const [valueFrequencia, setValueFrequencia] = useState('');

    const { navigate } = useNavigation()

    const continuar = () => {
        console.log(CEP, Endereco)
    }

    return (
        <View style={styles.containerProgressbar}>
            <ScrollView>

                <View style={styles.containerLogin}>
                    <View style={styles.containerDesconto}>
                        <Text style={styles.desconto}>Com essa cesta você economiza até <Text style={styles.desconto40}>40% de desconto</Text> em comparação ao mercado tradicional de orgânico</Text>
                    </View>
                    <Text style={styles.DiaSemana}>Monte a sua cesta a partir de uma de nossas sugestões</Text>
                    <View  >
                        <RadioButton.Group onValueChange={newValue => setValueDia(newValue)} value={valueDia}>
                            <View style={styles.RadioGroup}>
                                <View style={styles.ViewRadioGroup}>
                                    <Image
                                        style={{ width: 130, height: 100 }}
                                        source={require('./abundante.png')} />
                                    <RadioButton value="Sábado" />
                                    <Text>a partir de</Text>
                                    <Text>R$ 140,89</Text>
                                </View>
                                <View style={styles.ViewRadioGroup}>
                                    <Image
                                        style={{ width: 130, height: 100 }}
                                        source={require('./abundante.png')} />
                                    <RadioButton value="Sábado" />
                                    <Text>a partir de</Text>
                                    <Text>R$ 140,89</Text>
                                </View>
                                <View style={styles.ViewRadioGroup}>
                                    <Image
                                        style={{ width: 130, height: 100 }}
                                        source={require('./abundante.png')} />
                                    <RadioButton value="Sábado" />
                                    <Text>a partir de</Text>
                                    <Text>R$ 140,89</Text>
                                </View>

                            </View>
                        </RadioButton.Group>
                    </View>
                    <Text style={styles.DiaSemana}>Informe o período que deseja receber a cesta</Text>
                    <View  >
                        <RadioButton.Group onValueChange={newValue => setValuePeriodo(newValue)} value={valuePeriodo}>
                            <View style={styles.RadioGroup}>
                                <View style={styles.ViewRadioGroup}>
                                    <Text>Manhã</Text>
                                    <RadioButton value="Manhã" />
                                    <Text>das 8:00 às 13:00</Text>
                                </View>
                                <View style={styles.ViewRadioGroup}>
                                    <Text>Tarde</Text>
                                    <RadioButton value="Tarde" />
                                    <Text>das 12:00 às 19:00</Text>
                                </View>
                                <View style={styles.ViewRadioGroup}>
                                    <Text>Tanto faz</Text>
                                    <RadioButton style={{ justifyContent: 'center' }} value="Tanto faz" />
                                    <Text>Qualquer horário</Text>
                                </View>

                            </View>
                        </RadioButton.Group>
                    </View>
                    <Text style={styles.DiaSemana}>Escolha uma frequência de entrega</Text>
                    <View  >
                        <RadioButton.Group onValueChange={newValue => setValueFrequencia(newValue)} value={valueFrequencia}>
                            <View style={styles.RadioGroup}>
                                <View style={styles.ViewRadioGroup}>
                                    <Text>Semanal</Text>
                                    <RadioButton value="Semanal" />
                                </View>
                                <View style={styles.ViewRadioGroup}>
                                    <Text>Quinzenal</Text>
                                    <RadioButton value="Quinzenal" />
                                </View>

                            </View>
                        </RadioButton.Group>
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
                        <Text style={styles.desconto}>Endereço</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeCEP}
                            value={CEP}
                        />
                    </View>
                    <View>
                        <Text style={styles.desconto}>Número</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumero}
                            value={CEP}
                        />
                    </View>
                    <View>
                        <Text style={styles.desconto}>Bairro</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeBairro}
                            value={CEP}
                        />
                    </View>

                    <View>
                        <Text style={styles.desconto}>Cidade</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeCidade}
                            value={CEP}
                        />
                    </View>
                    <View>
                        <Text style={styles.desconto}>Estado</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEstado}
                            value={CEP}
                        />
                    </View>

                    <Button
                        title="Continuar"
                        color="#fe4f20"
                        onPress={() => continuar()}
                    />
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    containerProgressbar: {
        flex: 1,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        // width: '100vw',
        // height: '1000px',
    },
    RadioGroup: {
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4
    },
    ViewRadioGroup: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 6,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
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
    DiaSemana: {

        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 15,
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
        padding: 25,
        gap: 3
    },
    containerDesconto: {
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom: 10,
        width: '100%',
        height: 100,
        backgroundColor: '#fff0ec'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
