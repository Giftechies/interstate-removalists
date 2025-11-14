import { useState } from "react"


export default function ChangePassword(){

    const [currentPassword,setCurrentPassword] = useState()
    const [newPassword,setNewPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()

    const changePasswordHandler= async ()=>{

    }

    return(
        <>
        <h2>Change Password.</h2>
       <form onSubmit={changePasswordHandler} className="pl-4" >
      <span className="flex flex-col gap-1 mt-4 " >
          <label className="h6">Current Password</label>
        <input type="password" placeholder="current password" className=" formInput !w-60  " onChange={(e)=>setCurrentPassword(e.target.value)} />
      </span>

      {/* new password */}
    <div className="mt-4 flex flex-col gap-2 ">
          <h2>New Password</h2>
      <span className="flex flex-col gap-1" >
          <label className="h6">Current Password</label>
        <input type="password" placeholder="current password" className=" formInput !w-60 " onChange={(e)=>setNewPassword(e.target.value)} />
      </span>
      <span className="flex flex-col gap-1" >
          <label className="h6">Current Password</label>
        <input type="password" placeholder="current password" className=" formInput !w-60 " onChange={(e)=>setConfirmPassword(e.target.value)} />
      </span>

    </div>

    <button type="submit" className=" bg-prim px-4 py-2 rounded-lg text-white-1 hover:opacity-90 mt-4" >Change Password</button>

       </form>
       </>
    )
}