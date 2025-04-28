'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface MemberData {
  fullName: string;
  membershipNumber: string;
}

interface MemberContextType {
  memberData: MemberData | null;
  setMemberData: (data: MemberData | null) => void;
}

const MemberContext = createContext<MemberContextType | undefined>(undefined);

export function MemberProvider({ children }: { children: ReactNode }) {
  const [memberData, setMemberData] = useState<MemberData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = sessionStorage.getItem('memberData');
    if (storedData) {
      setMemberData(JSON.parse(storedData));
    }
  }, []);

  const value = {
    memberData,
    setMemberData: (data: MemberData | null) => {
      setMemberData(data);
      if (data) {
        sessionStorage.setItem('memberData', JSON.stringify(data));
      } else {
        sessionStorage.removeItem('memberData');
      }
    }
  };

  return (
    <MemberContext.Provider value={value}>
      {children}
    </MemberContext.Provider>
  );
}

export function useMember() {
  const context = useContext(MemberContext);
  if (context === undefined) {
    throw new Error('useMember must be used within a MemberProvider');
  }
  return context;
} 