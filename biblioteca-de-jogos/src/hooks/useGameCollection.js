import { useState } from "react"

export default function useGameCollection() {
    const [games, setGames] = useState(() => {
        const storesGames = localStorage.getItem("obc-game-lib");
        if (!storesGames) return []
        return JSON.parse(storesGames);
    });

    const addGame = ({ title, cover }) => {
        const id = Math.floor(Math.random() * 1000000);
        const game = { id, title, cover };
        setGames(state => {
            const newState = [...state, game];
            localStorage.setItem("obc-game-lib", JSON.stringify(newState));
            return newState;
        })
    }

    const removeGame = (id) => {
        setGames(state => {
            const newState = state.filter(game => game.id !== id);
            localStorage.setItem("obc-game-lib", JSON.stringify(newState));
            return newState;
        })
    }
    return [ games, addGame, removeGame]
}