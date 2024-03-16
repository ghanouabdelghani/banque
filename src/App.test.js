import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});






const card = ({ fullname, age, avatar }) => {
  return (
    <>
      <img width="100px" height="100px" src={avatar} alt="Avatar" />
      <h1>fullname : {fullname}</h1>
      <p>age : {age}</p>
    </>
  );
};
export default card;
