export interface Card {
  id?: number;
  firstLine: string;
  secondLine: string | number;
  thirdLine: string;
  fourthLine?: string;
  buttonLine?: string;
  color?: string
}
