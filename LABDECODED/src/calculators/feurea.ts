import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'feurea',
  title: 'Fractional Excretion of Urea',
  description: 'Estimate fractional excretion of urea.',
  category: 'Renal',
  keywords: ['feurea', 'urea', 'kidney'],
  featured: false,
  inputs: [
  {
    "id": "urineUrea",
    "label": "Urine urea",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0,
    "max": 5000,
    "step": 0.01
  },
  {
    "id": "plasmaUrea",
    "label": "Plasma urea",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0,
    "max": 300,
    "step": 0.01
  },
  {
    "id": "urineCr",
    "label": "Urine creatinine",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0.1,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "plasmaCr",
    "label": "Plasma creatinine",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0.1,
    "max": 20,
    "step": 0.01
  }
],
  calculate(values) {
    const x=(num(values.urineUrea)*num(values.plasmaCr))/(num(values.plasmaUrea)*num(values.urineCr))*100;
 return {primary:{label:"FEUrea",value:fixed(x,2),unit:"%"},interpretation:"Interpret with the clinical context and local laboratory units."};
  },
  formula: 'FEUrea (%) = (Urine urea × Plasma creatinine) / (Plasma urea × Urine creatinine) × 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
