import Header from "./header";
import RightArrow from "@/icon/right-arrow";
import { useState } from "react";
export default function StepTwo({setStep}) {

    const [formValue, setFormValue] = useState({})
    const [errors, setErrors] = useState({})
    
    function emailChange(e) {
        setFormValue({ ...formValue, email: e.target.value })
        // console.log(formValue.email)
    }
    function phoneNumberChange(e) {
        setFormValue({ ...formValue, phoneNumber: e.target.value })
        // console.log(formValue.phoneNumber)
    }
    function passwordChange(e) {
        setFormValue({ ...formValue, password: e.target.value })
        // console.log(formValue.password)
    }

    function confirmPasswordChange(e) {
        setFormValue({ ...formValue, confirmPassword: e.target.value })
        // console.log(formValue.confirmPassword)
    }

    const inputChecker = () => {
        const newErrors = {}
        const emailValue = formValue.email
        const phoneNumberValue = formValue.phoneNumber
        const password = formValue.password
        const confirmPassword = formValue.confirmPassword
        // const mongolianPhoneRegex = /^(\+976|976)?[789][0-9]{7}$/;


        if (!emailValue || !emailValue.includes("@")) {
            newErrors.email = "Мэйл хаягаа оруулна уу !"
        } 
        // if (!phoneNumberValue || !phoneNumberValue.includes(mongolianPhoneRegex) ){
        //     newErrors.phoneNumber = "Утасны дугаараа оруулна уу !"
        // }
        if (!phoneNumberValue || phoneNumberValue.length !== 8 ){
            newErrors.phoneNumber = "Утасны дугаараа оруулна уу !"
        }
        if (!password || password.length < 6) {
            newErrors.password = "Нууц үг дор хаяж 6 тэмдэгттэй байх ёстой!";
        }

        if (password !== confirmPassword){
            newErrors.confirmPassword = "Нууц үг таарахгүй байна!"
        }
        setErrors(newErrors)

        // if (Object.keys(newErrors).length === 0) {
        //     setStep(3)
        // }
        
        setStep((prev)=> prev +1)
    }

    const returnPrevStep = () =>{
        setStep((prev)=> prev -1)
    }
    return (
        <div className="w-[480px] p-[32px] bg-[white] flex flex-col gap-[100px] ">
            {/* form  */}
            <div className="flex flex-col gap-[40px]">
                <Header />
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="email">Email *</label>
                        <input
                            id="email"
                            placeholder="Your email"
                            onChange={emailChange}
                            className={`border w-[100%] h-[40px] rounded-lg ${errors.email ? "border-red-500" : ""}`}
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="phone">Phone number*</label>
                        <input
                            placeholder="Your phone number"
                            id="phone"
                            onChange={phoneNumberChange}
                            className={`border w-[100%] h-[40px] rounded-lg ${errors.phoneNumber ? "border-red-500" : ""}`}
                        />
                        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="password">Password *</label>
                        <input
                            placeholder="Your password"
                            id="password"
                            onChange={passwordChange}
                            className={`border w-[100%] h-[40px] rounded-lg ${errors.password ? "border-red-500" : ""}`}
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="Confirm password">Confirm password *</label>
                        <input
                            placeholder="Confirm password"
                            id="Confirm password"
                            onChange={confirmPasswordChange}
                            className={`border w-[100%] h-[40px] rounded-lg ${errors.confirmPassword ? "border-red-500" : ""}`}
                        />
                        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="flex gap-[10px]">
                <button onClick={returnPrevStep} className="w-[30%] border border-[gray] text-black flex h-[40px] justify-center items-center rounded-lg"> Back </button>
                <button
                    onClick={inputChecker}
                    className="w-[70%] bg-[black] text-[white] flex h-[40px] justify-center items-center rounded-lg">
                    Continue 2/3 <RightArrow />
                </button>
            </div>
        </div>


    );

}