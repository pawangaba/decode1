import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'apri',
  title: 'APRI Score',
  description: 'Calculate the AST to Platelet Ratio Index.',
  category: 'Liver',
  keywords: ['apri', 'liver'],
  featured: false,
  inputs: [
  {
    "id": "ast",
    "label": "AST",
    "type": "number",
    "unit": "U/L",
    "required": true,
    "min": 1,
    "max": 10000,
    "step": 0.01
  },
  {
    "id": "astULN",
    "label": "AST upper limit",
    "type": "number",
    "unit": "U/L",
    "required": true,
    "min": 1,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "platelets",
    "label": "Platelets",
    "type": "number",
    "unit": "10\u2079/L",
    "required": true,
    "min": 1,
    "max": 1000,
    "step": 0.01
  }
],
  calculate(values) {
    const apri=(num(values.ast)/num(values.astULN))*100/num(values.platelets); return {primary:{label:"APRI",value:fixed(apri,2)}};
  },
  formula: 'APRI = [(AST / AST ULN) × 100] / platelet count',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
