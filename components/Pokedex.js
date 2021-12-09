import Image from 'next/image';

const Pokedex = ({data}) => {
  return (
    <>
      {data?.pokemon_v2_pokemon &&
        data.pokemon_v2_pokemon.map((pokemon, i) => (
            <div style={{minHeight: '100vh', padding: '40px', ...getBackgroundColor(pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name)}} key={i}>
              <div style={{width: '300px', height: '300px', position: 'relative'}}>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} layout='fill' objectFit='contain' />
              </div>
              <h3>{pokemon.name}</h3>
              <p>{pokemon.base_experience}</p>
              <p>{pokemon.height}</p>
              <p>{pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesflavortexts.reduce((acc, currentText) => {
                return `${acc} ${currentText.flavor_text}`;
              }, '') }</p>
            </div>
        ))}
    </>
  );
};

const getBackgroundColor = (colorString) => {
  switch (colorString) {
    case 'red':
      return {backgroundColor: '#F3B286', color: 'black'};
    case 'blue':
      return {backgroundColor: '#5AA2B6', color: 'black'};
    case 'yellow':
      return {backgroundColor: '#DDC773', color: 'black'};
    case 'green':
      return {backgroundColor: '#93D1B4', color: 'black'};
    case 'brown':
      return {backgroundColor: '#CFBB9D', color: 'black'};
    case 'purple':
      return {backgroundColor: '#AC97D2', color: 'black'};
    case 'pink':
      return {backgroundColor: '#F6CFDA', color: 'black'};
    case 'gray':
      return {backgroundColor: '#CCCCCB', color: 'black'};
    case 'white':
      return {backgroundColor: '#EBEBED', color: 'black'};
    default:
      return {backgroundColor: '#363636', color: 'white'};
  }
};
export default Pokedex;

