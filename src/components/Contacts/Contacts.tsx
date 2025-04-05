import s from "./Contacts.module.css";
import { MailPlusIcon, MapPinCheck, Phone } from "lucide-react";

import { getDict } from "@/lib/getDict";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/Button/Button";
import { ContactsBtn } from "./ContactsBtn";

interface Props {}

export async function Contacts({}: Props) {
  const {
    contacts: { title, items, button },
  } = await getDict();

  return (
    <div
      className="container flex flex-col gap-6 !px-0 mb-8 py-12
      sm:py-4"
    >
      <h2 className="text-base font-semibold text-center w-11/12 mx-auto">
        {title}
      </h2>

      <ContactsBtn text={button} />

      <div
        className="flex gap-8
        md:flex-col"
      >
        {items.map(({ name, value }, i) => (
          <div
            key={i}
            className={cn(
              s.contact,
              "relative flex flex-col gap-2 p-6 flex-[1_1_100%]"
            )}
          >
            <div className="flex items-center justify-center gap-4">
              {name === "Email" && <MailPlusIcon />}
              {name === "Phone" && <Phone />}
              {name === "Address" && <MapPinCheck />}

              <span className="text-lg">{name}</span>
            </div>
            <span className="text-center text-lg font-normal">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
