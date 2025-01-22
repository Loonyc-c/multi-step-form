import Header from "./header";
import RightArrow from "@/icon/right-arrow";
import { useState } from "react";
export default function StepThree({ setStep }) {

    const [formValue, setFormValue] = useState({
        dateBirth: "",
        profilePicture: null
    })
    const [errors, setErrors] = useState({})
    

    const dateBirthChange = (e) => {
        setFormValue({ ...formValue, dateBirth: e.target.value })
    }

    const imageChange = (e) => {
        setFormValue({ ...formValue, profilePicture: e.target.files[0] })
    }


    const inputChecker = () => {
        const newErrors = {}
        const currentDate = new Date()
        const selectedDate = new Date(formValue.dateBirth)
        const age = currentDate.getFullYear() - selectedDate.getFullYear()
        // const monthDiff = currentDate.getMonth() - selectedDate.getMonth()
        // const dayDiff = currentDate.getDate() - selectedDate.getDate()
        // console.log(currentDate)
        // console.log(selectedDate)
        // console.log(formValue.dateBirth, age)
        // console.log(monthDiff)
        // console.log(dayDiff)

        if (!formValue.dateBirth) {
            newErrors.dateBirth = "Төрсөн огноо оруулна уу!";
        } else if (age <= 18) {
            newErrors.dateBirth = "Та 18 ба түүнээс дээш настай байх ёстой !";
        }

        if (!formValue.profilePicture) {
            newErrors.profilePicture = "Профайл зурагаа оруулна уу !"
        }

        setErrors(newErrors)
        setStep((prev) => prev + 1)
        // console.log(newErrors)
    }
    // console.log(errors)

    const returnPrevStep = () => {
        setStep((prev) => prev - 1)
    }
    // console.log(im)
    // console.log(formValue)
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
                            accept="image/*"
                            onChange={imageChange}
                            type="file"
                            className="border w-[100%] h-[240px] bg-[] rounded-lg px-[16px] opacity-0 z-20"
                        />
                        <div className="w-[420px] h-[240px] rounded-lg bg-[whitesmoke] absolute flex justify-center items-center"> 
                            <p>Browse or Drop Image</p>
                        {formValue.profilePicture && <img className="absolute w-[100%] h-[100%]" src={URL.createObjectURL(formValue.profilePicture)} />}
                        </div>
                        {errors.profilePicture && <p>{errors.profilePicture}</p>}
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