import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./Field.module.css";

type Common = {
  label: string;
  name: string;
  id?: string;
};

type InputField = Common & {
  as?: "input";
  type?: string;
  placeholder?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "name" | "type" | "placeholder">;

type SelectField = Common & {
  as: "select";
  options: { value: string; label: string }[];
  placeholder?: string;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "id" | "name">;

type TextareaField = Common & {
  as: "textarea";
  placeholder?: string;
  rows?: number;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "name" | "placeholder" | "rows">;

export type FieldProps = InputField | SelectField | TextareaField;

export function Field(props: FieldProps) {
  const id = props.id ?? props.name;

  return (
    <label className={styles.field} htmlFor={id}>
      <span className="caption">{props.label}</span>
      {renderControl(props, id)}
    </label>
  );
}

function renderControl(props: FieldProps, id: string): ReactNode {
  if (props.as === "select") {
    return (
      <select id={id} name={props.name} className={styles.control} defaultValue={props.defaultValue} value={props.value} onChange={props.onChange} required={props.required} disabled={props.disabled}>
        {props.placeholder ? (
          <option value="" disabled>
            {props.placeholder}
          </option>
        ) : null}
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  if (props.as === "textarea") {
    return (
      <textarea
        id={id}
        name={props.name}
        rows={props.rows ?? 4}
        placeholder={props.placeholder}
        className={`${styles.control} ${styles.textarea}`}
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
      />
    );
  }

  return (
    <input
      id={id}
      name={props.name}
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      className={styles.control}
      defaultValue={props.defaultValue}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      disabled={props.disabled}
      autoComplete={props.autoComplete}
    />
  );
}
