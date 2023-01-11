export interface FAQ {
  question: string;
  answer: string;
}

export const faq = [
  {
    question: "How do I add a question to the FAQ page?",
    answer:
      "Create a fork of the repository for this site on GitHub, you will need to navigate to the faq.ts file and add a FAQ object to the array!",
  },
];
