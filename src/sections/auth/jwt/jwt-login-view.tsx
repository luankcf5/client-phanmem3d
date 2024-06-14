'use client';

import * as Yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter, useSearchParams } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { useAuthContext } from 'src/auth/hooks';
import { PATH_AFTER_LOGIN } from 'src/config-global';

import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function JwtLoginView() {
  const { login } = useAuthContext();

  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState('');

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo');

  const password = useBoolean();

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Tên đăng nhập là bắt buộc !'),
    password: Yup.string().required('Mật khẩu là bắt buộc !'),
  });

  const defaultValues = {
    username: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (data.username === 'admin' && data.password === '123456') {
        await login?.(data.username, data.password);

        router.push(returnTo || PATH_AFTER_LOGIN);
      } else {
        setErrorMsg('Tên đăng nhập hoặc mật khẩu không đúng !');
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('Tên đăng nhập hoặc mật khẩu không đúng !');
    }
  });

  const renderHead = (
    <Stack spacing={2} alignItems="center" sx={{ mb: 3 }}>
      <Typography variant="h4" color="primary" fontWeight={800}>
        PHẦN MỀM MÔ PHỎNG 3D IIT
      </Typography>
      <Typography variant="h6">Đăng nhập tài khoản</Typography>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      <RHFTextField fullWidth name="username" label="Tên đăng nhập..." />

      <RHFTextField
        fullWidth
        name="password"
        label="Mật khẩu..."
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <LoadingButton
        fullWidth
        color="primary"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Đăng nhập tài khoản
      </LoadingButton>
    </Stack>
  );

  return (
    <Stack>
      {renderHead}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      {!errorMsg && (
        <Alert severity="info" sx={{ mb: 3 }}>
          Sử dụng tài khoản được cấp bởi IIT để đăng nhập. Hotline hỗ trợ{' '}
          <strong>0368 909 968</strong>.
        </Alert>
      )}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </FormProvider>
    </Stack>
  );
}
