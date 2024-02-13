import { Control, useWatch } from 'react-hook-form';
import { Inputs } from './Form';
import styled from 'styled-components';

const PreviewWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  width: 100%;
`;

const PreviewTitle = styled.h2`
  color: white;
`;

const PreviewText = styled.p`
  font-size: 14px;
  margin: 0;
  color: white;
`;

export const Preview = ({ control }: { control: Control<Inputs> }) => {
  const testWatch = useWatch({
    control,
    name: 'test',
  });

  const firstNameWatch = useWatch({
    control,
    name: 'firstName',
  });

  const lastNameWatch = useWatch({
    control,
    name: 'lastName',
  });

  const emailWatch = useWatch({
    control,
    name: 'email',
  });

  const mobileWatch = useWatch({
    control,
    name: 'mobile',
  });

  return (
    <PreviewWrap>
      <PreviewTitle>Previw Text</PreviewTitle>
      <PreviewText>test:{testWatch}</PreviewText>
      <PreviewText>fistName: {firstNameWatch}</PreviewText>
      <PreviewText>lastName: {lastNameWatch}</PreviewText>
      <PreviewText>email: {emailWatch}</PreviewText>
      <PreviewText>mobile: {mobileWatch}</PreviewText>
    </PreviewWrap>
  );
};
