import React from 'react';

export const PokemonCard = ({ id, name, sprite = [] }) => {
    return (
        <section style={{ height: 150 }}>
            <h1>{name}</h1>
            <div>
                {
                    sprite.map(sprite =>
                        <img key={sprite} src={sprite} alt={name}
                        />)
                }
            </div>
        </section >
    )
};
