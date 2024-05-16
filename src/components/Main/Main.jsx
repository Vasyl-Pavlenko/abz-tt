import React, { Suspense } from 'react';
import { Loader } from '../Loader';

const Hero = React.lazy(() => import(/* webpackChunkName: "Hero" */ '../Hero/Hero'));
const SignUp = React.lazy(() => import(/* webpackChunkName: "SignUp" */ '../SignUp/SignUp'));
const Users = React.lazy(() => import(/* webpackChunkName: "Users" */ '../Users/Users'));

export const Main = () => {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Hero />
        <Users />
        <SignUp />
      </Suspense>
    </main>
  );
};
