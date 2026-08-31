import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Pack Stories Harmonie | Luciana Camelo", description: "Mais de 800 adesivos exclusivos para Stories de profissionais da odontologia.", other: { "codex-preview": "development" } };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
