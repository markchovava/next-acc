import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";




export const checkAuthCookie = () => {
    const authCookie = getCookie('AFRICACC_AUTH_TOKEN', { cookies });
    
    if(authCookie){
        return;
    }else{
        redirect('/login')
    }

} 



