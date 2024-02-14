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

const PreviewText = styled.pre`
  font-size: 15px;
  margin: 0 0 10;
  color: white;
`;

export const Preview = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <PreviewWrap>
      <PreviewTitle>{title}</PreviewTitle>
      <PreviewText>{content}</PreviewText>
    </PreviewWrap>
  );
};
