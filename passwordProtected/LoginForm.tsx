import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@comps/Button/Button';

import { Form, FormElement, InputText, FormError } from '@theme';

import cn from '@utils/classnames';

import { usePasswordProtected } from './PasswordProtectedProvider';

const LoginForm = ({ className = '' }: { className?: string }) => {
  const [error, setError] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const form = useForm<{ password: string }>({
    defaultValues: { password: '' },
  });
  const { doLogin } = usePasswordProtected();

  return (
    <Form
      className={cn(className, 'flex flex-col items-center justify-center')}
      onSubmit={form.handleSubmit(({ password }) => {
        setLoading(true);
        doLogin(password)
          .then(() => {})
          .catch((e) => setError(e))
          .finally(() => setLoading(false));
      })}
    >
      <FormElement
        name="password"
        label="Senha"
        Input={InputText}
        form={form}
        type="password"
      />
      {error !== '' && <FormError>{error}</FormError>}

      <Button
        type="submit"
        className="bg-sky-400 hover:bg-sky-300 focus:ring-sky-500 border-sky-400"
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
