'use client';
import { Noto_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: notoSans.style.fontFamily,
  },
});

export default theme;