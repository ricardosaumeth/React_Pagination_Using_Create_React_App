import React from 'react'
import ReactDOM from 'react-dom'
import { mount, shallow } from 'enzyme';
import Pagination from './index';

function setup() {
  const props = {
    margin: 0,
    page: 1,
    count: 4,
    onPageChange: () => {}  
  };

  return shallow(<Pagination margin={props.margin} page={props.page} count={props.count} { ...props }/>);
}

test('renders Pagination componet without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pagination />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders pagination-container', () => {
  const wrapper = setup();
  expect(wrapper.find('#pagination-container').length).toBe(1);
});

test('renders pagination-button', () => {
  const wrapper = setup();
  expect(wrapper.find('.pagination-button').length).toBe(1);
});