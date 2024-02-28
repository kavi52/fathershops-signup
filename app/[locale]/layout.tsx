import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import theme from "@/theme";


export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
