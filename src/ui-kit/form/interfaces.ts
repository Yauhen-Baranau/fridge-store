import { Validator } from "./validators";

export interface FormFieldConfig<T = string> {
  type: "text" | "tel" | "email" | "textarea";
  name: string;
  defaultValue?: T;
  placeholder?: string;
  validators?: Array<Validator<T>>;
}

export interface FormConfig {
  fieldConfigs: Array<FormFieldConfig>;
}

export interface FormValue {
  [key: string]: unknown;
}
