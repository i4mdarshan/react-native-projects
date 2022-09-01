import React from 'react'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

const FocussedStatusBar = (props) => {

    const isFocussed = useIsFocused();

  return isFocussed ? <StatusBar animated={true} {...props} /> : null;
}

export default FocussedStatusBar

// const styles = StyleSheet.create({})