import { shallow } from 'enzyme';
import React from 'react';
import { SimpleComponent } from '../SimpleComponent';

describe('<SimpleComponent />', () => {
   test('Renders correctly', () => {
      expect(shallow(<SimpleComponent />)).toMatchSnapshot();
   });
});
