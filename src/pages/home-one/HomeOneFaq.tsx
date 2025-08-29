"use client";
import faqCoin from "@/../public/images/home-one/faq-coin.png";
import faqDonate from "@/../public/images/home-one/faq-donat.png";
import faqImage from "@/../public/images/home-one/faq-image.png";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { useState } from "react";
import SingleFaq from "./SingleFaq";

export const faqData = [
  {
    question: "How do I report fraudulent activity on my account?",
    answer:
      "If you notice any suspicious or unauthorized activity on your account, follow these steps:\n1. Contact your bank or credit card issuer immediately.\n2. Report the fraudulent transactions and provide details of the unauthorized activity.\n3. Request to block or deactivate the affected card or account.\n4. Follow any additional instructions provided by your bank to resolve the issue.",
  },
  {
    question: "Can I set up account alerts for unusual transactions?",
    answer:
      "Yes, many banks offer account alert services. You can set up alerts for unusual transactions, large withdrawals, or any other specific activity. Check with your bank to explore the available alert options and customize them according to your preferences.",
  },
  {
    question: "What should I do if my card is damaged?",
    answer:
      "If your debit/credit card is damaged, follow these steps:\n1. Contact your bank or credit card issuer.\n2. Report the damage and request a replacement card.\n3. Destroy the damaged card securely by cutting it into multiple pieces.\n4. Activate the new card once you receive it.",
  },
  {
    question: "Is there a way to dispute a transaction on my account?",
    answer:
      "Yes, if you believe a transaction on your account is incorrect or unauthorized, you can dispute it. Contact your bank or credit card issuer, provide details of the disputed transaction, and follow their dispute resolution process. Be sure to report the issue promptly for a quicker resolution.",
  },
  {
    question: "What steps should I take if I forget my card PIN?",
    answer:
      "If you forget your card PIN, follow these steps:\n1. Contact your bank or credit card issuer.\n2. Request a PIN reset or reissue.\n3. Authenticate your identity through the bank's security measures.\n4. Choose a new PIN and update it securely. Avoid using easily guessable PINs for your security.",
  },
];

const HomeOneFaq = () => {
  const [dropDown, setDropDown] = useState("");
  return (
    <div className="spy120px relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-12 items-center justify-between gap-6">
          <div className="col-start-1 max-lg:col-end-13 lg:col-end-8 xl:col-end-7">
            <SectionSubTitle text="FAQ" />
            <SectionTitle text="Frequently ASked Questions" />
            <div className="spt60px">
              <div className="flex flex-col justify-between gap-8">
                {faqData?.map(({ question, answer }, index) => (
                  <SingleFaq
                    key={`faq-${question}`}
                    id={`faq-${index}`}
                    question={question}
                    answer={answer}
                    dropDown={dropDown}
                    setDropDown={setDropDown}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-8 xl:col-start-9">
            <Image
              src={faqImage}
              width={457}
              height={476}
              alt="faq image"
              className="max-lg:mx-auto max-lg:block"
            />
          </div>
        </div>
      </div>
      <Lines />
      <Image
        src={faqDonate}
        width={219}
        height={200}
        alt="faq donate"
        className="absolute right-5 top-5 max-lg:size-20 animate-spin-slow sm:right-20 sm:top-16 lg:max-4xl:size-40 shrink-0 4xl:right-[132px] 4xl:top-[74px]"
      />
      <Image
        src={faqCoin}
        width={229}
        height={193}
        alt="faq coin"
        className="absolute bottom-[87px] left-0 hidden 4xl:block"
      />
    </div>
  );
};

export default HomeOneFaq;
