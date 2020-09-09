import { mount } from 'enzyme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../../../themes/defaultTheme';
import { SimpleComponent } from '../SimpleComponent';

describe('<SimpleComponent />', () => {
   test('Renders correctly', () => {
      expect(
         mount(
            <ThemeProvider theme={defaultTheme}>
               <SimpleComponent />
            </ThemeProvider>
         )
      ).toMatchSnapshot();
   });
});
