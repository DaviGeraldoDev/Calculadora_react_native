import { useIsFocused } from '@react-navigation/native';
import {useState, useEffect} from 'react';
import useStorage from '../../hooks/useStorage'
import ContasItem from '../../components/contasItem'
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';


const Histórico = () => {

    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem } = useStorage();

    useEffect( () => {
        async function loadPasswords() {
            const passwords = await getItem("@secretPass");
            setListPasswords(passwords);
        }

        loadPasswords("@secretPass");
    }, [focused]);

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title_pag}>Ultimas Contas</Text>
          <FlatList
                data={listPasswords}
                keyExtractor={ (item) => String(item)}
                renderItem={({ item }) => 
                <ContasItem conta={item} />}
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
      
      title_pag: {
        fontSize: 20,
        backgroundColor: '#0C8CD4',
        width: '55%',
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 50,
        marginBottom: 20,
        borderRadius: 20,
        color: '#fff'
    }
});

export default Histórico;