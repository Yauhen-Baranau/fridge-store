// if validation fails, the validator will return the error message
// otherwise, the validator will return an empty string
// inspired by Angular's reactive forms
export type Validator<T> = (v: T) => string;

const validatorFactory = <T>(
  validatorFunction: (v: T) => boolean,
  errorMessage: string
): Validator<T> => {
  return (v: T) => validatorFunction(v) ? '' : errorMessage;
}

export const Validators = {
  required: validatorFactory<unknown>(
    v => !!v,
    'Это поле необходимо заполнить'
  ),
  minLength: (length: number) => validatorFactory<string>(
    (value: string) => value?.length >= length,
    'Количество символов меньше допустимого'
  ),
  maxLength: (length: number) => validatorFactory<string>(
    (value: string) => value?.length <= length,
    'Количество символов превышает допустимое'
  ),
  pattern: (pattern: RegExp) => validatorFactory<string>(
    (value: string) => pattern.test(value),
    'Проверьте корректность внесенных данных'
  ),
};