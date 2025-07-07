'use client';

import type { ChangeEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(`/${event.target.value}${pathname}`);
    router.refresh(); // Ensure the page takes the new locale into account related to the issue #395
  };

  return (
    <select
      defaultValue={routing.locales[0]}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-hidden focus-visible:ring-3"
      aria-label="lang-switcher"
    >
      {routing.locales.map(elt => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
