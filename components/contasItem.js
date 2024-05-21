import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const ContasItem = ({conta}) => {
    return (
        <View style={styles.item}>
        <View style={styles.flex_row}>
          <Text style={styles.font_size_geral}>Operação realizada:</Text>
          <Text style={styles.font_size_geral}>{conta}</Text>
        </View>
    </View>

    );
};

const styles = StyleSheet.create({
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

export default ContasItem;