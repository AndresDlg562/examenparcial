'use client';

import { useSearchParams } from 'next/navigation';

export default function WelcomePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          ¡Hola, {name}! 
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Gracias por ser parte de Café Aurora.
        </p>
      </div>
    </div>
  );
} 