import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { Label, Text, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Label>
      <Text>Input search query</Text>
      <Input type="text" onChange={changeFieldFilter} name="filter" />
    </Label>
  );
};
