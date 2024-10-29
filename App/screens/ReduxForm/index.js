import React, { useState } from 'react';
import { TextInput, Button, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Form, Field } from 'react-final-form';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './style';
import { Text, View } from '../../components/Base';

const ReduxForm = () => {

  const { colors } = useTheme();
  const styles = createStyles(colors);

  const [userData,setUserData] = useState({
    firstName : 'Dhruv',
    lastName : 'Rajdev',
    mobile : '8320801152',
    email : 'dhruv@gmail.com',
    password : '112233'
  })

  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!values.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(values.mobile)) {
      errors.mobile = 'Mobile number must be 10 digits';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const onSubmit = values => {
    console.log('Form Submitted:', values);
  };

  const ClearForm = ()=>{
    setUserData({})
  }

  const CustomTextInput = ({ input, meta, ...rest }) => {
    return (
      <View style={styles.fieldContainer}>
        <TextInput
          style={[styles.input, { borderColor: meta.touched && meta.error ? colors.error : colors.secondary }]}
          {...input}
          {...rest}
          placeholderTextColor={colors.secondary}
        />
        {meta.touched && meta.error && <Text style={styles.error}>{meta.error}</Text>}
      </View>
    );
  };

  return (
    <ScrollView style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Form 
          
          initialValues={{
            firstName : userData?.firstName ? userData?.firstName : '',
            lastName : userData?.lastName ? userData?.lastName : '',
            mobile : userData?.mobile ? userData?.mobile : '',
            email : userData?.email ? userData?.email : '',
            password : userData?.password ? userData?.password : '',
          }}
          onSubmit={onSubmit}
          validate={validate}
          mutators={{
            setValue: ([field, value], state, { changeValue }) => {
                changeValue(state, field, () => value);
            },
        }}
          render={({ handleSubmit }) => (
            <View style={styles.container}>
              <Field name="firstName" component={CustomTextInput} placeholder="First Name" />
              <Field name="lastName" component={CustomTextInput} placeholder="Last Name" />
              <Field name="mobile" component={CustomTextInput} placeholder="Mobile Number" keyboardType="numeric" />
              <Field name="email" component={CustomTextInput} placeholder="Email" keyboardType="email-address" />
              <Field name="password" component={CustomTextInput} placeholder="Password" secureTextEntry />
              <TouchableOpacity style={styles.touchableStyle} onPress={handleSubmit}>
                <Text style={styles.startText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableStyle} onPress={ClearForm}>
                <Text style={styles.startText}>Clear</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ReduxForm;
