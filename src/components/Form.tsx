import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

//과제
//1. 폼에  파일 인풋 Controller로 추가 (accept=".txt")
//https://react-hook-form.com/advanced-usage?#ControlledmixedwithUncontrolledComponents
//2. txt 파일에 작성된 내용을 미리보기로 보여주기(해당 내용은 html이 아닌 text로 처리)
//3. 기존 validation 대신 joi vs yup vs zod 중 하나를 사용해서 resolver 추가
//https://react-hook-form.com/get-started#SchemaValidation

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
  title: string;
  developer: string;
};

const FormWrap = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  background: #081229;
  width: 100%;
  max-width: 600px;
`;

const TitleWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

const Title = styled.h1`
  font-weight: 100;
  color: white;
  text-align: center;
  padding-bottom: 10px;
  flex: 0.5;
`;

const Line = styled.div`
  height: 0;
  border: 0.5px solid white;
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  gap: 10px;
`;

const Input = styled.input.attrs<{ $error?: boolean }>((props) => {
  return {
    className: props.$error ? 'is-error' : undefined,
  };
})`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid white;

  &[type='submit'] {
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
  }

  &[type='submit']:hover {
    background: #bf1650;
    cursor: pointer;
  }

  &[type='radio'] {
    margin: 0;
    width: fit-content;
  }

  &.is-error {
    border: 1px solid rgb(191, 22, 80);
    border-left: 10px solid rgb(236, 89, 144);
    background-color: rgb(251, 236, 242);
  }
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  margin: 0;
  color: rgb(236, 89, 144);
`;

const DeveloperWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  > label {
    display: flex;
    gap: 5px;
    align-items: center;
    color: white;
  }
`;

const Select = styled.select`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  font-size: 14px;
`;

const schema = z.object({
  firstName: z.string().min(1, { message: 'Required at least 1 character' }),
  lastName: z.string().min(1, { message: 'Required at least 1 character' }),
  email: z
    .string()
    .regex(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      { message: 'only email format allowed' }
    ),
  mobile: z.custom<number>((val) => String(val).length === 11),
});

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err, 'err');
    }
  };

  const radioRegister = register('developer', { required: true });

  console.log(errors);

  return (
    <FormWrap>
      <TitleWrap>
        <Line />
        <Title>Example</Title>
        <Line />
      </TitleWrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          $error={!!errors?.firstName}
          placeholder="First name"
          {...register('firstName', {
            required: true,
          })}
        />
        <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
        <Input
          type="text"
          $error={!!errors?.lastName}
          placeholder="Last name"
          {...register('lastName', {
            required: true,
          })}
        />
        <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
        <Input
          type="text"
          $error={!!errors?.email}
          placeholder="Email"
          {...register('email', {
            required: true,
          })}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <Input
          type="tel"
          inputMode="numeric"
          $error={!!errors?.mobile}
          placeholder="Mobile number"
          {...register('mobile', {
            required: true,
          })}
        />
        <ErrorMessage>{errors.mobile?.message}</ErrorMessage>
        <Select {...register('title', { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </Select>
        <DeveloperWrap>
          <label htmlFor="yes">
            Yes
            <Input
              id="yes"
              {...radioRegister}
              type="radio"
              value="Yes"
            />
          </label>
          <label htmlFor="no">
            No
            <Input
              id="no"
              {...radioRegister}
              type="radio"
              value="No"
            />
          </label>
        </DeveloperWrap>
        <Input
          type="submit"
          value="SUBMIT"
        />
      </Form>
    </FormWrap>
  );
};
