import { MainButton } from './Button.styled';

export const Button = ({ togleVisibility, isVisible }) => {
  return (
    <MainButton type="button" onClick={togleVisibility}>
      {isVisible ? 'Hide films' : 'Show films'}
    </MainButton>
  );
};
