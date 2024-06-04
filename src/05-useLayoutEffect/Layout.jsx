import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Información de Pokémon</h1>
          <hr />
        {
            isLoading ? 
            <LoadingMessage /> : 
            <PokemonCard 
                id={ counter} 
                name={ data.name } 
                sprites={ [
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny,
                ] }
            />
        }

          <button
            onClick={() => (counter > 1 ? decrement() : null)}
            className="btn btn-primary mt-2 w-25"
          >
            Anterior
          </button> &nbsp;
          <button onClick={() => increment()} className="btn btn-success mt-2 w-25">
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};
