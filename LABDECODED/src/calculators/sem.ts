import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'sem',
  title: 'Standard Error of the Mean',
  description: 'Calculate SEM from SD and sample size.',
  category: 'Statistics',
  keywords: ['sem', 'statistics'],
  featured: false,
  inputs: [
  {
    "id": "sd",
    "label": "Standard deviation",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 0,
    "max": 1000000000.0,
    "step": 0.01
  },
  {
    "id": "n",
    "label": "Sample size",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 2,
    "max": 100000,
    "step": 1
  }
],
  calculate(values) {
    const r=num(values.sd)/Math.sqrt(num(values.n)); return {primary:{label:"SEM",value:fixed(r,4)}};
  },
  formula: 'SEM = SD / √n',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
