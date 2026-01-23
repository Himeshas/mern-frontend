import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ForgetPassword() {
    const [emailsent,setEmailSent] = useState(false);
    const [email,setEmail] = useState("");
    const [otp,setOtp] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    async function sendOPT(){
        try{
            await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/send-otp",{
                email: email
            });
            toast.success("OTP sent to your email");
            setEmailSent(true);

        }catch(error){
            toast.error("Error sending OTP");
        }


    }

    async function resetPassword(){
        try{
            await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/reset-password",{
                email: email,
                otp: otp,
                newPassword: newPassword
            });
            toast.success("Password reset successfully");
        }catch(error){
            toast.error("Error resetting password");
        }
    }

    return (

        <div className="w-full h-full justify-center items-center flex">

           {!emailsent && <div className="bg-primary w-[500px] h-[500px] shadow-2xl flex flex-col justify-center items-center rounded-lg gap-[20px]">

                <h1 className="text-2xl font-bold">
                  Reset Password
                </h1>

                <input type="email" placeholder="Enter your email" 
                className="w-[350px] h-[40px] border border-white rounded-xl focus:border-blue-600 focus:outline-none text-black text-center" 
                onChange={(e) => setEmail(e.target.value)} />

                <button className="w-[350px] h-[40px] bg-white text-black rounded-xl hover:bg-gray-200">
                    Send OTP</button>

            </div>
            }
            {
                emailsent && <div className="bg-primary w-[500px] h-[500px] shadow-2xl flex flex-col justify-center items-center rounded-lg gap-[20px]">
                    <h1 className="text-2xl font-bold">
                        Enter OTP
                    </h1>
                    <input type="text" placeholder="Enter OTP" 
                    className="w-[350px] h-[40px] border border-white rounded-xl focus:border-blue-600 focus:outline-none text-black text-center" onChange={(e)=>setOtp(e.target.value)} />
                    <input type="password" placeholder="Enter new password" 
                    className="w-[350px] h-[40px] border border-white rounded-xl focus:border-blue-600 focus:outline-none text-black text-center" onChange={(e)=>setNewPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm new password" 
                    className="w-[350px] h-[40px] border border-white rounded-xl focus:border-blue-600 focus:outline-none text-black text-center" onChange={(e)=>setConfirmPassword(e.target.value)} />

                    <button className="w-[350px] h-[40px] bg-white text-black rounded-xl hover:bg-gray-200" onClick={resetPassword}>
                        Reset Password</button>
                </div>
            }
        </div>
    )
}