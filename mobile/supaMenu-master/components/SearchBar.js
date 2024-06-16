import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({onSearch}) => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    }

    return <View style={styles.continer}>
        <TextInput
        style={styles.input}
        placeholder="Search your preferred restaurant"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
        />
    </View>
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 3,
        fontSize: 13,
        textAlign: 'center',
        width: '80%',
        marginTop: 50,
        marginLeft: 40
    }
});

export default SearchBar;