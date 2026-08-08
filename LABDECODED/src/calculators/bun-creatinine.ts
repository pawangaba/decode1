import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'bun-creatinine',
  title: 'BUN / Creatinine Ratio',
  description: 'Calculate the ratio of BUN to serum creatinine.',
  category: 'Renal',
  keywords: ['bun', 'creatinine', 'ratio'],
  featured: false,
  inputs: [
  {
    "id": "bun",
    "label": "BUN",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0,
    "max": 300,
    "step": 0.01
  },
  {
    "id": "creatinine",
    "label": "Creatinine",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0.01,
    "max": 20,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.bun)/num(values.creatinine); return {primary:{label:"BUN/Creatinine ratio",value:fixed(r,1)},interpretation:"Interpret in the context of hydration, renal function and clinical findings."};
  },
  formula: 'BUN (mg/dL) / creatinine (mg/dL)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
