import {render ,screen} from '@testing-library/react'
import App from './App'


test("Verifica se o app.js esta renderizando corretamente", ()=>{
  render(<App />);

  const text = screen.getByRole("heading", {name: /Hello World/i});
  // const heding = screen.getByRole('heading', {name: /hello world/i});

  expect(text).toBeInTheDocument();

})



