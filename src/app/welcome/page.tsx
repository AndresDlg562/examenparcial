'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WelcomeMessage from '../components/WelcomeMessage';
import { useMember } from '../context/MemberContext';

export default function WelcomePage() {
  const { memberData } = useMember();
  const router = useRouter();

  useEffect(() => {
    if (!memberData) {
      router.push('/login');
    }
  }, [memberData, router]);

  if (!memberData) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <WelcomeMessage
        fullName={memberData.fullName}
        membershipNumber={memberData.membershipNumber}
      />
    </div>
  );
}