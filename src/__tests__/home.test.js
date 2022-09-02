import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import renderWithProviders from '../mocks/test-utils';
import Home from '../components/Home';

const handlers = [
  rest.get('http://localhost:3000/doctors', (req, res, ctx) => res(
    ctx.json(
      [
        {
          id: 1,
          name: 'John Doe',
          specialization: 'General Practitioner',
          picture: 'https://randomuser.me/api/portraits.png',
          available_times: '8:00 - 10:00',
          hourly_rate: '100',
        },
        {
          id: 2,
          name: 'Jane Doe',
          specialization: 'General Practitioner',
          picture: 'https://randomuser.me/api/portraits.png',
          available_times: '8:00 - 10:00',
          hourly_rate: '100',
        },
      ],
    ), ctx.delay(200),
  )),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

it('renders Home component', async () => {
  renderWithProviders(<Home />);
  expect(await screen.findByText(/John Doe/i)).toBeInTheDocument();
  expect(await screen.findByText(/Jane Doe/i)).toBeInTheDocument();
});
