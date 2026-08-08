import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'sd',
  title: 'Standard Deviation Calculator',
  description: 'Calculate sample standard deviation from comma-separated values.',
  category: 'Statistics',
  keywords: ['standard deviation', 'sd'],
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
    const a=values.values.split(",").map(Number).filter(Number.isFinite),m=a.reduce((x,y)=>x+y,0)/a.length; const v=a.reduce((s,x)=>s+(x-m)**2,0)/(a.length-1); return {primary:{label:"Sample SD",value:fixed(Math.sqrt(v),4)}};
  },
  formula: 'Sample SD = √[Σ(x−mean)²/(n−1)]',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
