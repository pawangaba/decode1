import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'median',
  title: 'Median Calculator',
  description: 'Calculate the median of comma-separated values.',
  category: 'Statistics',
  keywords: ['median', 'statistics'],
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
    const a=values.values.split(",").map(Number).filter(Number.isFinite).sort((x,y)=>x-y); const m=Math.floor(a.length/2); const r=a.length%2?a[m]:(a[m-1]+a[m])/2; return {primary:{label:"Median",value:fixed(r,4)}};
  },
  formula: 'Median = middle ordered value (or mean of two middle values)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
