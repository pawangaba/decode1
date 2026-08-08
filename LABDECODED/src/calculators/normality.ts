import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'normality',
  title: 'Normality Calculator',
  description: 'Calculate normality from molarity and equivalent factor.',
  category: 'Laboratory',
  keywords: ['normality'],
  featured: false,
  inputs: [
  {
    "id": "molarity",
    "label": "Molarity",
    "type": "number",
    "unit": "mol/L",
    "required": true,
    "min": 0,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "factor",
    "label": "Equivalent factor",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 1,
    "max": 20,
    "step": 1
  }
],
  calculate(values) {
    const r=num(values.molarity)*num(values.factor); return {primary:{label:"Normality",value:fixed(r,4),unit:"N"}};
  },
  formula: 'N = M × equivalent factor',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
