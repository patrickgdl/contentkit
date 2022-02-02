import LoginForm from '@pwp/LoginForm';

const NotAuthenticated = () => {
  return (
    <div className="max-w-2xl w-96">
      <p>
        Obrigado pelo seu interesse em nosso aplicativo. Infelizmente, tivemos
        que restringir o acesso às partes de computação intensiva.
      </p>
      <LoginForm />
    </div>
  );
};

export default NotAuthenticated;
