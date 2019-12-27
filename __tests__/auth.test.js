// import React from 'react';

// import {
//   getByText,
//   render,
//   fireEvent,
//   getByTestId,
// } from '@testing-library/react-native';

// import Auth from '../src/pages/Auth/auth';

// describe('Auth Page', () => {
//   it('should call api to login', () => {
//     const {getByText, getByTestId} = render(<Auth />);

//     fireEvent.changeText(getByTestId('cpfInput'), '91976979234');
//     fireEvent.changeText(getByTestId('passInput'), '1234test');
//     // fireEvent.press(getByText('Entrar'));
//   });

//   it('should navigate Home', () => {
//     const navigation = {navigate: jest.fn()};
//     const {getByText, getByTestId} = render(<Auth navigation={navigation} />);

//     fireEvent.changeText(getByTestId('cpfInput'), '91976979234');
//     fireEvent.changeText(getByTestId('passInput'), '1234test');
//     fireEvent.press(getByText('Entrar'));

//     expect(navigation.navigate).toBeCalledWith('Home');
//   });
// });
