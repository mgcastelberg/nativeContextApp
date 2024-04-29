import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store'

export const ProfileScreen = () => {

  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );
  const changeProfile = useProfileStore( state => state.changeProfile );

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ name }</Text>
      <Text style={ styles.title }>{ email }</Text>
      <Pressable onPress={ () => useProfileStore.setState({ name: 'Manuel Gómez'})} style={ styles.primaryButton }>
        <Text>Cambiar nombre</Text>
      </Pressable>
      <Pressable onPress={ () => useProfileStore.setState({ email: 'jmgc@virket.com'})} style={ styles.primaryButton }>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable onPress={ () => changeProfile('Jhon Doe', 'jhon.doe@test.com') } style={ styles.primaryButton }>
        <Text>Regresar a Jhon Doe</Text>
      </Pressable>
    </View>
  )
}
