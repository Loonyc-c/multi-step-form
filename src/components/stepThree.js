import Header from "./header";
import RightArrow from "@/icon/right-arrow";
import { useEffect, useState } from "react";
import XButton from "@/icon/X-button";
export default function StepThree({ setStep }) {

    const [formValue, setFormValue] = useState(()=>{
    // return JSON.parse(localStorage.getItem("pageThreeLocaleStorage"))
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
        if ((Object.keys(newErrors).length === 0)) {
            setStep((prev) => prev + 1)
        }
        // console.log(newErrors)
    }
    // console.log(errors)

    const returnPrevStep = () => {
        setStep((prev) => prev - 1)
    }
    // console.log(formValue)

    useEffect(() => {
        if (formValue?.dateBirth) {
            localStorage.setItem("dateBirthLocal", formValue?.dateBirth);
        }
    }, [formValue?.dateBirth]);

    useEffect(() => {
        const storedData = {
            dateBirth: localStorage.getItem("dateBirthLocal") || "",
        };
        setFormValue((prev) => ({ ...prev, ...storedData }));
        // console.log(storedData)
    }, []);

    // useEffect(()=>{
    //     const storedData = JSON.parse(localStorage.getItem("pageThreeLocaleStorage"))
    //     setFormValue((prev) => ({...prev, ...storedData}))
        

    // })

    // useEffect(()=>{
    //    localStorage.setItem("pageThreeLocaleStorage", JSON.stringify(formValue?.dateBirth))
    // },[formValue?.dateBirth])

    const removeProfile = () => {
        setFormValue({ ...formValue, profilePicture: null })
    }

    return (
        <div className="w-[480px] p-[32px] bg-[white] flex flex-col gap-[100px] ">
            {/* form  */}
            <div className="flex flex-col gap-[40px]">
                <Header />
                <div className="flex flex-col gap-[10px]">
                    {/* date birth input*/}
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="dateBirth">Date of birth <span className="text-red-500">*</span></label>
                        <input
                            value={formValue?.dateBirth || ""}
                            id="dateBirth"
                            type="date"
                            onChange={dateBirthChange}
                            className="border w-[100%] h-[68px] rounded-lg px-[16px]"

                        />
                        {errors.dateBirth && <p className="text-red-500">{errors.dateBirth}</p>}
                    </div>
                    {/* profile picture input*/}
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="profilePicture">
                            Profile picture <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="profilePicture"
                            accept="image/*"
                            onChange={imageChange}
                            type="file"
                            className="border w-[100%] h-[240px] opacity-0 absolute z-10"
                        />
                        <div className="w-[420px] h-[240px] rounded-lg bg-[whitesmoke] flex justify-center items-center relative">
                            <p>Browse or Drop Image</p>
                            {formValue?.profilePicture && (
                                <div className=" absolute w-[100%] z-20 h-[100%] object-cover rounded-lg">
                                    <img
                                        className="w-[100%] h-[100%]  object-cover rounded-lg"
                                        src={URL.createObjectURL(formValue.profilePicture)}
                                        alt="Preview"
                                    />
                                    <button onClick={removeProfile} className="absolute mt-[-225px] ml-[380px]"><XButton /></button>
                                </div>
                            )}
                        </div>
                        {errors.profilePicture && <p className="text-red-500">{errors.profilePicture}</p>}
                    </div>

                </div>
            </div>
            {/* Footer */}
            <div className="flex gap-[10px]">
                <button
                    onClick={returnPrevStep}
                    className="w-[30%] border border-[gray] text-black flex h-[40px] justify-center items-center rounded-lg">
                    Back
                </button>
                <button
                    onClick={inputChecker}
                    className="w-[70%] bg-[black] text-[white] flex h-[40px] justify-center items-center rounded-lg">
                    Continue 3/3 <RightArrow />
                </button>
            </div>
        </div>
    );
}