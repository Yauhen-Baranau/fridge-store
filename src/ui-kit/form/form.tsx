'use client';

import composeClassName from '@src/helpers/compose-class-name';
import './form.scss';
import { useRef, useState } from 'react';
import Button from '../button/button';
import useClickOutsideListener from '@src/hooks/use-click-outside-listener';
import { Validator } from './validators';

export interface FormFieldConfig<T = string> {
  type: 'text' | 'tel' | 'email' | 'textarea';
  name: string,
  placeholder?: string,
  validators?: Array<Validator<T>>,
}

interface FormConfig {
  fieldConfigs: Array<FormFieldConfig>;
}

interface FormValue {
  [key: string]: unknown;
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
  const [activeInputName, setActiveInputName] = useState('');
  const resetActiveInput = () => setActiveInputName('');

  const formRef = useRef<HTMLFormElement>(null);
  useClickOutsideListener(formRef, resetActiveInput);

  const getInitialFormValue = (fieldConfigs: Array<FormFieldConfig>): FormValue => {
    const initialFormValue: FormValue = {};
    fieldConfigs.forEach(fieldConfig => {
      const autofilledValue = (formRef?.current?.querySelector(`[name="${fieldConfig.name}"]`) as HTMLInputElement)?.value;
      initialFormValue[fieldConfig.name] = autofilledValue || null;
    });
    return initialFormValue;
  };
  const [formValue, setFormValue] = useState<FormValue>(getInitialFormValue(config.fieldConfigs));
  const setFormValueField = (name: string, newValue: unknown) => setFormValue({ ...formValue, [name]: newValue });

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const getValidationError = <T,>(fieldConfig: FormFieldConfig<T>) => {
    const fieldValue = formValue[fieldConfig.name] as T;
    const validationErrors = (fieldConfig.validators ?? [])
      .map(validator => validator(fieldValue))
      .filter(Boolean);
    return validationErrors[0];
  };
  const validateField = (fieldConfig: FormFieldConfig) => !getValidationError(fieldConfig);
  const validateForm = () => config.fieldConfigs.every(fieldConfig => validateField(fieldConfig));

  return <form
    ref={formRef}
    className={composeClassName('form', customClass)}
    onClick={resetActiveInput}
  >
    {preFieldsContent}
    {config.fieldConfigs.map((fieldConfig, index) => {
      return <div
        key={index}
        className={composeClassName(
          'field-wrapper',
          activeInputName === fieldConfig.name && 'active-field',
          !!formValue[fieldConfig.name] && 'non-empty-field',
          submitAttempted && !validateField(fieldConfig) && 'invalid-field'
        )}
        onClick={e => {
          e.stopPropagation();
          setActiveInputName(fieldConfig.name);
        }}
      >
        <div className='input-wrapper'>
          <input
            className='input'
            type={fieldConfig.type}
            name={fieldConfig.name}
            onInput={e => setFormValueField(fieldConfig.name, (e.target as HTMLInputElement).value)}
          />
        </div>
        {fieldConfig.placeholder && <span className='placeholder'>{fieldConfig.placeholder}</span>}
        {(() => {
          if (!submitAttempted) {
            return <></>;
          }
          const validationError = getValidationError(fieldConfig);
          return validationError && <span className={'error-message'}>{validationError}</span>
        })()}
      </div>
    })}
    {preSubmitButtonContent}
    <Button text={submitButtonText} onClick={() => {
      setSubmitAttempted(true);
      validateForm() && submitCallback(formValue);
    }} />
  </form>;
}