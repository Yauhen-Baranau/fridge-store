'use client';

import composeClassName from '@src/helpers/compose-class-name';
import './form.scss';
import { useRef, useState } from 'react';
import Button from '../button/button';
import useClickOutsideListener from '@src/hooks/use-click-outside-listener';

interface FormFieldConfig {
  type: 'text' | 'textarea';
  name: string,
  placeholder?: string,
  validatorRegExp?: RegExp;
  validationErrorText?: string;
}

interface FormValue {
  [key: string]: unknown;
}

interface FormConfig {
  fieldConfigs: Array<FormFieldConfig>;
}

export default function Form({
  config,
  preFieldsContent,
  submitButtonText,
  submitCallback,
  preSubmitButtonContent,
  customClass
}: {
  config: FormConfig,
  preFieldsContent?: React.ReactNode,
  submitButtonText: string,
  submitCallback: (formValue: FormValue) => void,
  preSubmitButtonContent?: React.ReactNode,
  customClass?: string
}) {
  // TO DO: placeholder overlaps input value
  const [activeInputName, setActiveInputName] = useState('');
  const resetActiveInput = () => setActiveInputName('');

  const [formValue, setFormValue] = useState<FormValue>(Object.fromEntries(config.fieldConfigs.map(fieldConfig => [fieldConfig.name, null])));
  const setFormValueField = (name: string, newValue: unknown) => setFormValue({ ...formValue, [name]: newValue });

  const formRef = useRef<HTMLFormElement>(null);
  useClickOutsideListener(formRef, resetActiveInput);

  return <form
    ref={formRef}
    className={composeClassName('form', customClass)}
    onClick={resetActiveInput}
  >
    {preFieldsContent}
    {config.fieldConfigs.map((fieldConfig, index) => {
      return <div
        key={index}
        className={composeClassName('input-wrapper', activeInputName === fieldConfig.name && 'active-input')}
        onClick={e => {
          e.stopPropagation();
          setActiveInputName(fieldConfig.name);
        }}
      >
        <input
          className='input'
          type={fieldConfig.type}
          name={fieldConfig.name}
          onInput={e => setFormValueField(fieldConfig.name, (e.target as HTMLInputElement).value)}
        />
        {fieldConfig.placeholder && <span className='placeholder'>{fieldConfig.placeholder}</span>}
      </div>
    })}
    {preSubmitButtonContent}
    <Button text={submitButtonText} onClick={() => submitCallback(formValue)} />
  </form>;
}