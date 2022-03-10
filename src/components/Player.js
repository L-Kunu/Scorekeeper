import styled from "styled-components";

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <Wrapper>
      <span className='Player__name'>{name}</span>
      <button onClick={onDecrement}>-</button>
      <span className='Player__score'>{score}</span>
      <button onClick={onIncrement}>+</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: right;
`;

const Name = styled.span`
  margine-right: auto;
`;

const Score = styled.span`
  margin: 0 12px;
`;
