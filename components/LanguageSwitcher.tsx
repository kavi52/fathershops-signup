"use client";
import { useLocale } from 'next-intl';
import React from 'react'
import { InputAdornment, MenuItem, Select } from '@mui/material';
import LanguageIcon from '../public/language.svg';
import CustomDropdownIcon from '../public/dropdown.svg';
import Image from 'next/image';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { usePathname, useRouter } from '@/navigation';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const locales = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' }
  ] as const;

  const switchLocale = (e: { target: { value: any; }; }) => {
    router.replace(pathname, { locale: e.target.value });
  };

  return (
    <div className='flex items-center'>
      <Image src={LanguageIcon} alt="Language Icon" />
      <Select
        onChange={switchLocale}
        defaultValue={locale}
        variant='standard'
        disableUnderline
        sx={{
          fontSize: '14px',
          marginLeft: '10px'
        }}
        IconComponent={(props) => (
          <ExpandMoreIcon
            {...props}
            style={{
              color: '#111111'
            }}
          />
        )}
      >
        {locales.map((locale) => (
          <MenuItem key={locale.value} value={locale.value}>
            {locale.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default LanguageSwitcher