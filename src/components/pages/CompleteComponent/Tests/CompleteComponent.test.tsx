import { shallow } from 'enzyme';
import React from 'react';
import CompleteComponent from '../CompleteComponent';

describe('<CompleteComponent />', () => {
   test('Renders correctly', () => {
      expect(shallow(<CompleteComponent />)).toMatchSnapshot();
   });
});
