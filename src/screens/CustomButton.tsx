import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FirstType from '../components/FirstType'
import SecondType from '../components/SecondType'

type Props = {}

const CustomButton = (props: Props) => {
    const [type, setType] = useState('first')
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ margin: 10 }} />
            <Button title='First Type' onPress={() => setType('first')} />
            <View style={{ margin: 10 }} />
            <Button title='Second Type' onPress={() => setType('second')} />
            <View style={{ margin: 10 }} />
            {type === 'first' && <FirstType />}
            {type === 'second' && <SecondType />}
        </SafeAreaView>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})