import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'Conta 1',
        data_conta: '15/01/2024',
        conta: '523 + 15 = 538'
    },
    {
        id: '2',
        title: 'Conta 2',
        data_conta: '24/04/2024',
        conta: '728 + 10 = 738'
    },
    {
        id: '3',
        title: 'Conta 3',
        data_conta: '07/03/2024',
        conta: '611 + 22 = 633'
    },
    {
        id: '4',
        title: 'Conta 4',
        data_conta: '12/02/2024',
        conta: '847 + 5 = 852'
    },
    {
        id: '5',
        title: 'Conta 5',
        data_conta: '19/05/2024',
        conta: '432 + 18 = 450'
    },
    {
        id: '6',
        title: 'Conta 6',
        data_conta: '30/06/2024',
        conta: '395 + 30 = 425'
    },
    {
        id: '7',
        title: 'Conta 7',
        data_conta: '03/07/2024',
        conta: '289 + 14 = 303'
    },
    {
        id: '8',
        title: 'Conta 8',
        data_transacao: '15/08/2024',
        conta: '512 + 25 = 537'
    },
    {
        id: '9',
        title: 'Conta 9',
        data_transacao: '22/09/2024',
        conta: '764 + 11 = 775'
    }
];

const Item = ({ title, data_conta, conta}) => (
    <View style={styles.item}>
        <Text style={styles.title_item}>{title}</Text>

        <View style={styles.flex_row}>
          <Text style={styles.font_size_geral}>Data da Conta:</Text>
          <Text style={styles.font_size_geral}>{data_conta}</Text>
        </View>
        
        <View style={styles.flex_row}>
          <Text style={styles.font_size_geral}>Conta:</Text>
          <Text style={styles.font_size_geral}>{conta}</Text>
        </View>
    </View>

);

const Histórico = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title_pag}>Ultimas Contas</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title}
                data_conta={item.data_conta} conta={item.conta} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center'
    },
    
    flex_row: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    item: {
        backgroundColor: '#0C8CD4',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 15,
        width: 350
      },
      
      title_pag: {
        fontSize: 20,
        backgroundColor: '#0C8CD4',
        width: '55%',
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 20,
        borderRadius: 20,
        color: '#fff'
    },

    title_item: {
      fontSize: 20,
      width: '100%',
      textAlign: 'center',
      marginBottom: 10,
      color: '#fff'
    },

    font_size_geral: {
        fontSize: 20,
        color: '#fff'
    }
});

export default Histórico;