import React, { useReducer } from 'react';
import axios from 'axios';
import SummonerContext from './summonerContext';
import SummonerReducer from './summonerReducer';
import {
    GET_MASTERY,
    GET_SUMMONER,
    GET_LEAGUE_SOLO,
    GET_LEAGUE_FLEX
} from '../types';

let apikey;

if(process.env.NODE_ENV !== 'production') {
    apikey = process.env.REACT_APP_SECRET_ID;
    console.log(apikey);
} else {
    apikey = process.env.REACT_APP_SECRET_ID;
    console.log(apikey);
}

const SummonerState = (props) => {
    const initialState = {
        profileIconId: '1',
        name: '',
        summonerLevel: '',
        accountId: '',
        summonerId: 'test', 
        championMastery: [],
        leagueFlex: {"leagueId":"","queueType":"RANKED_FLEX_SR","tier":"unranked","rank":"","summonerId":"","summonerName":"","leaguePoints":0,"wins":0,"losses":0,"veteran":false,"inactive":false,"freshBlood":false,"hotStreak":false},
        leagueSolo: {"leagueId":"","queueType":"RANKED_SOLO_5x5","tier":"unranked","rank":"","summonerId":"","summonerName":"","leaguePoints":0,"wins":0,"losses":0,"veteran":false,"inactive":false,"freshBlood":false,"hotStreak":false}
    }

    const [state, dispatch] = useReducer(SummonerReducer, initialState);

    // Get SUMMONER
    const getSummoner = async name => {

        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apikey}`);
        dispatch({
            type: GET_SUMMONER,
            payload: res.data
        })

        getMastery(res.data.id);
        getLeague(res.data.id);
    }

    // Get Mastery
    const getMastery = async (summonerId) => {
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${apikey}`);

        dispatch({
            type: GET_MASTERY,
            payload: res.data
        })
    }

    // Get League
    const getLeague = async(summonerId) => {
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${apikey}`);
        
        dispatch({
            type: GET_LEAGUE_SOLO,
            payload: res.data
        })

        dispatch({
            type: GET_LEAGUE_FLEX,
            payload: res.data
        })
    }
    

    return (
        <SummonerContext.Provider value={{
            profileIconId: state.profileIconId,
            name: state.name,
            summonerLevel: state.summonerLevel,
            accountId: state.accountId,
            summonerId: state.summonerId,
            championMastery: state.championMastery,
            leagueFlex: state.leagueFlex,
            leagueSolo: state.leagueSolo,
            getSummoner,
            getMastery,
            getLeague
        }}>
            {props.children}
        </SummonerContext.Provider>
    )
};

export default SummonerState;