"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function InterestForm({ email }: { email: string }) {
  const [interests, setInterests] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterests(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/interests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, interests }),
    });

    if (res.ok) {
      alert('Interests submitted successfully');
      router.push('/dashboard'); // redirect to dashboard or desired page
    } else {
      const data = await res.json();
      alert(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-6">
      <div>
        <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Interests</label>
        <input
          type="text"
          name="interests"
          id="interests"
          onChange={handleChange}
          value={interests}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Interests
        </button>
      </div>
    </form>
  );
}
