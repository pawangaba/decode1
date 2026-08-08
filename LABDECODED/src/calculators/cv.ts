import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'cv',
  title: 'Coefficient of Variation',
  description: 'Calculate CV% from mean and standard deviation.',
  category: 'Statistics',
  keywords: ['cv', 'coefficient variation', 'quality control'],
  featured: false,
  inputs: [
  {
    "id": "mean",
    "label": "Mean",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 1e-06,
    "max": 1000000000.0,
    "step": 0.01
  },
  {
    "id": "sd",
    "label": "Standard deviation",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 0,
    "max": 1000000000.0,
    "step": 0.01
  }
],
  calculate(values) {
    const r=100*num(values.sd)/num(values.mean); return {primary:{label:"CV",value:fixed(r,2),unit:"%"}};
  },
  formula: 'CV% = SD / mean × 100',
  references: true
};
export default calculator;
