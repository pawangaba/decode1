import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'molarity',
  title: 'Molarity Calculator',
  description: 'Calculate molarity from moles and solution volume.',
  category: 'Laboratory',
  keywords: ['molarity'],
  featured: false,
  inputs: [
  {
    "id": "moles",
    "label": "Amount of substance",
    "type": "number",
    "unit": "mol",
    "required": true,
    "min": 1e-06,
    "max": 10000,
    "step": 0.01
  },
  {
    "id": "volume",
    "label": "Solution volume",
    "type": "number",
    "unit": "L",
    "required": true,
    "min": 1e-06,
    "max": 10000,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.moles)/num(values.volume); return {primary:{label:"Molarity",value:fixed(r,4),unit:"mol/L"}};
  },
  formula: 'M = moles / volume (L)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
