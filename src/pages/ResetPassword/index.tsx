import React, { useCallback, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background, AnimationContainer } from './styles';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();

  const { search } = useLocation();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'Confirmação incorreta')
            .required('Confirmação obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, password_confirmation } = data;

        const [, token] = search.split('?token=');

        if (!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          password,
          password_confirmation,
          token,
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha.',
          description: 'Ocorreu um erro, tente novamente.',
        });
      }
    },
    [addToast, history, search],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação de senha"
            />

            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
