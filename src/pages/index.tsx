import * as React from 'react';
import Button from 'components/Button/Button';

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => (
  <div className="w-1/2 pt-8 m-auto text-center">
    <Button label="Hello World" onClick={() => alert('Hello World')} />
  </div>
);

export default Home;
