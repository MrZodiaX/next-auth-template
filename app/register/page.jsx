import RegisterForm from "@/Components/RegisterFrom"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"
import React from "react"

export default async function Register() {
    const session = await getServerSession(authOptions);
    console.log("[Register]");

    if (session)
        redirect("/dashboard")

    return (
        <div>
            <RegisterForm />
        </div>
    )
}