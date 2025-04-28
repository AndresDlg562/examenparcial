'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface MemberData {
  fullName: string;
  membershipNumber: string;
}

export default function WelcomePage() {
  const [memberData, setMemberData] = useState<MemberData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = sessionStorage.getItem('memberData');
    if (!storedData) {
      router.push('/login');
      return;
    }

    setMemberData(JSON.parse(storedData));
  }, [router]);

  if (!memberData) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          ¡Hola, {memberData.fullName}!
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Gracias por ser parte de Café Aurora.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Número de membresía: {memberData.membershipNumber}
        </p>
      </div>
    </div>
  );
} 