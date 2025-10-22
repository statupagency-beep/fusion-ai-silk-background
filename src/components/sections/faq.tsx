"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    value: "item-1",
    question: "What is Fusion AI and how does it work?",
    answer:
      "Fusion AI is an automation platform that connects your favorite apps and uses AI to handle tasks without coding. You set triggers, and our AI agents take care of the rest, streamlining your workflows.",
  },
  {
    value: "item-2",
    question: "Which apps can I integrate?",
    answer:
      "Fusion AI supports 50+ integrations, including Slack, HubSpot, Zendesk, Salesforce, Google Workspace, WhatsApp, Zapier, and more.",
  },
  {
    value: "item-3",
    question: "How does Fluence AI automate tasks?",
    answer:
      "Fluence AI uses a visual workflow designer where you can drag and drop triggers and actions. Based on these workflows, our AI agents execute tasks automatically across your integrated applications.",
  },
  {
    value: "item-4",
    question: "Is my data secure with Fluence AI?",
    answer:
      "Yes, data security is our top priority. We use industry-standard encryption and security protocols to ensure your data is safe and protected at all times.",
  },
  {
    value: "item-5",
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support through email, live chat, and a detailed knowledge base. Premium plan users also get dedicated account managers and priority support.",
  },
];

const FaqSection = () => {
  const [openValue, setOpenValue] = React.useState("item-2");

  return (
    <section id="faq" className="bg-black py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[468px_minmax(0,1fr)] lg:gap-24">
          <div className="flex flex-col items-start gap-8">
            <div className="inline-block rounded-full bg-white/10 px-4 py-2.5">
              <p className="text-sm font-medium uppercase tracking-wider text-white">
                FAQ
              </p>
            </div>
            <h2 className="text-5xl font-bold leading-[1.1] text-white">
              Frequently asked
              <br />
              questions
            </h2>
            <div className="flex flex-col gap-2.5">
                <p className="text-lg text-white/70">Got any Questions?</p>
                <p className="text-lg text-white/70">Let us know! Reach out and our team will get right back to you.</p>
            </div>
            <Button
              variant="outline"
              className="h-auto rounded-xl border-white/20 bg-transparent px-6 py-4 text-base font-medium text-white transition-colors hover:bg-white/5"
            >
              Contact us
            </Button>
          </div>

          <div className="w-full">
            <Accordion
              type="single"
              value={openValue}
              onValueChange={setOpenValue}
              collapsible
              className="w-full"
            >
              {faqData.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between py-8 text-left text-lg font-medium text-white hover:no-underline">
                    {item.question}
                    {openValue === item.value ? (
                      <Minus className="h-6 w-6 shrink-0" />
                    ) : (
                      <Plus className="h-6 w-6 shrink-0" />
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-base text-white/70 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                     <div className="pb-8 pr-8">
                        {item.answer}
                     </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;