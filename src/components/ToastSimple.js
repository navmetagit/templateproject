import React from 'react';
import Toast from 'react-native-simple-toast';

const ToastSimple = ( text, duration, position, color ) => {
    return !!position?
    Toast.showWithGravity(
        text,
        duration == 'short' ? Toast.SHORT : Toast.LONG,
        position == 'top' ? Toast.TOP : position=='bottom'? Toast.BOTTOM : Toast.CENTER)
        
        :
    Toast.show(
        text,
        duration == 'short' ? Toast.SHORT : Toast.LONG)
    
}

export default ToastSimple;