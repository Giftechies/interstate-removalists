
import {transformNavbarData} from "./transformNavbarData"
const base_url ="https://checkdemo.live/movers/public"

export  async function fetchPropertyData(){
    try {
        const res = await fetch(`${base_url}/api/property-types`,{
            method:'GET' , cache:"no-cache"
        })

        const data = await res.json()
        console.log("propert>> fetch",data);
        
        return data 
        
        
    } catch (error) {
         console.log(error)
        
    }

}
 
export async function fetchVaritions(){
    try {
        const res = await fetch(`${base_url}/api/variations`,{
            method:"GET", cache:"no-cache"
        })
        const data = await res.json()
        return data
    } catch (error) {
         console.log(error)
        
    }
}

export async function  fetchinventory(){
    try {
        const res = await fetch(`${base_url}/api/categories`,{
            method:'GET', cache:"no-cache"
        })
        const data = await res.json()
        return data
        
        
    } catch (error) {
         console.log(error)
        
    }
}

export async function faqsData(){
    try {
        const res = await fetch(`${base_url}/api/faqs`,{
            method:'GET', cache:"no-cache"
        })
        const data = await res.json()
        return data 
    } catch(error){
         console.log( "faq", error)
    }
}


export async function pagesData(id) {
    try {
        const res = await fetch(` ${base_url}/api/pages/${id} `,{
            method:"GET",cache:"no-cache"
        })
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error);
       const data={data:"Something went wrong!! Please try again later.",success:false}
        return data 
        
    }
    
}

export async function serviceData(){
    try {
        const res = await fetch(`${base_url}/api/services`,{
            method:"GET", cache:"no-cache"
        })
        const data = await res.json()
        return data
        
    } catch (error) {
        console.log(error);
    }
}
export async function NavbarData(){
    try {
        const res = await fetch(`${base_url}/api/top-bar`,{method:"GET",cache:"no-cache"})
        const data = await res.json()
        return transformNavbarData(data)

        
    } catch (error) {
        console.log(error);
        
    }
}



export async function BusinessRegister(data) {
  const url = `${base_url}/api/register-business`;
  
  // 1. Create a FormData object for multipart/form-data encoding
  const formData = new FormData();
  
  // 2. Append form fields from the data object
  for (const key in data) {
    // Exclude the 'confirmPassword' field as the API typically doesn't need it.
    if (key !== "confirmPassword") {
      formData.append(key, data[key]);
    }
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData, // 🔑 Pass the FormData object here
    });


    const result = await response.json();
    return { success: true, ...result }; // Ensure it returns a success flag or structure

  } catch (error) {
    console.error("Error registering business:", error);
    // Return a structured object for the form handler to process
    return { success: false, message: error.message }; 
  }
}

export async function fetchUserlogin(credentials) {
  try {
    const res = await fetch(`${base_url}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const json = await res.json();
    if (!res.ok) {
      return { success: false, message: json?.message || `Request failed: ${res.status}` };
    }
    // Keep original API structure under `data` for consistency with your backend
    return { success: true, data: json.data || json };
  } catch (err) {
    return { success: false, message: err?.message || "Network error" };
  }
}

export async function Logout(token){
  try {

    const res = await fetch(`${base_url}/api/logout`,{method:"POST",
      headers:{
        "content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      },
    },)
    if (!res.ok) {
      // Throw an error if the HTTP status is not 2xx
      const errorData = await res.json();
      throw new Error(errorData.message || `Logout failed with status ${res.status}`);
    }

    // The backend might return success message in JSON, but we assume success if res.ok is true
    const res1 = await res.json();

    return {
      success: true,
      message: res1.message || 'User Logout successfully!'
    };
    
  } catch (error) {
    return{
      success:false,
      message:error?.message || "logout failed!"
    }
    
  }
}


export async function fetchuserProfile (token){
  console.log(token,"in api");
  try {
    const res =  await fetch(`${base_url}/api/profile`,{
      method:'GET',
      headers:{
       "Content-Type":"application/json",
       "Authorization":`Bearer ${token}`
      }
    

    })
    
    const response = await res.json()
    if(!res.ok){
      return {
        success:false,
        message:response?.message || `Request failed with ${res.status}`
      }
    }
 
    
 return {
 success:true,
 data:response}
    
  } catch (error) {
    return {success:false,message:error.message || "something went wrong while fetching user data"}
    
  }
}


export async function Orders(token) {
  try {
    
    const res = await fetch(`${base_url}/api/orders/user`,{method:'GET',
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
        
      }
    })
    const response =await res.json()
    if(!res.ok){
   return {
    success:false,
    message:response.message || "order not fetch.Please try again!"
  }
    }


    return {
      success:true,
      message:response.message || "order fetched",
      data:response?.data
    }
    
  } catch (error) {
    return {success:false,message:error.message || "something went wrong!!!"}
    
  }
  
}


export async function OrderCancel(orderId,reason,token){
  try {
    const res = await fetch(`${base_url}/${orderId}/cancel`,{method:"POST",
   headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({reason})
    })
    
  } catch (error) {
        return {seccuess:false,message:error.message || "something went wrong!!!"}
    
  }
}

export async function OrderReschedule(orderId, reason, new_date, token) {
  try {
    const res = await fetch(`${base_url}/api/orders/${orderId}/reschedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(
        {reason,
        new_date,}
      ),
    });

    const data = await res.json();

    // Handle both success & validation errors (422)
    if (!res.ok) {
      return {
        success: false,
        message: data?.message || "Failed to reschedule order",
        errors: data?.errors || null,
      };
    }

    return {
      success: true,
      message: data?.message || "Order rescheduled successfully",
      data,
    };
  } catch (error) {
    console.error("Reschedule error:", error);
    return {
      success: false,
      message: error.message || "Something went wrong!",
    };
  }
}



export async function submitOrder(data){
  
  try {
    const res = await fetch(`${base_url}/api/submit-order`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    })
    const res1 = res.json()
    if(!res.ok){
      return{
        success:false,
        message: res1.message || 'Order not submit. Try again!'
      }
    }
    return res1
  } catch (error) {
    return{
      success:false,
      message:error.message || `Something went wrong`
    }
  }
}

export async function changePasswordApi(new_password,current_password){
  try {
    const res1 = dfd
    
  } catch (error) {
    
  }
}
export async function updateProfile(name,mobile,email,token){
  try {
    const res1 = await fetch(`${base_url}/api/profile/update`,{
      method:"POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(
        {name,email,mobile}
      ),
    });

    const res = await res1.json()
    if(!res1.ok){
      return{
        success:false,
        message:res.messsage || " Profile update fail. Please try again!"
      }
    }

    return {
      success:true,
      message: res.message || "Profile updated successfully!",
      data:res
    }
    
  } catch (error) {
      return{
        success:false,
        message:error.messsage || " Profile update fail. Please try again!"
      }
    
  }
}

