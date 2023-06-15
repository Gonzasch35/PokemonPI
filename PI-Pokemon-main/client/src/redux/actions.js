import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_POKEMONS_BY_TYPE = "GET_POKEMONS_BY_TYPE"
export const ORDER_NAME = 'ORDER_NAME'
export const ORDER_ATTACK = 'ORDER_ATTACK'
export const GET_TYPES = "GET_TYPES"
export const GET_API_OR_DB = "GET_API_OR_DB"
export const  DELETE_POKEMON = " DELETE_POKEMON"

const URL_POKEMONS = 'http://localhost:3001/pokemons/'
const URL_TYPES = 'http://localhost:3001/types/'

export const getPokemons = () => {
    return async function (dispatch) {
        const serverData = await axios.get(`${URL_POKEMONS}`)
        const data = serverData.data
        dispatch({type: GET_POKEMONS, payload: data})
    }
}

export const getPokemonById = (id) => {
    return async function (dispatch) {
        const dataDetail = await axios.get(`${URL_POKEMONS}${id}`)
        const pokemon = dataDetail.data
        dispatch({type: GET_POKEMON_BY_ID, payload: pokemon})
    }
}

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        const byName = await axios.get(`${URL_POKEMONS}?name=${name}`)
        const pokemon = byName.data
        dispatch({type: GET_POKEMON_BY_NAME, payload: pokemon})
    }
}

export const getFilterPokemons = (type) => {
    return {
        type: GET_POKEMONS_BY_TYPE,
        payload: type
    }
}

export const inOrder = (order) => {
    return {
        type: ORDER_NAME,
        payload: order
    }
} 

export const inOrderAttack = (order) => {
    return {
        type: ORDER_ATTACK,
        payload: order,
    }
}

export const getApiOrDb = (payload) => {
    return {
        type: GET_API_OR_DB, 
        payload,
    }
}

export const getTypes = () => {
    return async function (dispatch) {
        const dataTypes = await axios.get(`${URL_TYPES}`)
        const types = dataTypes.data
        dispatch({type: GET_TYPES, payload: types})
    }
}

export const deletePokemon = (id) => {
    return async function (dispatch) {
        const dataDetail = await axios.delete(`${URL_POKEMONS}${id}`)
        const deletePoke = dataDetail.data
        dispatch({type: DELETE_POKEMON, payload: deletePoke})
    }
}
