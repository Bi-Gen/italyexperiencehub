import AlertButton from "./AlertButton";
import Image from "next/image"; // ✅ import

// esportazione NOMINATA: mdxComponents
export const mdxComponents = {
  AlertButton,
  Button: AlertButton,
  Image, // ✅ aggiunto per gestire <Image /> nei file MDX
} as const;

export type MDXComponents = typeof mdxComponents;
