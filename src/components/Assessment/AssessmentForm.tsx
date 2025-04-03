"use client";

import { Timer, Newspaper, ArrowUpRight } from "lucide-react";

import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/ui/RadioGroup/RadioGroup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/ui/Form/Form";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/Button/Button";

import type { AssessmentDict } from "./Assessment.types";

interface Props {
  dict: AssessmentDict;
}

export function AssessmentForm({ dict }: Props) {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="flex flex-col p-4 w-full rounded-xl max-w-[600px] bg-[linear-gradient(180deg,#ffffff0d,#fff0)]">
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue="1"
                  className="w-full"
                >
                  {dict.answers.map((item, i) => (
                    <FormItem
                      key={i}
                      className="flex flex-row items-start space-x-3 space-y-0 py-6 px-8 bg-[#00000080] rounded-lg"
                    >
                      <FormControl>
                        <RadioGroupItem value={`${i}`} />
                      </FormControl>
                      <FormLabel>{item}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
      </form>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-2">
          <Newspaper width={20} height={20} />
          <span className="text-sm">{dict.indicators.questions}</span>
        </div>

        <div className="flex items-center gap-2">
          <Timer width={20} height={20} />
          <span className="text-sm">{dict.indicators.time}</span>
        </div>

        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSeHhODXRhf8QJDzk_c-MpMul-elldswT0_nEaJfInziXurFYA/viewform?usp=dialog"
          }
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants(), "font-light h-12 rounded-xl")}
        >
          <span>{dict.button}</span>
          <ArrowUpRight />
        </Link>
      </div>
    </Form>
  );
}
