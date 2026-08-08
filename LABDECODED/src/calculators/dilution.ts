import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'dilution',
  title: 'Dilution Calculator',
  description: 'Calculate final concentration using C1V1 = C2V2.',
  category: 'Laboratory',
  keywords: ['dilution', 'c1v1'],
  featured: false,
  inputs: [
  {
    "id": "c1",
    "label": "Stock concentration",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 0.0001,
    "max": 100000,
    "step": 0.01
  },
  {
    "id": "v1",
    "label": "Stock volume",
    "type": "number",
    "unit": "mL",
    "required": true,
    "min": 0.001,
    "max": 100000,
    "step": 0.01
  },
  {
    "id": "v2",
    "label": "Final volume",
    "type": "number",
    "unit": "mL",
    "required": true,
    "min": 0.001,
    "max": 100000,
    "step": 0.01
  }
],
  calculate(values) {
    const c2=num(values.c1)*num(values.v1)/num(values.v2); return {primary:{label:"Final concentration",value:fixed(c2,4)}};
  },
  formula: 'C₁V₁ = C₂V₂',
  references: true
};
export default calculator;
