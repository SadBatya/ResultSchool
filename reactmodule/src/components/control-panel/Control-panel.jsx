import { useDispatch } from 'react-redux';
import { increaseAge, RESET_AGE, decreaseAge, changeUser } from '../actions/index';

export default function ControlPanel() {
  const dispatch = useDispatch();

  const onAgeIncrease = () => {
    dispatch(increaseAge(1));
  };

  const onAgeReset = () => {
    dispatch(RESET_AGE);
  };

  const onAgeDecreas = () => {
    dispatch(decreaseAge(-1));
  };

  const onUserChange = () => {
    dispatch(changeUser())
  }

  return (
    <div>
      <button onClick={onAgeIncrease}>Увеличить возраст</button>
      <button onClick={onAgeReset}>Сбросить возраст</button>
      <button onClick={onAgeDecreas}>Уменьшить возраст</button>
      <button onClick={onUserChange}>Сменить пользователя</button>
    </div>
  );
}
