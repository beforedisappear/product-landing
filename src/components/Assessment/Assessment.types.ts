export type AssessmentDict = {
  title: string;
  question: string;
  answers: string[];
  indicators: {
    questions: string;
    time: string;
  };
  button: string;
};
