
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
        const data = res.json()
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
// formdata.jsx

// Assuming base_url is defined elsewhere (e.g., const base_url = "https://checkdemo.live/movers/public";)

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

export   async  function login(data){

    try {
        const response  = await fetch(`${base_url}/api/login`,{
            method:"GET",
            body:JSON.stringify(data)
        })
        
    } catch (error) {
        console.log(error)
        return{success:false,message: error.message}
        
    }
}