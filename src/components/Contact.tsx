import type { ComponentType, SVGProps } from "react";
import Reveal from "./Reveal";
import { MailIcon, PinIcon, PhoneIcon } from "./Icons";

interface ContactItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
}

const ITEMS: ContactItem[] = [
  { icon: MailIcon, text: "chidaluezealigo@gmail.com" },
  { icon: PinIcon, text: "Nigeria" },
  { icon: PhoneIcon, text: "09021996620" },
];

export default function Contact() {
  return (
    <section className="px-8 pt-10 pb-24">
      <div className="flex flex-col gap-6">
        {ITEMS.map((item, i) => (
          <Reveal key={item.text} delay={i * 100} className="flex items-center gap-3">
            <item.icon className="w-5 h-5 text-green" />
            <span className="text-[14px] text-white font-regular">{item.text}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
