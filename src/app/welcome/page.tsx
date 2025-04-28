'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import WelcomeMessage from '../components/WelcomeMessage';

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
      <WelcomeMessage
        fullName={memberData.fullName}
        membershipNumber={memberData.membershipNumber}
      />
    </div>
  );
}