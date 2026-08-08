import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'urine-anion-gap',
  title: 'Urine Anion Gap',
  description: 'Calculate urine anion gap.',
  category: 'Renal',
  keywords: ['urine anion gap'],
  featured: false,
  inputs: [
  {
    "id": "na",
    "label": "Urine sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 0,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "k",
    "label": "Urine potassium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 0,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "cl",
    "label": "Urine chloride",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 0,
    "max": 1000,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.na)+num(values.k)-num(values.cl); return {primary:{label:"Urine anion gap",value:fixed(r,1),unit:"mmol/L"}};
  },
  formula: 'UAG = urine Na + urine K − urine Cl',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
