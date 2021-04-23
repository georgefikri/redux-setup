import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
// import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Input } from '../input';

let onChange = jest.fn();

describe('testing delayed input', ()=>{
  afterEach(cleanup);


  test('should write in input', () => {
    const { getByTestId } = render(<Input data-testid='input' onChange={()=> onChange()}/>);
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: '23' } });
    expect(input.value).toBe('23');
  });

  //   snapshot
  test('should do snapshot', () => {
    const input = renderer.create(
      <Input
        onChange={()=> onChange()}
      />
    ).toJSON();
    expect(input).toMatchSnapshot();
  });

});