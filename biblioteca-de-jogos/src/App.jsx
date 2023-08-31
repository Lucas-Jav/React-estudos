import Game from "./components/Game";
import NewGameForm from "./components/NewgameForm";
import useGameCollection from "./hooks/useGameCollection";

export default function App() {
  const [games, addGame, removeGame] = useGameCollection()
  

  return (
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      <NewGameForm 
        addGame={addGame}/>
      <div className="games">
        {games.map((game) => (
          <Game 
            key={game.id} 
            cover={game.cover} 
            title={game.title}
            onRemove={() => removeGame(game.id)}/>
        ))}
      </div>
    </div>
  )
}