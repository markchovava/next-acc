"use client";
import {setCookie, deleteCookie } from 'cookies-next';



export const tokenRoleName = 'AFRICACC_ROLE_TOKEN';
const cookieDuration = 60 * 60 * 24 * 30 * 30;

export const tokenRole = () => {
    
    const setRoleToken = (token) => {
        if(typeof window !== 'undefined'){
            localStorage.setItem(tokenRoleName, token);
            setCookie(tokenRoleName, token, { maxAge: cookieDuration });
        }
    }

    const getRoleToken = () => {
        if(typeof window !== 'undefined'){
            const token =  localStorage.getItem(tokenRoleName);
            return token;
        }
    }

    const removeRoleToken = () => {
        if(typeof window !== 'undefined'){
            localStorage.removeItem(tokenRoleName);
            deleteCookie(tokenRoleName);
        }
    }


    return {
        setRoleToken, 
        getRoleToken,
        removeRoleToken
    }

}