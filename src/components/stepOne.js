'use client'
import RightArrow from "@/icon/right-arrow";
import Header from "@/components/header";
import { useState } from "react";

export default function StepOne({setStep}) {
    // const [firstNameValue, setFirstNameValue] = useState("")
    // const [lastNameValue, setLastNameValue] = useState("")
    const [errors, setErrors] = useState({})
    const [formValue, setFormValue] = useState({})

    function firstNameChange(e) {
        setFormValue({ ...formValue, firstName: e.target.value })
        localStorage.setItem("firstNameLocal", formValue.firstName)
        // console.log(`first name value: ${formValue.firstName}`)
        let firstName = localStorage.getItem("firstNameLocal" )
        console.log(firstName)
    }
    // console.log("this" + formValue.firstName)

    function lastNameChange(e) {
        setFormValue({ ...formValue, lastName: e.target.value })
        // console.log(`last name value: ${formValue.lastName}`)
    }

    function userNameChange(e) {
        setFormValue({ ...formValue, userName: e.target.value })
    }

    // console.log(formValue)

    function inputChecker() {
        const minValue = 1
        const newErrors = {}

        if (!formValue.firstName || formValue.firstName.length < minValue) {
            newErrors.firstName = "Нэрээ оруулна уу!";
        }
        if (!formValue.lastName || formValue.lastName.length < minValue) {
            newErrors.lastName = "Овгоо оруулна уу!";
        }
        if (!formValue.userName || formValue.userName.length < minValue) {
            newErrors.userName = "Хэрэглэгчийн нэрээ оруулна уу!";
        }
        setErrors(newErrors)

        // if (Object.keys(newErrors).length === 0) {
        //     setStep(2)
        // }

        setStep((prev)=> prev +1)
    }
    // console.log(errors)

    return (
       
            <div className="w-[480px] p-[32px] bg-[white] flex flex-col gap-[100px] ">
                {/* form  */}
                <div className="flex flex-col gap-[40px]">
                    <Header />
                    <div className="flex flex-col gap-[10px]">
                        <div className="flex flex-col gap-[5px]">
                            <label htmlFor="firstName">First name *</label>
                            <input
                                id="firstName"
                                onChange={firstNameChange}
                                className={`border w-[100%] h-[40px] rounded-lg ${errors.firstName ? "border-red-500" : ""}`}
                                placeholder="First name" 
                                
                                />
                            {errors.firstName && <p className="text-[red]">{errors.firstName}</p>}
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <label htmlFor="lastName">Last name *</label>
                            <input
                                id="lastName"
                                onChange={lastNameChange}
                                className={`border w-[100%] h-[40px] rounded-lg ${errors.lastName ? "border-red-500" : ""}`}
                                placeholder="Last name" />
                            {errors.lastName && <p className="text-[red]">{errors.lastName}</p>}
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <label htmlFor="userName">User name *</label>
                            <input
                                id="userName"
                                onChange={userNameChange}
                                className={`border w-[100%] h-[40px] rounded-lg ${errors.userName ? "border-red-500" : ""}`}

                                placeholder="User name" />
                            {errors.userName && <p className="text-[red]">{errors.userName}</p>}
                        </div>
                    </div>
                </div>
                {/* continue */}
                <div >
                    <button onClick={inputChecker} className="w-[100%] bg-[black] text-[white] flex h-[40px] justify-center items-center rounded-lg">
                        Continue 1/3 <RightArrow />
                    </button>
                </div>
            </div>

        
    );
}
