import React from 'react';
import AppBar from 'material-ui/AppBar';
import {TEXTS_CONSTANTS} from '../constants/texts';
import {COLORS} from '../style/brandbook';
export const Logo = () => {
    return (
        <AppBar
            title={TEXTS_CONSTANTS.HEADER_TEXT}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementLeft={<div></div>}
            style={LogoStyle}
      />
    )
}

const LogoStyle = {
    backgroundColor:COLORS.mainColor,
    direction:'rtl'
}