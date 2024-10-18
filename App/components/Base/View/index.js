import { View as BaseView } from 'react-native';

export default function View(props) {
  return (
    <BaseView style={props.style}>
      {props.children}
    </BaseView>
  );
}
