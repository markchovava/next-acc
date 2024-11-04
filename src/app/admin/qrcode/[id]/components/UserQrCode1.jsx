"use client"
import * as htmlToImage from "html-to-image";
import { useRef, useState } from "react";
import QRCode from "react-qr-code";



export default function UserQrCode1({ dbData }) {
    const [url, setUrl] = useState(dbData?.code);
    const qrCodeRef = useRef(null);

    const downloadQRCode = () => {
        htmlToImage
          .toPng(qrCodeRef.current)
          .then(function (dataUrl) {
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = qrCodeData + '.png';
            link.click();
          })
          .catch(function (error) {
            console.error("Error generating QR code:", error);
          });
    };


  return (
    <>
    <div className="qrcode__container">
        <div className="qrcode__container--parent">
            <div className="qrcode__download">
              <div className="w-[300px] p-[25px] bg-white" ref={qrCodeRef}>
                <QRCode value={url} size={250} />
              </div>
            <button className="mx-[25px] bg-slate-700 hover:bg-slate-800 drop-shadow-lg px-[1.2rem] py-[0.8rem] text-white rounded-xl" 
            onClick={downloadQRCode}>Download QR Code
            </button>
            </div>
        </div>
    </div>
    </>
  )
}