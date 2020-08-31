import { shallow, ShallowWrapper } from 'enzyme';
import { createBrowserHistory } from 'history';
import React from 'react';
import * as redux from 'react-redux';
import configureStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import CompleteComponent from '../CompleteComponent';

// Create a mock redux store before testing:
const mockStore: MockStoreCreator = configureStore();
const store: MockStoreEnhanced = mockStore({
   completeComponentState: {
      reduxTextLine: '',
      reduxNumber: 0,
   },
});
jest.spyOn(redux, 'useSelector').mockImplementation(f => f(store.getState()));
jest.spyOn(redux, 'useDispatch').mockImplementation(() => store.dispatch);

describe('<CompleteComponent />', () => {
   test('Renders correctly', () => {
      const component: ShallowWrapper = shallow(<CompleteComponent history={createBrowserHistory()} />);
      expect(component).toMatchSnapshot();
   });
});
