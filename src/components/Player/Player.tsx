import TextField from '../TextField';
import Button from '../Button';
import { useAppDispatch } from '../../hooks/hooks';
import {
  updatePlayerDetails,
  addNewPlayerDetails,
} from '../../store/sportsSlice';
import { Player } from '../../types';

const Player = ({ name, age, playerIndex, team_name, game }: Player) => {
  const dispatch = useAppDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updatePlayerDetails({
        name: e.target.value,
        playerIndex,
        age,
        team_name,
        game,
      })
    );
  };
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updatePlayerDetails({
        name,
        playerIndex,
        age: e.target.value,
        team_name,
        game,
      })
    );
  };
  const handleAddNewPlayer = () => {
    if (playerIndex !== 0) return;
    dispatch(
      addNewPlayerDetails({
        name,
        playerIndex,
        age,
        team_name,
        game,
      })
    );
  };

  return (
    <div className="flex gap-4">
      <TextField value={name} onChange={handleNameChange} />
      <TextField value={age} onChange={handleAgeChange} small />
      <Button onClick={handleAddNewPlayer}>
        {playerIndex === 0 ? 'Add' : 'Save'}
      </Button>
    </div>
  );
};

export default Player;
