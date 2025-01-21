'use client'
import RightArrow from "@/icon/right-arrow";
import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function Home() {
  // const [firstNameValue, setFirstNameValue] = useState("")
  // const [lastNameValue, setLastNameValue] = useState("")
  const [errors, setErrors] = useState({})
  const [formValue, setFromValue] = useState({})

  function firstNameChange(e) {
    setFromValue({ ...formValue, firstName: e.target.value })
    // console.log(`first name value: ${formValue.firstName}`)
  }

  function lastNameChange(e) {
    setFromValue({ ...formValue, lastName: e.target.value })
    // console.log(`last name value: ${formValue.lastName}`)
  }

  function userNameChange(e) {
    setFromValue({ ...formValue, userName: e.target.value })
  }

  // console.log(formValue)

  function inputChecker() {
    const minValue = 1

    if (!formValue.firstName || formValue.firstName.length < minValue) {
      setErrors((prev) => ({ ...prev, firstName: "Нэрээ оруулна уу !" }))
    }
    if (!formValue.lastName || formValue.lastName.length < minValue) {
      setErrors((prev) => ({ ...prev, lastName: "Овгоо оруулна уу!" }))
    }
    if (!formValue.userName || formValue.userName.length < minValue) {
      setErrors((prev) => ({ ...prev, userName: "Хэрэглэгчийн нэрээ оруулна уу!" }))
    }
  }
  console.log(errors)

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[whitesmoke]">
      <div className="w-[480px] p-[32px] bg-[white] flex flex-col gap-[100px] ">
        {/* form  */}
        <div className="flex flex-col gap-[40px]">
          <Header />
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <label>First name *</label>
              <input id="firstNameInput" onChange={firstNameChange} className="border w-[100%] h-[40px] rounded-lg" placeholder="First name" />
              {errors.firstName && <p className="text-[red]">{errors.firstName}</p>}
            </div>
            <div className="flex flex-col gap-[5px]">
              <b>Last name *</b>
              <input onChange={lastNameChange} className="border w-[100%] h-[40px] rounded-lg" placeholder="Last name" />
              {errors.lastName && <p className="text-[red]">{errors.lastName}</p>}
            </div>
            <div className="flex flex-col gap-[5px]">
              <b>User name *</b>
              <input onChange={userNameChange} className="border w-[100%] h-[40px] rounded-lg" placeholder="User name" />
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

    </div>
  );
}
