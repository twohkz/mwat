import React from 'react';
import './style.css';
import ProgressLine from '../progressbar/index.js';


const  Profile = (props) => {

        console.log('price in the profile com:',Math.round(props.price * 100000) / 100000);
        const pricerounded = Math.round(props.price * 1000000) / 1000000;
     
      return (
        <div class="profile_skills">
            <div class="container">
                <div class="profile">
                    <h2 class="profile-title">MWAT <span>Infos</span></h2>
                    <ul class="profile-list">
                        <li class="profile-item">
                            <span>CMC Rank</span>
                            {props.rank}
                        </li>
                        <li class="profile-item">
                            <span>Circulating Supply</span>
                            452 750 000 MWAT
                        </li>
                        <li class="profile-item">
                            <span>Total Supply</span>
                            500 000 000 MWAT
                        </li>
                        <li class="profile-item">
                            <span>Actual Price</span>
                            ${pricerounded} USD
                        </li>
                        <li class="profile-item">
                            <span>All Time High</span>
                            $0.090036 USD
                        </li>
                        <li class="profile-item">
                            <span>All Time Low</span>
                            $0.007131 USD
                        </li>
                        <li class="profile-item">
                            <span>Platform</span>
                            SWAZM Blockchain
                        </li>
                        <li class="profile-item">
                            <span>Staking Rewards</span>
                            KWT
                        </li>
                    </ul>
                </div>
                
                <div class="skills">
                    <h2 class="skills-title">Achievement <span></span></h2>
                    <p class="skills-desc">
                    Restart Energy MWAT (MWAT) is a cryptocurrency token and operates on the Ethereum platform. Restart Energy MWAT has a current supply of 500,000,000 with 452,750,000 in circulation. 
                    </p>
                    <div>
                    <ProgressLine
                                label="Staking"
                                backgroundColor="lightgrey"
                                visualParts={[
                                {
                                    percentage: "80%",
                                    color: "tomato"
                                }
                                ]}
                            />
                    </div>
                    <div>
                            <ProgressLine
                                label="Exchange Listining"
                                backgroundColor="lightgrey"
                                visualParts={[
                                {
                                    percentage: "45%",
                                    color: "tomato"
                                }
                                ]}
                            />
                    </div>

                    <div>
                       <ProgressLine
                                label="Roadmap"
                                backgroundColor="lightgrey"
                                visualParts={[
                                {
                                    percentage: "33%",
                                    color: "tomato"
                                }
                                ]}
                            /> 
                    </div>
                </div>
                
            </div>
        </div>
      );
    }
  

export default Profile;
