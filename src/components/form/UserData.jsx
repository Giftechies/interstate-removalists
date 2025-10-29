'use client'

export default function UserData({register,}){
    return(
        <div className="w-full" >
            <span className=" h2 font-semibold " >Discover your 5+ instant prices</span>
            <span className=" text-black-3 h6 " >We do not share your personal information with removalists until you book.</span>
            <div className="w-full" >
                <input type='text' {...register("name",{required:true})} className=" w-full border " />
                <div>
                    <input type="text" />
                    <input type="text" />
                </div>
            </div>


        </div>
    )
}