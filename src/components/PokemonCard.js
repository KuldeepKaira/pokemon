import React from "react";
import "./pokemonCard.css";

const PokemonCard = (props) => {
  const test = () => {
    console.log(props.data);
  };

  if (!props.data) return "";

  return (
    <div className="pokeContainer">
      <div className="leftBox">
        <p className="pokeName">
          <span>Name:</span>
          {` ${props.data.name.toUpperCase()}`}
        </p>
        <p>
          <span>Height:</span>
          {`  ${props.data.height}`}
        </p>
        <p>
          <span>Base Experience:</span>
          {`  ${props.data.base_experience}`}
        </p>
        <>
          <span>Abilities: </span>
          <ul className="abilityList">
            {props.data.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </>
        <>
          <span>Stats:</span>
          <ul>
            {props.data.stats.map((stat) => (
              <li
                key={stat.stat.name}
              >{`${stat.stat.name}: ${stat.base_stat}`}</li>
            ))}
          </ul>
        </>
      </div>
      <div className="rightBox">
        <img
          className="pokeImg"
          src={`${props.data.sprites.front_default}`}
        ></img>
        <img
          className="pokeImg"
          src={`${props.data.sprites.back_default}`}
        ></img>
        <img
          className="pokeImg"
          src={`${props.data.sprites.back_shiny_female}`}
        ></img>
        <img
          className="pokeImg"
          src={`${props.data.sprites.front_shiny_female}`}
        ></img>
      </div>
    </div>
  );
};

export default PokemonCard;
