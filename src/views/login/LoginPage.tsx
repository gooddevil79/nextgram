import Link from 'next/link';

import { LoginForm } from './components/LoginForm';

export const LoginPage = function () {
  return (
    <>
      <LoginForm />
      <span className="mt-3 flex gap-1">
        Don't have an account yet?
        <Link className="text-primary-500" href="/register">
          Signup.
        </Link>
      </span>
    </>
  );
};
