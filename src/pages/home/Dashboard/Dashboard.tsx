import { useEffect } from 'react';
import { fetchAPI } from '../../../services/api';
import Accordion from '../../../components/Accordion';
import PlayerComponent from '../../../components/Player';
import { Player, Team, Game } from '../../../types';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { updateInitialState } from '../../../store/sportsSlice';

const URL = 'https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e';

function Dashboard() {
  const dispatch = useAppDispatch();
  const sportsData = useAppSelector((state) => state.sports);

  const getData = async () => {
    const response: Array<Game> = await fetchAPI({
      url: URL,
    });
    dispatch(updateInitialState(response));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log('sportsData', sportsData);

  return (
    <div className="p-2">
      <h2 className="font-semibold text-lg mb-2">Dashboard</h2>
      {sportsData.map(({ game, teams }: Game, gameIndex: number) => (
        <Accordion defaultOpen title={game} key={game} classes="mb-4">
          {teams.map(({ team_name, players }: Team, teamIndex: number) => (
            <Accordion
              defaultOpen
              title={`${team_name} (${players.length})`}
              key={`${game}_${team_name}`}
              classes="mb-4"
            >
              {players.map(({ name, age }: Player, index: number) => (
                <PlayerComponent
                  name={name}
                  age={age}
                  team_name={team_name}
                  game={game}
                  key={`${game}_${team_name}_${index}`}
                  playerIndex={index}
                />
              ))}
            </Accordion>
          ))}
        </Accordion>
      ))}
    </div>
  );
}

export default Dashboard;
