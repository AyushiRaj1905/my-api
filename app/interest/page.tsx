"use client"
import RegisterForm from '@/components/RegisterForm';
import LoginForm from '@/components/LoginForm';
import { useState } from 'react';
import InterestForm from '@/components/InterestForm';

export default function Register() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="item-center z-10 max-w-md w-full space-y-8 bg-white bg-opacity-90 p-10 rounded-lg shadow-lg">
        {!loggedIn ? (
          <>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register a new account
            </h2>
            <RegisterForm />
            <div className="mt-8 border-t-2 border-gray-200 pt-8">
              <h2 className="text-center text-3xl font-extrabold text-gray-900">
                Login
              </h2>
              <LoginForm onLogin={handleLogin} />
            </div>
          </>
        ) : (
          <InterestForm email={userEmail} />
        )}
      </div>
    </div>
  );
}
