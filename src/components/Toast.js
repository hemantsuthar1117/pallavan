import React from 'react';
import Toast from 'react-native-toast-message';

export const showToast = (type, text1, text2 = '') => {
  Toast.show({
    type,
    text1,
    text2,
    position: 'bottom',
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
  });
};

export const ToastConfig = {
  success: ({ text1, text2 }) => (
    <Toast.BaseToast
      style={{
        backgroundColor: '#4CAF50',
        borderLeftColor: '#388E3C',
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '500',
        color: '#FFFFFF',
      }}
      text2Style={{
        fontSize: 13,
        color: '#FFFFFF',
      }}
      text1={text1}
      text2={text2}
    />
  ),
  error: ({ text1, text2 }) => (
    <Toast.BaseToast
      style={{
        backgroundColor: '#E53935',
        borderLeftColor: '#D32F2F',
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '500',
        color: '#FFFFFF',
      }}
      text2Style={{
        fontSize: 13,
        color: '#FFFFFF',
      }}
      text1={text1}
      text2={text2}
    />
  ),
};