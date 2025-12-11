'use client';

import './accordion.scss';
import { useState } from 'react';
import composeClassName from '@src/helpers/compose-class-name';
import Button from '../button/button';

export default function Accordion({
  toggleAreaContent,
  content,
  buttonStyle = 'arrow',
  toggleAreaCustomClass,
  contentWrapperCustomClass,
}: {
  toggleAreaContent: React.ReactNode,
  content: React.ReactNode,
  buttonStyle?: 'arrow' | 'plus',
  toggleAreaCustomClass?: string,
  contentWrapperCustomClass?: string,
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const toggleRevealed = () => setIsRevealed(!isRevealed);

  const getToggleButton = (buttonStyle: string) => {
    switch (buttonStyle) {
      case 'arrow':
        return <Button
          customClass={'accordion-toggle-arrow-button'}
          icon={{ path: '/icons/thick-arrow-up.svg', width: 24, height: 24 }}
        />;
      case 'plus':
        return <></>;
      default:
        return <></>;
    }
  }

  return <div className={'outer-accordion-wrapper'}>
    <div
      className={composeClassName(
        'accordion-toggle-area',
        isRevealed && 'revealed',
        toggleAreaCustomClass
      )}
      onClick={toggleRevealed}
    >
      {toggleAreaContent}
      {getToggleButton(buttonStyle)}
    </div>
    {isRevealed && <div className={composeClassName( 'content-wrapper', contentWrapperCustomClass,)}>{content}</div>}
  </div>
}