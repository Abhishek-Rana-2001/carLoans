export const questions = [
  {
    question: "What type of Vehicle do you want?",
    subtext: "We will match you with your preferred vehicle.",
    fieldName: "vehicleType",
    options: [
      {
        name: "Car",
        value: "Car",
      },
      {
        name: "Truck",
        value: "Truck",
      },
      {
        name: "SUV",
        value: "SUV",
      },
      {
        name: "Van",
        value: "Van",
      },
    ],
    type: "select",
  },
  {
    question: "What is your monthly Budget?",
    subtext:
      "By telling us how much you can afford, we are able to match you with the vehicle that best meets your needs.",
    fieldName: "budget",
    options: [
      {
        name: "< $400",
        value: "< $400",
      },
      {
        name: "$400 - $499",
        value: "$400 - $499",
      },
      {
        name: "$500 - $600",
        value: "$500 - $600",
      },
      {
        name: "> $600",
        value: "> $600",
      },
    ],
    type: "select",
  },
  {
    question: "Are You Currently Driving a Vehicle?",
    subtext: "We can get you pre-approved with or without a trade in.",
    fieldName: "vehicleType",
    options: [
      {
        name: "Yes, I want to trade it in",
        value: "Trade in",
      },
      {
        name: "Yes, I want to keep it",
        value: "Keep it",
      },
      {
        name: "No",
        value: "No",
      },
    ],
    type: "select",
  },
  {
    question: "What type of Vehicle do you want?",
    subtext: "We will match you with your preferred vehicle.",
    fieldName: "dob",
    options: [],
    type: "date",
  },
  {
    question: "What is your estimated Credit Rating?",
    subtext:
      "Your estimated credit rating helps us determine the appropriate vehicle for you",
    fieldName: "credit",
    options: [
      {
        name: "> 650",
        value: "> 650",
      },
      {
        name: "550-649",
        value: "550-649",
      },
      {
        name: "< 550",
        value: "< 550",
      },
      {
        name: "Current Bankruptcy",
        value: "Bankruptcy",
      },
      {
        name: "No Credit",
        value: "No Credit",
      },
    ],
    type:"select"
  },
  {
    question: "What is your Employment status?",
    subtext: "Your employment status will help determine the best vehicle and financing options for you.",
    fieldName: "emp",
    options: [
      {
        name: "Employed",
        value: "Employed",
      },
      {
        name: "Unemployed",
        value: "Keep it",
      },
      {
        name: "Other",
        value: "Other",
      },
    ],
    type: "select",
  },
  {
    question: "What is your Monthly Income?",
    subtext: "Before taxes and deductions. Round to nearest dollar.",
    fieldName: "income",
    options: [],
    type: "money",
  },
  {
    question: "What type of Vehicle do you want?",
    subtext: "We will match you with your preferred vehicle.",
    fieldName: "dob",
    options: [],
    type: "date",
  },
  {
    question: "What type of Vehicle do you want?",
    subtext: "We will match you with your preferred vehicle.",
    fieldName: "dob",
    options: [],
    type: "date",
  },
];
