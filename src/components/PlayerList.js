import Player from './Player';


function PlayerList(props) {
  const players = props.parsedPlayerData.map((player) => {
    return (
      <Player
        key={ player.gamerTag }
        firstName={ player.firstName }
        lastName={ player.lastName }
        wins={ player.wins }
      />
    );
  });

  return (
    <section className='PlayerList'>
      <h1>Current participating players</h1>
      {/* Players will be shown here */}
      { players }
    </section>
  )
}

export default PlayerList;