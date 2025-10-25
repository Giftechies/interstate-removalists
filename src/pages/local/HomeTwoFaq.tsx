"use client";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import { useEffect, useState } from "react";
// import { faqData } from "../home-one/HomeOneFaq";
import HomeTwoSingleFaq from "../landing-two/HomeTwoSingleFaq";
import {faqsData} from "@/data/formdata"

const HomeTwoFaq = () => {
  const [dropDown, setDropDown] = useState("");
  let [faqData,setFaqData] = useState<any[]>([])
  let [faqData2,setFaqData2] = useState<any[]>([])
useEffect(()=>{
  ;(
    async()=>{
      const data = await faqsData()
      const res = data.data.slice(0,Math.ceil(data.data.length/2))
      const res2 = data.data.slice(Math.ceil(data.data.length/2),data.data.length)
      setFaqData(res)
      setFaqData2(res2)
    }
  )()
},[])
  
  return (
    <div className="spy80px relative overflow-hidden">
      <div className="container">
        <SectionSubTitle text="FAQ" className="text-center" />
        <SectionTitle
          text="Frequently Asked Questions"
          className="mt-3 text-center capitalize "
        />
        <div className="spt60px grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-5">
            {faqData?.map(({ question, answer }, index) => (
              <HomeTwoSingleFaq
                key={`faq-${question}`}
                id={`faq-${index}`}
                question={question}
                answer={answer}
                dropDown={dropDown}
                setDropDown={setDropDown}
              />
            ))}
          </div>
          <div className="flex flex-col justify-between gap-5">
            {faqData2?.map(({ question, answer }, index) => (
              <HomeTwoSingleFaq
                key={`faq2-${question}`}
                id={`faq2-${index}`}
                question={question}
                answer={answer}
                dropDown={dropDown}
                setDropDown={setDropDown}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwoFaq;
