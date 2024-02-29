import Image from "next/image";
import SignupForm from "../../components/SignupForm";
import { Typography } from "@mui/material";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BoxGrid from "@/components/SignupGrid";

export default function Home() {
  const t = useTranslations('SignUp');

  return (
    <div className="flex min-h-screen">
      <div
        className="flex flex-1 flex-col min-h-screen p-6 pb-10"
      >
        <LanguageSwitcher />
        <SignupForm 
          title={t('title')}
          alreadyHaveAccountMessage={t('alreadyHaveAccount')}
          loginLabel={t('login')}
          emailLabel={t('email')}
          fullNameLabel={t('fullName')}
          passwordLabel={t('password')}
          emailPattern={t('emailPattern')}
          emailRequired={t('emailRequired')}
          fullNameRequired={t('fullNameRequired')}
          passwordPattern={t('passwordPattern')}
          passwordRequired={t('passwordRequired')}
          submitText={t('createAccount')}
          mobileNumberRequired={t('mobileNumberRequired')}
        />
        <Typography
          align="center"
          sx={{
            fontSize: '14px',
            color: '#333333',
          }}
        >
          {t('signupAgree')} <Link href={'#'}><b>{t('termsConditions')}</b></Link>
        </Typography>
      </div>
      <div
        className="flex flex-1 flex-col min-h-screen px-16 pt-20 bg-[#111111] px-10 pb-0 hidden md:flex h-screen"
      >
        <Typography
          align="left"
          sx={{
            fontSize: ['20px', '20px', '20px', '20px','24px'],
            fontWeight: '600',
            color: '#ffffff'
          }}
        >
          {t('subTitle')}
        </Typography>
        <Typography
          align="left"
          sx={{
            fontSize: ['16px', '16px','16px', '16px', '20px'],
            fontWeight: '300',
            color: '#F6F6F6',
            marginY: 1
          }}
        >
          {t('description')}
        </Typography>

        <MoreHorizIcon
          style={{
            color: '#333333',
            fontSize: '3rem'
          }}
        />
        <BoxGrid />
      </div>
    </div>

  );
}
