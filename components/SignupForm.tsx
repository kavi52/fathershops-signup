"use client";
import React, { useEffect, useState } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, IconButton, InputAdornment, Snackbar, TextField, Typography } from '@mui/material';
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
}: SignupFormProps) => {
  const { register, handleSubmit, formState: { errors }, control, reset } = useForm<FormData>();
  const [open, setOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    setOpen(true)
    reset()
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
      <Box
        position={'relative'}
        sx={{
          width: ['200px', '200px', '200px', '200px', '246px'],
          height: ['32px', '32px', '32px', '32px', '40px']
        }}
      >
        <Image
          src={'/fathershop-white-logo.png'}
          alt="FatherShops logo"
          fill
        />
      </Box>

      <Typography sx={{
        fontSize: ['22px', '22px', '22px', '22px', '28px'],
        fontWeight: '500',
        marginTop: [2, 2, 2, 2, 4],
        marginBottom: [1, 1, 1, 1, 2]
      }}>{title}</Typography>

      <form
        className='max-w-xs'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label={fullNameLabel}
          margin="dense"
          variant='outlined'
          size='small'
          fullWidth
          sx={{
            "& fieldset": {
              border: 'none',
            },
          }}
          InputLabelProps={{
            style: {
              color: '#11111166',
            }
          }}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#D9D9D94D',
              borderRadius: '8px',
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
          margin="dense"
          variant='outlined'
          size='small'
          fullWidth
          sx={{
            "& fieldset": {
              border: 'none',
            },
          }}
          InputLabelProps={{
            style: {
              color: '#11111166',
            }
          }}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#D9D9D94D',
              borderRadius: '8px',
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
          defaultCountry="US"
          className='bg-[#D9D9D94D] p-2 pl-4 mt-3 mb-1 rounded-md'
        />
        <TextField
          label={passwordLabel}
          type={showPassword ? 'text' : 'password'}
          margin="dense"
          variant='outlined'
          size='small'
          sx={{
            "& fieldset": {
              border: 'none',
            },
          }}
          fullWidth
          InputLabelProps={{
            style: {
              color: '#11111166',
              borderWidth: '0px',
            }
          }}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: '#D9D9D94D',
              borderRadius: '8px',
            },
            endAdornment: (
              <InputAdornment position="end">
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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Registered Successfully"
      />
    </div>
  );
};

export default SignupForm;
