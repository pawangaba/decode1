import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'delta-gap',
  title: 'Delta Gap',
  description: 'Calculate the change in anion gap above a reference value.',
  category: 'Electrolytes',
  keywords: ['delta gap', 'anion gap'],
  featured: false,
  inputs: [
  {
    "id": "ag",
    "label": "Anion gap",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 0,
    "max": 100,
    "step": 0.01
  },
  {
    "id": "normal",
    "label": "Reference anion gap",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 5,
    "max": 20,
    "step": 0.01
  }
],
  calculate(values) {
    const d=num(values.ag)-num(values.normal); return {primary:{label:"Delta gap",value:fixed(d,1),unit:"mmol/L"}};
  },
  formula: 'Δ gap = measured AG − reference AG',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
