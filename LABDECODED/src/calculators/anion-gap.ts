import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'anion-gap',
  title: 'Anion Gap',
  description: 'Calculate the serum anion gap.',
  category: 'Electrolytes',
  keywords: ['anion gap', 'acid base'],
  featured: true,
  inputs: [
  {
    "id": "sodium",
    "label": "Sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 80,
    "max": 200,
    "step": 0.01
  },
  {
    "id": "chloride",
    "label": "Chloride",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 50,
    "max": 160,
    "step": 0.01
  },
  {
    "id": "bicarbonate",
    "label": "Bicarbonate",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 5,
    "max": 60,
    "step": 0.01
  }
],
  calculate(values) {
    const ag=num(values.sodium)-num(values.chloride)-num(values.bicarbonate);
 return {primary:{label:"Anion gap",value:fixed(ag,1),unit:"mmol/L"}};
  },
  formula: 'AG = Na − Cl − HCO₃',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
