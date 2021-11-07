import Player from './Player';


function PlayerList(props) {
  const onePlayer = props.parsedPlayerData[0];

  return (
    <section className='PlayerList'>
      <h1>Current participating players</h1>
      {/* Players will be shown here */}
      <Player gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins} />
    </section>
  )
}

export default PlayerList;