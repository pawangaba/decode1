import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'delta-ratio',
  title: 'Delta Ratio',
  description: 'Calculate delta ratio for metabolic acidosis assessment.',
  category: 'Electrolytes',
  keywords: ['delta ratio', 'acid base'],
  featured: false,
  inputs: [
  {
    "id": "ag",
    "label": "Anion gap",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 0,
    "max": 100,
    "step": 0.01
  },
  {
    "id": "normalAg",
    "label": "Reference anion gap",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 5,
    "max": 20,
    "step": 0.01
  },
  {
    "id": "bicarb",
    "label": "Bicarbonate",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 5,
    "max": 60,
    "step": 0.01
  },
  {
    "id": "normalBicarb",
    "label": "Reference bicarbonate",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 20,
    "max": 30,
    "step": 0.01
  }
],
  calculate(values) {
    const ratio=(num(values.ag)-num(values.normalAg))/(num(values.normalBicarb)-num(values.bicarb));
 return {primary:{label:"Delta ratio",value:fixed(ratio,2)}};
  },
  formula: 'Delta ratio = (AG − normal AG) / (normal HCO₃ − measured HCO₃)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
