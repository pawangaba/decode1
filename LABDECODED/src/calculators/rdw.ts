import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'rdw',
  title: 'RDW-CV Calculator',
  description: 'Calculate RDW-CV from standard deviation of RBC volume and MCV.',
  category: 'Hematology',
  keywords: ['rdw'],
  featured: false,
  inputs: [
  {
    "id": "sd",
    "label": "RBC volume SD",
    "type": "number",
    "unit": "fL",
    "required": true,
    "min": 0,
    "max": 100,
    "step": 0.01
  },
  {
    "id": "mcv",
    "label": "MCV",
    "type": "number",
    "unit": "fL",
    "required": true,
    "min": 1,
    "max": 150,
    "step": 0.01
  }
],
  calculate(values) {
    const r=100*num(values.sd)/num(values.mcv); return {primary:{label:"RDW-CV",value:fixed(r,1),unit:"%"}};
  },
  formula: 'RDW-CV (%) = RBC volume SD / MCV × 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
