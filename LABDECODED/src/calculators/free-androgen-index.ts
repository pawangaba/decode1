import type { CalculatorDefinition } from "../types/calculator";

const calculator: CalculatorDefinition = {
  slug: "free-androgen-index",

  title: "Free Androgen Index (FAI)",

  category: "Endocrinology",

  description:
    "Calculates the Free Androgen Index from total testosterone reported in ng/mL and SHBG reported in nmol/L.",

  keywords: [
    "FAI",
    "Free Androgen Index",
    "free androgen",
    "testosterone",
    "SHBG",
    "sex hormone binding globulin",
    "androgen"
  ],

  inputs: [
    {
      id: "testosterone",
      name: "testosterone",
      label: "Total Testosterone",
      type: "number",
      unit: "ng/mL",
      min: 0,
      step: "any",
      required: true,
      placeholder: "e.g. 0.50",
      description:
        "Enter total testosterone in ng/mL."
    },

    {
      id: "shbg",
      name: "shbg",
      label: "SHBG",
      type: "number",
      unit: "nmol/L",
      min: 0,
      step: "any",
      required: true,
      placeholder: "e.g. 40",
      description:
        "Sex hormone-binding globulin in nmol/L."
    }
  ],

  calculate(values) {
    const testosterone =
      Number(values.testosterone);

    const shbg =
      Number(values.shbg);

    if (
      !Number.isFinite(testosterone) ||
      testosterone < 0
    ) {
      throw new Error(
        "Please enter a valid testosterone value."
      );
    }

    if (
      !Number.isFinite(shbg) ||
      shbg <= 0
    ) {
      throw new Error(
        "SHBG must be greater than zero."
      );
    }

    /*
     * Testosterone conversion:
     *
     * 1 ng/mL = 3.467 nmol/L
     *
     * Therefore:
     *
     * Testosterone (nmol/L)
     * = Testosterone (ng/mL) × 3.467
     */

    const testosteroneNmol =
      testosterone * 3.467;

    /*
     * Free Androgen Index:
     *
     * FAI =
     * Testosterone (nmol/L)
     * ----------------------- × 100
     * SHBG (nmol/L)
     */

    const fai =
      (testosteroneNmol / shbg) * 100;

    return {
      primary: {
        label: "Free Androgen Index",
        value: Number(fai.toFixed(2)),
        unit: ""
      },

      secondary: [
        {
          label: "Testosterone",
          value: Number(
            testosterone.toFixed(3)
          ),
          unit: "ng/mL"
        },

        {
          label: "Testosterone converted",
          value: Number(
            testosteroneNmol.toFixed(3)
          ),
          unit: "nmol/L"
        },

        {
          label: "SHBG",
          value: Number(
            shbg.toFixed(2)
          ),
          unit: "nmol/L"
        }
      ],

      interpretation:
        "The Free Androgen Index is a calculated ratio of total testosterone to SHBG. Interpretation should consider sex, age, clinical context, laboratory-specific reference intervals, and assay characteristics."
    };
  },

  formula:
    "FAI = [Total Testosterone (nmol/L) ÷ SHBG (nmol/L)] × 100. Testosterone conversion: 1 ng/mL = 3.467 nmol/L.",

  references: [
    {
      title:
        "Free Androgen Index calculation: testosterone to SHBG ratio"
    }
  ],

  disclaimer:
    "This calculator is intended for educational and clinical calculation support. FAI should not be interpreted in isolation. Clinical interpretation should consider the patient's sex, age, symptoms, laboratory reference intervals, and the methods used for testosterone and SHBG measurement."
};

export default calculator;