'use client';
import { Button } from '@/components/Button';
import { useRef } from 'react';
export default function Home() {
  const ref = useRef<null | HTMLButtonElement>(null);
  return (
    <>
      <main className=" items-center p-24">
        <h1>Reuseable Components</h1>
      </main>
      <Button ref={ref} size="sm" variant="outline">
        any text
      </Button>
    </>
  );
}
