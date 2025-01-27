'use client'

import StepOne from "@/components/stepOne";
import StepTwo from "@/components/stepTwo";
import StepThree from "@/components/stepThree";
import StepFour from "@/components/stepFour";
import { useEffect, useState } from "react";

export default function Home() {

  const [step, setStep] = useState(1)
  console.log(step)

  // useEffect(()=>{
  //   const localStorage = JSON.getItem(localStorage.getItem("stepStorage"))
  // },[])
  // useEffect(()=>{
  //  localStorage.setItem("stepStorage", JSON.stringify(step))
  // },[step])

    
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[whitesmoke]">
      {step === 1 && <StepOne setStep = {setStep}/>}
      {step === 2 && <StepTwo setStep = {setStep}/>}
      {step === 3 && <StepThree setStep = {setStep}/>}
      {step === 4 && <StepFour setStep = {setStep} />}
    </div>
  );
}
// if(typeof window !== "undefined")