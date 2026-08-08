import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'mean',
  title: 'Mean Calculator',
  description: 'Calculate the arithmetic mean of comma-separated values.',
  category: 'Statistics',
  keywords: ['mean', 'statistics'],
  featured: false,
  inputs: [
  {
    "id": "values",
    "label": "Values",
    "type": "number",
    "unit": "comma-separated",
    "required": true,
    "min": 0,
    "max": 1000000000.0,
    "step": 0.01
  }
],
  calculate(values) {
    const a=values.values.split(",").map(Number).filter(Number.isFinite); const r=a.reduce((x,y)=>x+y,0)/a.length; return {primary:{label:"Mean",value:fixed(r,4)}};
  },
  formula: 'Mean = Σx / n',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
