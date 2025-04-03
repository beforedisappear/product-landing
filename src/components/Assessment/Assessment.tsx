import { cn } from "@/lib/utils";
import styles from "./Assessment.module.css";

import { getDict } from "@/lib/getDict";
import { AssessmentForm } from "./AssessmentForm";

interface Props {}

export async function Assessment({}: Props) {
  const { assessment } = await getDict();

  return (
    <section
      className={cn(
        styles.assessment,
        "flex flex-col items-center p-12 pt-28 h-auto sm:p-4"
      )}
    >
      <h2 className="text-2xl font-semibold text-center mb-4">
        {assessment.title}
      </h2>

      <span className="text-xl text-gray-400 text-center mb-8">
        {assessment.question}
      </span>

      <AssessmentForm dict={assessment} />
    </section>
  );
}
