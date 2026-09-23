import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";
import { getPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Balance Pay — Войти",
};

export default function LoginPage() {
  return <AuthPage mode="signin" copy={{ en: getPage("auth", "en"), ru: getPage("auth", "ru") }} />;
}
