"use server";
import { baseURL } from "@/api/baseURL";
import { revalidatePath } from "next/cache";


export async function qrcodeIndexAction(token) {
    const res = await fetch(`${baseURL}api/qrcode`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }); 
    revalidatePath('/qrcode');
    return await res.json();
}


export async function qrcodeSearchAction(search, token) {
    const res = await fetch(`${baseURL}api/qrcode-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }); 
    revalidatePath('/qrcode');
    return await res.json();
}

export async function qrcodeStoreByNumAction(data, token) {
    const res = await fetch(`${baseURL}api/qrcode-store-by-num`, {
      'method': 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }); 
    revalidatePath('/admin/qrcode');
    return await res.json();
}


export async function qrcodeStoreAction(data, token) {
    const res = await fetch(`${baseURL}api/qrcode`, {
      'method': 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }); 
    revalidatePath('/qrcode');
    return await res.json();
}


export async function qrcodeViewAction(id, token) {
    const res = await fetch(`${baseURL}api/qrcode/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }); 
    revalidatePath(`/qrcode/${id}`);
    return await res.json();
}


export async function qrcodeDeleteAction(id, token) {
    const res = await fetch(`${baseURL}api/qrcode/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }); 
    revalidatePath(`/qrcode/${id}`);
    return await res.json();
}


export async function qrcodeIndexByStatusAction(status, token) {
    const res = await fetch(`${baseURL}api/qrcode-index-by-status?status=${status}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }); 
    revalidatePath(`/qrcode/${id}`);
    return await res.json();
}


  
