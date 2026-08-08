import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'serial-dilution',
  title: 'Serial Dilution Calculator',
  description: 'Calculate total dilution factor and final concentration across serial dilution steps.',
  category: 'Laboratory',
  keywords: ['serial dilution'],
  featured: false,
  inputs: [
  {
    "id": "initial",
    "label": "Initial concentration",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 0.0001,
    "max": 100000,
    "step": 0.01
  },
  {
    "id": "factor",
    "label": "Dilution factor per step",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 1.01,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "steps",
    "label": "Number of steps",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 1,
    "max": 100,
    "step": 1
  }
],
  calculate(values) {
    const f=num(values.factor)**num(values.steps),c=num(values.initial)/f; return {primary:{label:"Final concentration",value:fixed(c,6)},secondary:[{label:"Overall dilution factor",value:`1:${fixed(f,2)}`} ]};
  },
  formula: 'Final concentration = initial concentration / (dilution factor^number of steps)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
