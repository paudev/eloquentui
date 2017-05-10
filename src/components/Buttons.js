import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { ButtonStyle } from '../themeManager';

const defaultStyle = (theme) => {
    // TODO: add default style
    return {
        container: { flex: 1 }
    };
};

const Button = ({
    themeProvider,
    disabled,
    textStyle,
    buttonType,
    type,

    // event props
    onPress,
    onPressIn,
    onPressOut,
    onLongPress
}) => {

    const theme = themeProvider || ButtonStyle; // TODO: can override default theme using theme provider
    const baseStyle = defaultStyle(theme);                                     

    const touchableProps = {
        onPress,
        onPressIn,
        onPressOut,
        onLongPress,
    };

    // TODO: template for styles
    const textStyles = [
        baseStyle.baseText,
        baseStyle.type[type].text,
        textStyle,
        disabled ? disabledTextStyle : {}
    ];

    return (
        <View // styles for outer container
            style={[baseStyle.container, disabled ? disabledStyle : {} ]}
        >
            <TouchableOpacity 
                {...touchableProps}
            >
                <View 
                    // styles for inner container
                >
                    <Text style={[baseStyle.text, textStyle]} >
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

Button.defaultProps = {
    activeOpacity: 0.8,
    disabled: false,
    disabledStyle: { opacity: 0.3 },
    type: 'primary',
    shape: 'rounded',
    onPress: {},
    onPressIn: {},
    onPressOut: {},
    onLongPress: {},
    iconPosition: 'right',
    uppercase: true
};

export default Button;