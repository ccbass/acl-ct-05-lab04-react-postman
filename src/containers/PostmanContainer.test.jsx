import React from 'react';
import { getAllByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PostmanContainer } from './PostmanContainer';

describe('Postman Container Tests', () => {

  it('loads the components correctly', async () => {
    render(<PostmanContainer />);

    screen.getByText('Mailman Clone');
    screen.getByText('History:');
    screen.getByText('Selected method: Choose method below!');

    return waitFor(() => {
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(5);
    });
  });


  it('correctly sends a GET request', async () => {
    render(<PostmanContainer />);

    screen.getByText('Mailman Clone');

    const urlInput = await screen.getByLabelText('Request URL:');
    userEvent.type(urlInput, 'https://jsonplaceholder.typicode.com/posts/1');

    const getBtn = await screen.getAllByRole('button', {name: 'GET'})
    userEvent.click(getBtn[0])

    const submitBtn = await screen.getAllByRole('button', {name: 'Submit Request'})
    userEvent.click(submitBtn[0])

    return waitFor(() => {
        screen.getByText('Selected method: GET')
        screen.getByText(/"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"/gi)
    })

  });

});