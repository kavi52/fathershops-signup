"use client";
import React, { useEffect, useState } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Image from 'next/image';
import Link from 'next/link';
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import 'react-phone-number-input/style.css'

interface FormData {
  fullName: string;
  mobileNumber: string;
  country: string;
  email: string;
  password: string;
}

interface SignupFormProps {
  title: string,
  fullNameLabel: string,
  fullNameRequired: string,
  emailLabel: string,
  passwordLabel: string,
  alreadyHaveAccountMessage: string,
  loginLabel: string,
  submitText: string,
  emailRequired: string,
  emailPattern: string,
  passwordRequired: string,
  passwordPattern: string,
  mobileNumberRequired: string
}

const SignupForm = ({
  title,
  fullNameLabel,
  emailLabel,
  passwordLabel,
  alreadyHaveAccountMessage,
  loginLabel,
  submitText,
  fullNameRequired,
  emailRequired,
  emailPattern,
  passwordPattern,
  passwordRequired,
  mobileNumberRequired
}: SignupFormProps) => {
  const { register, handleSubmit, formState: { errors }, control } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      className="flex flex-1 flex-col items-center justify-center"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >

      <Image
        src={'/fathershop-white-logo.png'}
        alt="FatherShops logo"
        width={246}
        height={40}
      />

      <Typography sx={{
        fontSize: '28px',
        fontWeight: '500',
        marginTop: 4,
        marginBottom: 2
      }}>{title}</Typography>

      <form
        className='max-w-xs'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label={fullNameLabel}
          margin="normal"
          variant='filled'
          size='small'
          fullWidth
          InputLabelProps={{
            style: {
              color: '#11111166',
              borderWidth: '0px',
              paddingLeft: '5px',
              paddingRight: '5px'
            }
          }}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#D9D9D94D',
              borderRadius: '8px',
              borderWidth: '0px',
              paddingLeft: '5px',
              paddingRight: '5px'
            },
          }}
          inputProps={{
            maxLength: 100,
          }}
          {...register('fullName', { required: fullNameRequired })}
          error={!!errors.fullName}
          helperText={errors?.fullName?.message?.toString()}
        />
        <TextField
          label={emailLabel}
          margin="normal"
          variant='filled'
          size='small'
          fullWidth
          InputLabelProps={{
            style: {
              color: '#11111166',
              borderWidth: '0px',
              paddingLeft: '5px',
              paddingRight: '5px'
            }
          }}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#D9D9D94D',
              borderRadius: '8px',
              borderWidth: '0px',
              paddingLeft: '5px',
              paddingRight: '5px'
            },
          }}
          inputProps={{
            maxLength: 100,
          }}
          {...register('email', {
            required: emailRequired,
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: emailPattern
            }
          })}
          error={!!errors.email}
          helperText={errors?.email?.message?.toString()}
        />

        <PhoneInputWithCountry
          name="mobileNumber"
          control={control}
          international
          countryCallingCodeEditable={false}
          rules={{ required: mobileNumberRequired }}
          defaultCountry="US"
          className='bg-[#D9D9D94D] p-4 mt-4 mb-2 rounded-md'
          />
        <TextField
          label={passwordLabel}
          type={showPassword ? 'text' : 'password'}
          margin="normal"
          variant='filled'
          size='small'
          fullWidth
          InputLabelProps={{
            style: {
              color: '#11111166',
              borderWidth: '0px',
              paddingLeft: '5px',
              paddingRight: '5px'
            }
          }}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#D9D9D94D',
              borderRadius: '8px',
              borderWidth: '0px',
              paddingLeft: '5px',
              paddingRight: '5px'
            },
            endAdornment: (
              <InputAdornment position="end" sx={{ marginRight: 2 }}>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                  sx={{
                    color: '#11111166',
                  }}
                >
                  {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputProps={{
            maxLength: 100,
            autoComplete: 'new-password',
          }}
          {...register('password', {
            required: passwordRequired,
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              message: passwordPattern
            },

          })}
          error={!!errors.password}
          helperText={errors?.password?.message?.toString()}
        />

        <Box mt={2}>
          <Button
            type="submit"
            fullWidth
            variant='contained'
            disableElevation
            style={{
              backgroundColor: '#000000',
              borderRadius: '8px',
              height: '44px',
              textTransform: 'capitalize',
            }}
          >
            {submitText}
          </Button>
        </Box>
      </form>
      <Typography
        align="center"
        sx={{
          fontSize: '14px',
          color: '#333333',
          marginTop: 3
        }}>
        {alreadyHaveAccountMessage} <Link href={'#'}><b>{loginLabel}</b></Link>
      </Typography>
    </div>
  );
};

export default SignupForm;
