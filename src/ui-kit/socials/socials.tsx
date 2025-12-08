'use client';

import composeClassName from '@src/helpers/compose-class-name';
import './socials.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Socials({ customClass }: { customClass?: string }) {
  return <div className={composeClassName('socials', customClass)}>
    <Link href='https://viber.com'><Image className='socials-icon' src='/icons/viber.webp' width={26} height={26} alt='Viber' /></Link>
    <Link href='https://whatsapp.com'><Image className='socials-icon' src='/icons/whatsapp.webp' width={26} height={26} alt='WhatsApp' /></Link>
    <Link href='https://telegram.com'><Image className='socials-icon' src='/icons/telegram.webp' width={26} height={26} alt='Telegram' /></Link>
  </div>
}