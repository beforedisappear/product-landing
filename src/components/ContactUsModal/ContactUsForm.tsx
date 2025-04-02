"use client";

import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from "@/ui/Form/Form";
import { Input } from "@/ui/Input/Input";
import { Checkbox } from "@/ui/Checkbox/Checkbox";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { ContactUsFormSchema } from "./ContactUsForm.schema";
import { Button } from "@/ui/Button/Button";

import type { ContactUsModalDict } from "./ContactUsModal.types";
import { ArrowUpRight } from "lucide-react";
import { sendApplicationForm } from "./ContactUsForm.action";
import { useToast } from "@/hooks/use-toast";

interface Props {
  dict: ContactUsModalDict;
  onCloseModal: () => void;
}

export function ContactUsForm({ dict, onCloseModal }: Props) {
  const { toast } = useToast();

  const form = useForm({
    reValidateMode: "onChange",
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: { name: "", phone: "", email: "", tg: "" },
  });

  const onSubmit = form.handleSubmit((data) => {
    sendApplicationForm(data).then(() => {
      onCloseModal();
      toast({
        title: dict.toast,
      });
    });
  });

  const watchAgree = form.watch("agree");

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        className="flex flex-col flex-grow gap-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`${dict.nameField}*`}</FormLabel>

              <FormControl>
                <Input {...field} placeholder={dict.nameField} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`${dict.emailField}*`}</FormLabel>

              <FormControl>
                <Input {...field} placeholder={dict.emailField} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`${dict.numberField}*`}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={dict.numberField} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.tgField}</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4 -mt-6">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel>{dict.agree}</FormLabel>
            </FormItem>
          )}
        />

        <Button
          size="lg"
          className="w-fit h-12 py-[13px] px-[22px] rounded-xl mt-auto
          md:w-full"
          disabled={!watchAgree}
        >
          <span className="font-light">{dict.submit}</span>
          <ArrowUpRight />
        </Button>
      </form>
    </Form>
  );
}
