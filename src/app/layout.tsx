import "./globals.css";

import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { WhatsAppButton } from "@/components/whatsapp-button";

import theme from "../utils/theme";

export const metadata: Metadata = {
  title: "Escola Bibotalk de Teologia",
  description:
    "Descubra a Escola Bibotalk de Teologia: cursos online de alta qualidade sobre estudos bíblicos e teológicos, com aulas gravadas, materiais complementares e uma comunidade ativa. Aprenda de forma acessível e plural com o teólogo Rodrigo Bibo. Comece hoje!",
  other: {
    "google-site-verification": "ZBUfuQm0u12Is2Mq0wNUvUrlV0S0vmoEWxrdNKWs-Uo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-KH7KSW2F" />

      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            {children}
            <WhatsAppButton phoneNumber="5547988958800" />
          </ThemeProvider>
        </AppRouterCacheProvider>

        <Script
          type="text/javascript"
          async
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/2939d84d-d325-450c-8bcf-ff0f41f6fa70-loader.js"
        />
      </body>
    </html>
  );
}
