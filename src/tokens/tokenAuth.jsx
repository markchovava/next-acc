"use client";
import {setCookie, deleteCookie } from 'cookies-next';



export const tokenAuthName = 'AFRICACC_AUTH_TOKEN';
const cookieDuration = 60 * 60 * 24 * 30 * 30;

export const tokenAuth = () => {
    const setAuthToken = (token) => {
        if(typeof window !== 'undefined'){
            localStorage.setItem(tokenAuthName, token);
            setCookie(tokenAuthName, token, { maxAge: cookieDuration });
        }
    }
    const getAuthToken = () => {
        if(typeof window !== 'undefined'){
            const token =  localStorage.getItem(tokenAuthName);
            return token;
        }
    }
    const removeAuthToken = () => {
        if(typeof window !== 'undefined'){
            localStorage.removeItem(tokenAuthName);
            deleteCookie(tokenAuthName);
        }
    }

    return {
        setAuthToken, 
        getAuthToken,
        removeAuthToken
    }

  }