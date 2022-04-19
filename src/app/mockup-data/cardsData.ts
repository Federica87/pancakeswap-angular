import { ICard } from "../models/ICard";
import { ITiltedCards } from "../models/ITiltedCards";

export let mockCards: ICard[]=
   [
    {
      firstLine:'3.8 Million',
      secondLine: 'users',
      thirdLine: 'in the last 30 days',
      color: 'color1'
    },
    {
      firstLine:'50 Million',
      secondLine: 'trades',
      thirdLine: 'in the last 30 days',
      color: 'color2'
    },
    {
      firstLine:'$12 Billion',
      secondLine: 'staked',
      thirdLine: 'Total Value Locked',
      color: 'color3'
    }
  ]

export let mockTiltedCards: ITiltedCards[]=
  [
   {
     id:1,
     firstLine:'Prediction',
     secondLine: '750 million',
     thirdLine: 'in BNB won so far',
     fourthLine:'Will BNB price rise or fall? guess correctly to win!',
     buttonLine:'Play'
   },
   {
    id:2,
    firstLine:'Lottery',
    secondLine: 19815,
    thirdLine: 'in CAKE prizes this round',
    fourthLine:'Buy tickets with CAKE, win CAKE if your numbers match',
    buttonLine:'Buy tickets'
   }
 ]
