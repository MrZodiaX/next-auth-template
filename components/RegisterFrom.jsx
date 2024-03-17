import Link from "next/link"

export default function RegisterForm(){
    return (
        <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-500">
            <h1 className="text-xl font-bold my-4">Register</h1>

            <form className="flex flex-col gap-3">
                
                <input type="text" placeholder="Fullname" />

                <input type="text" placeholder="Email" />

                <input type="password" placeholder="password" />
                
                <button className="bg-blue-700 text-white 
                font-bold cursor-pointer px-6 py-2 rounded-md">
                    Register
                </button>

                <div className="bg-red-500 text-white w-fit text-sm
                px-3 py-1 rounded-md mt-2">
                    Error message
                </div>

                <Link className="text-sm mt-3 text-right" href={'/'}>
                    Already have an account? <span className="underline">
                        login
                    </span>
                </Link>
            </form>
        </div>
    </div>
    )
}