import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../layout/Navbar';

import SummonerContext from '../../context/summoner/summonerContext';

const Summoner = () => {

    let { summonerName } = useParams();

    const summonerContext = useContext(SummonerContext);

    const { getSummoner, profileIconId, summonerLevel, championMastery, leagueFlex, leagueSolo} = summonerContext;

    useEffect(
        () => {
            getSummoner(summonerName);
            document.getElementById('myVideo').play();
        },
        //eslint-disable-next-line
        [],
    )
    return (
        <div className='container'>
            <video autoPlay muted loop id="myVideo">
                <source src={require('../../img/hecarim.webm')} type="video/webm"></source>
            </video>
            <Navbar />
            <div className='summoner'>
                <div className='summoner-container'>
                    
                    <div className='summoner-container--data'>
                        <img className='summoner-icon' src={require(`../../img/profileicon/${profileIconId}.png`)} alt='profileIcon'></img>
                        <p className='summoner-important'>{summonerName}</p>
                        <p className='summoner-text'>Level {summonerLevel}</p>

                        <img className='summoner-rank' src={require(`../../img/ranked/Emblem_${leagueSolo.tier}.png`)} alt='rank'></img>
                        <p className='summoner-important'>{leagueSolo.tier} {leagueSolo.rank}</p>
                        <p className='summoner-text'>Solo / Duo</p>
                        <p className='summoner-text'>{leagueSolo.leaguePoints} League Points</p>

                        <img className='summoner-rank' src={require(`../../img/ranked/Emblem_${leagueFlex.tier}.png`)} alt='rank'></img>
                        <p className='summoner-important'>{leagueFlex.tier} {leagueFlex.rank}</p>
                        <p className='summoner-text'>Flex</p>
                        <p className='summoner-text'>{leagueFlex.leaguePoints} League Points</p>
                    </div>

                    <div className='summoner-container--mastery'>
                        {
                            championMastery.map(element => {
                                return (
                                <div className='summoner-mastery' key={element.championId}>
                                    <img src={require(`../../img/champs/${element.championId}.png`)} alt='champion'></img>
                                    <img src={require(`../../img/mastery/${element.championLevel}.png`)} alt='mastery'></img>
                                    <p> {element.championPoints} Points</p>
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summoner
