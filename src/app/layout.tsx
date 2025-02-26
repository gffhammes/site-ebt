import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import Script from "next/script";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "EBT",
  description: `descrição`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            {children}
            <WhatsAppButton phoneNumber="5511999999999" />
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
