import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUser from "@/app/components/ListUser";
import Link from "next/link";

export default async function Dashboard() {
    const users = getUsers ();
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<p>Loading...</p>}>
                
                <ListUser user = {users}>{users.map((users) => (<p>{users.email}</p>))}

                </ListUser>
            </Suspense>     
        </div>
    );
};