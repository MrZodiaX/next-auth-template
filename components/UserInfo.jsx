export default function UserInfo() {
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-8 bg-zinc-500/10 
            flex flex-col gap-2 my-6">  
                <div>
                    name: <span className="font-bold">lol</span>
                </div>
                <div>
                    email: <span className="font-bold">lol@lol.com</span>
                </div>

                <button className="bg-red-500 text-white
                font-bold px-6 py-2 mt-3">Logout</button>
            </div>
        </div>
    )
}