import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

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
`;

const Title = styled.h1`
  font-weight: 100;
  color: white;
  text-align: center;
  padding-bottom: 10px;
`;

const Line = styled.div`
  height: 0;
  width: 180px;
  border: 0.5px solid white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  gap: 20px;
`;

const Input = styled.input<{ $error?: boolean }>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 14px;

  border: ${(props) =>
    props.$error ? "1px solid rgb(191, 22, 80)" : "1px solid white"};
  border-left: ${(props) => props.$error && "10px solid rgb(236, 89, 144)"};
  background-color: ${(props) => props.$error && "rgb(251, 236, 242)"};

  &[type="submit"] {
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
  }

  &[type="submit"]:hover {
    background: #bf1650;
  }

  &[type="radio"] {
    margin: 0;
    width: fit-content;
  }
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

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  console.log("errors:", errors);

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
          {...register("firstName", {
            required: true,
            validate: (value) => value.length > 1,
          })}
        />
        <Input
          type="text"
          $error={!!errors?.lastName}
          placeholder="Last name"
          {...register("lastName", {
            required: true,
            validate: (value) => value.length > 1,
          })}
        />
        <Input
          type="text"
          $error={!!errors?.email}
          placeholder="Email"
          {...register("email", {
            required: true,
            validate: (value: string) => /^\S+@\S+$/i.test(value),
          })}
        />
        <Input
          type="tel"
          $error={!!errors?.mobile}
          placeholder="Mobile number"
          {...register("mobile", {
            required: true,
            validate: (value) =>
              typeof value === "number" && value.toString().length === 11,
          })}
        />
        <Select {...register("title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </Select>
        <DeveloperWrap>
          <label>
            Yes
            <Input
              {...register("developer", { required: true })}
              type="radio"
              value="Yes"
            />
          </label>
          <label>
            No
            <Input
              {...register("developer", { required: true })}
              type="radio"
              value="No"
            />
          </label>
        </DeveloperWrap>
        <Input type="submit" value="SUBMIT" />
      </Form>
    </FormWrap>
  );
};
