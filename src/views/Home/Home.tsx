import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Countdown from 'react-countdown';
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'


const Hero = styled.div`
  align-items: center;
  background-image: url('/images/wine/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/wine/3.png'), url('/images/wine/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  
  const TranslateString = useI18n()
  const Completionist = () => <span>New Farms Are Loading!</span>;
  const launchTime = Date.UTC(2021, 2, 12, 18, 0) - Date.now()
  const RenderTime = ({ remainingTime }) => {
    const currentTime = useRef(remainingTime);
    const prevTime = useRef(null);
    const isNewTimeFirstTick = useRef(false);
    const [, setOneLastRerender] = useState(0);
  
    if (currentTime.current !== remainingTime) {
      isNewTimeFirstTick.current = true;
      prevTime.current = currentTime.current;
      currentTime.current = remainingTime;
    } else {
      isNewTimeFirstTick.current = false;
    }
  
    // force one last re-render when the time is over to tirgger the last animation
    if (remainingTime === 0) {
      setTimeout(() => {
        setOneLastRerender(val => val + 1);
      }, 20);
    }
  
    const isTimeUp = isNewTimeFirstTick.current;
  
    return (
      <div className="time-wrapper">
        <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
          {remainingTime} Seconds
        </div>
        {remainingTime === 0 && (
          <div>
            Farms are loading !
          </div>
        )}
      </div>
    );
  };
  
  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'WINE Finance')}
        </Heading>
        <Text>{TranslateString(578, 'The only yield farm for wine lovers.')}</Text>
      </Hero>
      <Text><div style={{ fontSize: "32px",textAlign: "center", margin: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center',}} >Farms will be unlocked in (UTC 03/12/2021 18:00) </div></Text>
        <div style={{ textAlign: "center", margin: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center',}}>
          <div style={{ fontSize: "67px" }}>
            <Countdown date= {Date.now() + launchTime } >
              <Completionist />
            </Countdown>
          </div>
        </div>
        <div style={{ fontSize: "1px",textAlign: "center", margin: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center',}} ><Text> .</Text></div>
        <div style={{ fontSize: "1px",textAlign: "center", margin: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center',}}><Text> .</Text></div>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
