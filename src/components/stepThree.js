'use client'
import Header from "./header";
import RightArrow from "@/icon/right-arrow";
import { useState } from "react";
export default function StepThree({ setStep }) {

    const [formValue, setFormValue] = useState({})
    const [errors, setErrors] = useState({})

    const dateBirthChange = (e) => {
        setFormValue({ ...formValue, dateBirth: e.target.value })
    }

    const inputChecker = () => {
        const newErrors = {}
        if (!dateBirth) {
            newErrors.dateBirth = "Төрсөн огноо оруулна уу!";
        } 

        // else if (new Date(dateBirth) >= new Date("2021-01-01")) {
        //     newErrors.dateBirth = "Төрсөн огноо 2021 оноос өмнө байх ёстой!";
        // }
        setErrors(newErrors)
        // setStep((prev) => prev + 1)
    }

    const returnPrevStep = () => {
        setStep((prev) => prev - 1)
    }
    console.log(formValue)
    return (
        <div className="w-[480px] p-[32px] bg-[white] flex flex-col gap-[100px] ">
            {/* form  */}
            <div className="flex flex-col gap-[40px]">
                <Header />
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="dateBirth">Date of birth *</label>
                        <input
                            id="dateBirth"
                            type="date"
                            // max="2020-12-31"
                            onChange={dateBirthChange}
                            className="border w-[100%] h-[68px] rounded-lg px-[16px]"

                        />
                        {errors.dateBirth && <p className="text-red-500">{errors.dateBirth}</p>}
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="profilePicture">Date of birth *</label>
                        <input
                            id="profilePicture"
                            type="file"
                            className="border w-[100%] h-[240px] bg-[#7F7F800D] rounded-lg px-[16px]"
                        />
                    </div>

                </div>
            </div>
            {/* Footer */}
            <div className="flex gap-[10px]">
                <button
                    onClick={returnPrevStep}
                    className="w-[30%] border border-[gray] text-black flex h-[40px] justify-center items-center rounded-lg"> Back </button>
                <button
                    onClick={inputChecker}
                    className="w-[70%] bg-[black] text-[white] flex h-[40px] justify-center items-center rounded-lg">
                    Continue 3/3 <RightArrow />
                </button>
            </div>
        </div>


    );

}