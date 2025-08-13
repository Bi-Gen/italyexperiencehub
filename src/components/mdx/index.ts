import AlertButton from "./AlertButton";

// esportazione NOMINATA: mdxComponents
export const mdxComponents = {
  AlertButton,
  // alias: se nei post scrivi <Button>, usa comunque AlertButton
  Button: AlertButton,
} as const;

export type MDXComponents = typeof mdxComponents;
