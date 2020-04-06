import {
    GET_SUMMONER,
    GET_MASTERY,
    GET_LEAGUE_SOLO,
    GET_LEAGUE_FLEX
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_SUMMONER:
        return {
            ...state,
            profileIconId: action.payload.profileIconId,
            name: action.payload.name,
            summonerLevel: action.payload.summonerLevel,
            accountId: action.payload.accountId,
            summonerId: action.payload.id
        }
        case GET_MASTERY:
            return {
                ...state,
                championMastery: action.payload
            }
        case GET_LEAGUE_SOLO:
            return {
                ...state,
                leagueSolo: action.payload.filter(element => element.queueType === 'RANKED_SOLO_5x5')[0] ? action.payload.filter(element => element.queueType === 'RANKED_SOLO_5x5')[0] : {"leagueId":"","queueType":"RANKED_SOLO_5x5","tier":"unranked","rank":"","summonerId":"","summonerName":"","leaguePoints":0,"wins":0,"losses":0,"veteran":false,"inactive":false,"freshBlood":false,"hotStreak":false}
            }
        case GET_LEAGUE_FLEX:
            return {
                ...state,
                leagueFlex: action.payload.filter(element => element.queueType === 'RANKED_FLEX_SR')[0] ? action.payload.filter(element => element.queueType === 'RANKED_FLEX_SR')[0] : {"leagueId":"","queueType":"RANKED_FLEX_SR","tier":"unranked","rank":"","summonerId":"","summonerName":"","leaguePoints":0,"wins":0,"losses":0,"veteran":false,"inactive":false,"freshBlood":false,"hotStreak":false}
            }
        default:
            return state;
    }
}