import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CharacterDesignPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/personal-work');
  }, [router]);
  return null;
}
