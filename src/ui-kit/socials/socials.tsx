'use client';

import composeClassName from '@src/helpers/compose-class-name';
import './socials.scss';
import Link from 'next/link';

export default function Socials({ customClass }: { customClass?: string }) {
  return <div className={composeClassName('socials', customClass)}>
    <Link href='https://viber.com'><img className='socials-icon' src='icons/viber.webp' alt='Иконка' /></Link>
    <Link href='https://whatsapp.com'><img className='socials-icon' src='icons/whatsapp.webp' alt='Иконка' /></Link>
    <Link href='https://telegram.com'><img className='socials-icon' src='icons/telegram.webp' alt='Иконка' /></Link>
  </div>
}