import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store';

export const SettingsScreen = () => {
  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );

  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>{ name }</Text>
        <Text style={ styles.title }>{ email }</Text>
    </View>
  )
}
