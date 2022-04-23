import { LoadButton, LoadButtonWrap } from './LoadMore.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <LoadButtonWrap>
      <LoadButton onClick={onClick}>Load more</LoadButton>
    </LoadButtonWrap>
  );
};
