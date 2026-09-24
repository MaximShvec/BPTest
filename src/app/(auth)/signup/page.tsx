import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";
import { getNav, getPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Balance Pay — Регистрация",
};

export default function SignupPage() {
  return (
    <AuthPage
      mode="signup"
      copy={{ en: getPage("auth", "en"), ru: getPage("auth", "ru") }}
      languages={getNav().header.languages}
    />
  );
}
