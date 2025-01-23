'use client'
import RightArrow from "@/icon/right-arrow";
import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function StepOne({ setStep }) {

    const [errors, setErrors] = useState({})
    const [formValue, setFormValue] = useState(() => {
        return JSON.parse(localStorage.getItem("localStorage"))
    })

    function firstNameChange(e) {
        setFormValue({ ...formValue, firstName: e.target.value })
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

        if (Object.keys(newErrors).length === 0) {
            setStep((prev) => prev + 1)
        }

    }
    // console.log(errors)

    // useEffect(() => {
    //     if (formValue.firstName) {
    //         localStorage.setItem("firstNameLocal", formValue.firstName);
    //     }
    //     if (formValue.lastName) {
    //         localStorage.setItem("lastNameLocal", formValue.lastName);
    //     }
    //     if (formValue.userName) {
    //         localStorage.setItem("userNameLocal", formValue.userName);
    //     }
    // }, [formValue]);

    // useEffect(() => {
    //     const storedData = {
    //         firstName: localStorage.getItem("firstNameLocal") || "",
    //         lastName: localStorage.getItem("lastNameLocal") || "",
    //         userName: localStorage.getItem("userNameLocal") || "",
    //     };
    //     setFormValue(storedData);
    //     // console.log(storedData)
    // }, []);

    // console.log(JSON.stringify(formValue))
    // console.log(JSON.parse('{}'))

    // const jsonString = JSON.stringify(formValue)
    // console.log(jsonString)
    // const jsonObj = JSON.parse(jsonString)
    // console.log(jsonObj)

    // console.log(formValue)

    // useEffect(() => {
    //     const storedData = JSON.parse(localStorage.getItem("localStorage"))
    //     setFormValue(storedData)
    //     console.log(storedData)
    // }, [])

    // useEffect(()=>{
    //     const storeData = JSON.parse(localStorage.getItem("localStorage") || "")
    //     setFormValue(storeData)
    // },[])

    useEffect(() => {
        localStorage.setItem("localStorage", JSON.stringify(formValue))
    }, [formValue])




    return (

        <div className="w-[480px] p-[32px] bg-[white] flex flex-col gap-[100px] ">
            {/* form  */}
            <div className="flex flex-col gap-[40px]">
                <Header />
                <div className="flex flex-col gap-[10px]">
                    {/* first name */}
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="firstName">First name <span className="text-red-500">*</span></label>
                        <input
                            id="firstName"
                            value={formValue?.firstName || ""}
                            onChange={firstNameChange}
                            className={`border w-[100%] h-[40px] rounded-lg ${errors.firstName ? "border-red-500" : ""}`}
                            placeholder="First name"

                        />
                        {errors.firstName && <p className="text-[red]">{errors.firstName}</p>}
                    </div>
                    {/* last name */}
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="lastName">Last name <span className="text-red-500">*</span></label>
                        <input
                            id="lastName"
                            value={formValue?.lastName || ""}
                            onChange={lastNameChange}
                            className={`border w-[100%] h-[40px] rounded-lg ${errors.lastName ? "border-red-500" : ""}`}
                            placeholder="Last name" />
                        {errors.lastName && <p className="text-[red]">{errors.lastName}</p>}
                    </div>
                    {/* user name */}
                    <div className="flex flex-col gap-[5px]">
                        <label htmlFor="userName">User name <span className="text-red-500">*</span></label>
                        <input
                            id="userName"
                            value={formValue?.userName || ""}
                            onChange={userNameChange}
                            className={`border w-[100%] h-[40px] rounded-lg ${errors.userName ? "border-red-500" : ""}`}

                            placeholder="User name" />
                        {errors.userName && <p className="text-[red]">{errors.userName}</p>}
                    </div>
                </div>
            </div>
            {/* footer */}
            <div >
                <button onClick={inputChecker} className="w-[100%] bg-[black] text-[white] flex h-[40px] justify-center items-center rounded-lg">
                    Continue 1/3 <RightArrow />
                </button>
            </div>
        </div>


    );
}
