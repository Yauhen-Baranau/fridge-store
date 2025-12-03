'use server';

import composeClassName from '@src/helpers/compose-class-name';
import './socials.scss';

export default async function Socials({ customClass }: { customClass?: string }) {
  return <div className={composeClassName('socials', customClass)}>
    <img className='socials-icon' src='icons/viber.webp' alt='Иконка' />
    <img className='socials-icon' src='icons/whatsapp.webp' alt='Иконка' />
    <img className='socials-icon' src='icons/telegram.webp' alt='Иконка' />
  </div>
}