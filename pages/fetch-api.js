import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Pokedex from '../components/Pokedex'
import QUERY_POKEMON from '../config/queryPokemon'

const url = 'https://beta.pokeapi.co/graphql/v1beta';

export default function FetchApi() {

  return (
      <div>FETCH API TEST</div>
  )
}
