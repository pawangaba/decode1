import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'meld-na',
  title: 'MELD-Na',
  description: 'Calculate an educational MELD-Na estimate using the classic MELD score and sodium.',
  category: 'Liver',
  keywords: ['meld-na', 'liver'],
  featured: false,
  inputs: [
  {
    "id": "meld",
    "label": "MELD score",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 6,
    "max": 40,
    "step": 1
  },
  {
    "id": "sodium",
    "label": "Sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 125,
    "max": 140,
    "step": 0.01
  }
],
  calculate(values) {
    const m=num(values.meld),na=Math.min(137,Math.max(125,num(values.sodium)));
 const score=m+1.32*(137-na)-(0.033*m*(137-na)); return {primary:{label:"MELD-Na",value:Math.round(score)}};
  },
  formula: 'MELD-Na = MELD + 1.32 × (137−Na) − [0.033 × MELD × (137−Na)]',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
