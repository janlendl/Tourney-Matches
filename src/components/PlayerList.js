import matchData from '../data/matchData';
import playerData from '../data/playerData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers'
import Player from './Player';


function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <section className='PlayerList'>
      <h1>Current participating players</h1>
      {/* Players will be shown here */}
      <Player />
    </section>
  )
}

export default PlayerList;