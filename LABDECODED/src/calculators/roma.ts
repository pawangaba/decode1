import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'roma',
  title: 'ROMA Score',
  description: 'Educational ROMA calculation using CA-125 and HE4 with menopausal status.',
  category: 'Reproductive',
  keywords: ['roma', 'ovarian', 'he4', 'ca125'],
  featured: false,
  inputs: [
  {
    "id": "status",
    "label": "Menopausal status",
    "type": "select",
    "required": true,
    "options": [
      {
        "value": "pre",
        "label": "Premenopausal"
      },
      {
        "value": "post",
        "label": "Postmenopausal"
      }
    ]
  },
  {
    "id": "ca125",
    "label": "CA-125",
    "type": "number",
    "unit": "U/mL",
    "required": true,
    "min": 0.1,
    "max": 10000,
    "step": 0.01
  },
  {
    "id": "he4",
    "label": "HE4",
    "type": "number",
    "unit": "pmol/L",
    "required": true,
    "min": 0.1,
    "max": 5000,
    "step": 0.01
  }
],
  calculate(values) {
    const ca=Math.max(num(values.ca125),0.1),he=Math.max(num(values.he4),0.1);
 const logit=values.status==="pre"?-8.09+1.04*Math.log(he)+0.732*Math.log(ca):-8.09+1.04*Math.log(he)+0.732*Math.log(ca);
 const roma=100*Math.exp(logit)/(1+Math.exp(logit));
 return {primary:{label:"ROMA",value:fixed(roma,1),unit:"%"},interpretation:"ROMA thresholds are assay- and population-specific. Use the manufacturer's validated algorithm and cutoffs for clinical decisions."};
  },
  formula: 'ROMA uses a validated logistic model with HE4, CA-125 and menopausal status; assay-specific cutoffs apply.',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
