import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'child-pugh',
  title: 'Child-Pugh Score',
  description: 'Calculate the Child-Pugh score from five clinical/laboratory parameters.',
  category: 'Liver',
  keywords: ['child pugh', 'cirrhosis'],
  featured: false,
  inputs: [
  {
    "id": "bilirubin",
    "label": "Bilirubin",
    "type": "number",
    "unit": "mg/dL",
    "required": true
  },
  {
    "id": "albumin",
    "label": "Albumin",
    "type": "number",
    "unit": "g/dL",
    "required": true
  },
  {
    "id": "inr",
    "label": "INR",
    "type": "number",
    "required": true
  },
  {
    "id": "ascites",
    "label": "Ascites",
    "type": "select",
    "required": true,
    "options": [
      {
        "value": "1",
        "label": "null"
      },
      {
        "value": "2",
        "label": "Mild"
      },
      {
        "value": "3",
        "label": "Moderate/severe"
      }
    ]
  },
  {
    "id": "encephalopathy",
    "label": "Encephalopathy",
    "type": "select",
    "required": true,
    "options": [
      {
        "value": "1",
        "label": "null"
      },
      {
        "value": "2",
        "label": "Grade I\u2013II"
      },
      {
        "value": "3",
        "label": "Grade III\u2013IV"
      }
    ]
  }
],
  calculate(values) {
    const b=num(values.bilirubin),a=num(values.albumin),i=num(values.inr);
 const ps=(b<2?1:b<=3?2:3)+(a>3.5?1:a>=2.8?2:3)+(i<1.7?1:i<=2.3?2:3)+num(values.ascites)+num(values.encephalopathy);
 const cls=ps<=6?"Class A":ps<=9?"Class B":"Class C";
 return {primary:{label:"Child-Pugh score",value:ps},secondary:[{label:"Class",value:cls}]};
  },
  formula: 'Child-Pugh = bilirubin + albumin + INR + ascites + encephalopathy points',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
