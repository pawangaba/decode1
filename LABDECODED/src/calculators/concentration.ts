import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'concentration',
  title: 'Concentration Calculator',
  description: 'Calculate concentration from mass and volume.',
  category: 'Laboratory',
  keywords: ['concentration'],
  featured: false,
  inputs: [
  {
    "id": "mass",
    "label": "Solute mass",
    "type": "number",
    "unit": "g",
    "required": true,
    "min": 1e-06,
    "max": 100000,
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
    const r=num(values.mass)/num(values.volume); return {primary:{label:"Concentration",value:fixed(r,4),unit:"g/L"}};
  },
  formula: 'Concentration = mass / volume',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
