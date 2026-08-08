import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'bias',
  title: 'Bias Calculator',
  description: 'Calculate percentage bias from observed and target values.',
  category: 'Statistics',
  keywords: ['bias', 'laboratory quality'],
  featured: false,
  inputs: [
  {
    "id": "observed",
    "label": "Observed value",
    "type": "number",
    "unit": "",
    "required": true,
    "min": -1000000000.0,
    "max": 1000000000.0,
    "step": 0.01
  },
  {
    "id": "target",
    "label": "Target value",
    "type": "number",
    "unit": "",
    "required": true,
    "min": -1000000000.0,
    "max": 1000000000.0,
    "step": 0.01
  }
],
  calculate(values) {
    const r=(num(values.observed)-num(values.target))/num(values.target)*100; return {primary:{label:"Bias",value:fixed(r,2),unit:"%"}};
  },
  formula: 'Bias% = (observed − target) / target × 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
