import Image from 'next/image';
import { Suspense } from 'react';
import { CounterForm } from '@/components/CounterForm';
import { CurrentCount } from '@/components/CurrentCount';

export async function generateMetadata() {
  // Removed next-intl imports and usage for single-language setup

  return {
    title: 'Counter',
    description: 'Counter description',
  };
}

export default async function CounterPage() {
  // Removed next-intl imports and usage for single-language setup

  return (
    <>
      <CounterForm />

      <div className="mt-3">
        <Suspense fallback={<p>Loading counter...</p>}>
          <CurrentCount />
        </Suspense>
      </div>

      <div className="mt-5 text-center text-sm">
        {`Security powered by `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://launch.arcjet.com/Q6eLbRE"
        >
          Arcjet
        </a>
      </div>

      <a
        href="https://launch.arcjet.com/Q6eLbRE"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/arcjet-light.svg"
          alt="Arcjet"
          width={128}
          height={38}
        />
      </a>
    </>
  );
};
