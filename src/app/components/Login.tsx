'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { members } from '../data/members';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const member = members.find(
      (m) => m.username === username && m.password === password
    );

    if (member) {
      // Store member data in sessionStorage
      sessionStorage.setItem('memberData', JSON.stringify({
        fullName: member.fullName,
        membershipNumber: member.membershipNumber
      }));
      router.push('/welcome');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="username" className="sr-only">
            Nombre de usuario
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-amber-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-amber-300 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="text-red-600 text-sm text-center">{error}</div>
      )}

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  );
}