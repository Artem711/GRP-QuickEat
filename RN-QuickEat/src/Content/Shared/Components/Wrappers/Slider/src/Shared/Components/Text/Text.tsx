// PLUGINS IMPORTS //
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  color?: string;
  size?: number;
  isBold?: boolean;
  isCenterAlign?: boolean;

  style?: any;
  onPress?: () => void;
};

const TextBody: React.FC<PropsType> = (props) => {
  const getProps = () => {
    return {};
  };

  return (
    <Text
      style={[
        props.style,
        {
          color: props.color || 'white',
          fontSize: props.size || 15,
          fontWeight: props.isBold ? 'bold' : '500',
          textAlign: props.isCenterAlign && 'center',
        },
        {...getProps()},
      ]}>
      {props.children}
    </Text>
  );
};

const TextComponent: React.FC<PropsType> = (props) => {
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <TextBody {...props}>{props.children}</TextBody>
      </TouchableOpacity>
    );
  } else {
    return <TextBody {...props}>{props.children}</TextBody>;
  }
};

export default TextComponent;
