import * as React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Logo from '../assets/icons/Logo'
import CartLogo from '../assets/icons/Shopping'

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View>
        <CartLogo style={{ backgroundColor: 'blue' }} />
      </View>

      <View>
        <Logo />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
  },
  logo: { position: 'absolute', bottom: 16, left: 16 },
})
