
import React from 'react'
import { useCounter } from '../hooks';
import { useFetch } from '../hooks/useFetch';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {

    const { decrement, increment, counter, reset } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <div>
            <h2>Información de Pokémon</h2>
            <hr />

            {isLoading ? <LoadingMessage /> : <PokemonCard 
            id={counter} 
            name={data.name} 
            sprite={[
                data.sprites.front_default,
                data.sprites.back_default,
                data.sprites.front_shiny,
                data.sprites.back_shiny
            ]}/>}

            <button
                onClick={() => counter > 1 ? decrement() : null}
                className='btn btn-primary mt-2'>Anteriores
            </button>
            <button
                onClick={() => increment()}
                className='btn btn-primary mt-2'>Siguiente
            </button>
        </div>
    )
}
