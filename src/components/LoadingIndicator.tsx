import React from 'react'
import { MotiView } from 'moti'
import { Platform } from 'react-native'


const LoadingIndicator = ({ size }: { size: number }) => {
    return <MotiView
        from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 0,
            shadowOpacity: 0.5
        }}
        animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            shadowOpacity: 1
        }}
        transition={{
            type: 'timing',
            duration: 1000,
            loop: true,
            // repeatReverse: false,
            // repeat: Infinity,
        }}
        style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,
            borderColor: '#fff',
            shadowColor: '#fff',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 20,
            elevation: Platform.OS === 'android' ? 10 : 0,
        }}
    />
}

export default LoadingIndicator