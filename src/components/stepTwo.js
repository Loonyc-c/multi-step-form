import Header from "./header";
import RightArrow from "@/icon/right-arrow";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function StepTwo({setStep}) {

    const [formValue, setFormValue] = useState(()=>{
        return JSON.parse(localStorage.getItem("stepTwolocalStorage"))
    })
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
        const emailValue = formValue?.email
        const phoneNumberValue = formValue?.phoneNumber
        const password = formValue?.password
        const confirmPassword = formValue?.confirmPassword
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneNumberRegex = /^(8\d{7}|9\d{7}|7\d{7}|6\d{7})$/


        if (!emailValue) {
            newErrors.email = "Мэйл хаягаа оруулна уу !"
        } else if (!emailRegex.test(emailValue)){
            newErrors.email = "Зөв мэйл хаяг оруулна уу !"
        }
     
        if (!phoneNumberValue  ){
            newErrors.phoneNumber = "Утасны дугаараа оруулна уу !"
        } else if (!phoneNumberRegex.test(phoneNumberValue)){
            newErrors.phoneNumber = "Зөв утасны дугаараа оруулна уу !"
        }
        if (!password || password.length < 6) {
            newErrors.password = "Нууц үг дор хаяж 6 тэмдэгттэй байх ёстой!";
        }

        if (password !== confirmPassword){
            newErrors.confirmPassword = "Нууц үг таарахгүй байна!"
        }
        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
             setStep((prev)=> prev +1)
        }
        
        // setStep((prev)=> prev +1)
    }

    const returnPrevStep = () =>{
        setStep((prev)=> prev -1)
    }

    // useEffect(()=>{
    //     if(formValue.email){
    //         localStorage.setItem("emailLocal", formValue.email)
    //     }
    //     if (formValue.phoneNumber) {
    //         localStorage.setItem("phoneNumberLocal", formValue.phoneNumber);
    //     }
    //     if(formValue.password){
    //         localStorage.setItem("passwordLocal", formValue.password)
    //     }
    //     if(formValue.confirmPassword){
    //         localStorage.setItem("confirmPasswordLocal", formValue.confirmPassword)
    //     }
    // },[formValue]);

    // useEffect(()=>{
    //     const storedData = {
    //         email: localStorage.getItem("emailLocal") || "",
    //         phoneNumber: localStorage.getItem("phoneNumberLocal") || "",
    //         password: localStorage.getItem("passwordLocal") || "",
    //         confirmPassword: localStorage.getItem("confirmPasswordLocal") || ""
    //     }
    //     setFormValue(storedData)
    //     // console.log(storedData)
    // },[])

    useEffect(()=>{
        localStorage.setItem("stepTwolocalStorage", JSON.stringify(formValue))
    },[formValue])


    return (
        
        <motion.div 
        animate={{ x: [0, -100, 0] }}
   
        className="w-[480px] p-[32px] bg-[white] flex flex-col gap-[100px] ">
             

            {/* form  */}
            <div className="flex flex-col gap-[40px]">
                <Header />
                <div className="flex flex-col gap-[10px]">
                    {/* email input*/}
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                        <input
                            id="email"
                            value={formValue?.email || ""}
                            placeholder="Your email"
                            onChange={emailChange}
                            className={`border w-[100%] h-[40px] rounded-lg ${errors.email ? "border-red-500" : ""}`}
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    {/* phone number input */}
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="phone">Phone number <span className="text-red-500">*</span></label>
                        <input
                            placeholder="Your phone number"
                            type="number"
                            value={formValue?.phoneNumber || ""}
                            id="phone"
                            onChange={phoneNumberChange}
                            className={`border w-[100%] h-[40px] rounded-lg ${errors.phoneNumber ? "border-red-500" : ""}`}
                        />
                        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                    </div>
                    {/* password input */}
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="password">Password <span className="text-red-500">*</span></label>
                        <input
                            placeholder="Your password"
                            id="password"
                            value={formValue?.password || ""}
                            type="password"
                            onChange={passwordChange}
                            className={`border w-[100%] h-[40px] rounded-lg ${errors.password ? "border-red-500" : ""}`}
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>
                    {/* confirm password input */}
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="Confirm password">Confirm password <span className="text-red-500">*</span></label>
                        <input
                            placeholder="Confirm password"
                            value={formValue?.confirmPassword || ""}
                            id="Confirm password"
                            type="password"
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
        </motion.div>


    );

}