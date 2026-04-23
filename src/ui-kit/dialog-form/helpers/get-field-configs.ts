import { FormFieldConfig } from "@ui-kit/form/interfaces";
import { Validators } from "@ui-kit/form/validators";

export const getFieldConfigs = (type: string) => {
  const fieldConfigs: Array<FormFieldConfig> = [
    {
      type: "text",
      name: "name",
      placeholder: "Имя",
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[а-яА-Я]+$/),
      ],
    },
  ];

  switch (type) {
    case "call-me-back":
      fieldConfigs.push({
        type: "tel",
        name: "phone",
        placeholder: "Телефон",
        validators: [
          Validators.required,
          Validators.pattern(/^\+375\s?\(?\d{2}\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/)
        ],
      });
      break;
    case "i-have-a-question":
      fieldConfigs.push(
        {
          type: "email",
          name: "email",
          placeholder: "E-mail",
          validators: [
            Validators.required,
            Validators.pattern(/^\w+([\.\-]\w+)*@[a-zA-Z]+.[a-zA-Z]{2,3}$/),
          ],
        },
        {
          type: "textarea",
          name: "question",
          defaultValue: "",
          placeholder: "Ваш вопрос",
          validators: [Validators.maxLength(500)],
        },
      );
      break;
    default:
      break;
  }

  return fieldConfigs;
};
