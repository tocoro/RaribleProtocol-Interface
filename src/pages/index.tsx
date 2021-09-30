import * as React from 'react';
import { ProductList } from 'components/ProductCard';
import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';

export interface HomeProps {}

//MOCKED DATA
const dummyItems = [
  {
    id: '123',
    title: 'Product 1',
    imageUrl: 'https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
    description: 'random',
    createdQuantity: 24,
    availableQuantity: 1,
    likes: 24,
    price: 0.1,
    ownerUsername: 'random',
    ownerProfileImageUrl:
      'https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
  },
  {
    id: '123',
    title: 'Product 1',
    imageUrl:
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    description: 'random',
    createdQuantity: 24,
    availableQuantity: 1,
    likes: 24,
    price: 0.1,
    ownerUsername: 'random',
    ownerProfileImageUrl:
      'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
  },
  {
    id: '123',
    title: 'Product 1',
    imageUrl: 'http://www.mandysam.com/img/random.jpg',
    description: 'random',
    createdQuantity: 24,
    availableQuantity: 1,
    likes: 24,
    price: 0.1,
    ownerUsername: 'random',
    ownerProfileImageUrl:
      'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
  },
];
const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <>
      <div className="flex py-6 justify-between max-w-screen-2xl mx-auto px-6 pt-10">
        <h1 className="text-white text-4xl font-bold">Explore</h1>
        <Button type={ButtonType.Secondary} title="TODO: dropdown" />
      </div>
      <ProductList items={new Array(5).fill(dummyItems).flat()} />
    </>
  );
};

export default Home;