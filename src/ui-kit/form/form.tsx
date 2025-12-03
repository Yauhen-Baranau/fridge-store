'use client';

import composeClassName from '@src/helpers/compose-class-name';
import './form.scss';
import { useState } from 'react';
import Button from '../button/button';

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
  submitButtonText: string,
  submitCallback: (formValue: FormValue) => void,
}

export default function Form({ config }: { config: FormConfig }) {
  const [activeInputName, setActiveInputName] = useState('');
  const resetActiveInput = () => setActiveInputName('');

  const [formValue, setFormValue] = useState<FormValue>(Object.fromEntries(config.fieldConfigs.map(fieldConfig => [fieldConfig.name, null])));
  const setFormValueField = (name: string, newValue: unknown) => setFormValue({ ...formValue, [name]: newValue });

  return <form className='form' onClick={resetActiveInput}>
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
    <Button text={config.submitButtonText} onClick={() => config.submitCallback(formValue)} />
  </form>;
}