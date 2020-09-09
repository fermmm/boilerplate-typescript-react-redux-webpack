import { mount } from 'enzyme';
import React from 'react';
import CompleteComponent from '../CompleteComponent';

describe('<CompleteComponent />', () => {
   test('Renders correctly', () => {
      expect(mount(<CompleteComponent />)).toMatchSnapshot();
   });
});
