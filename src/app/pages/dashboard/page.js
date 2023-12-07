import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/components/ListUsers";
import Link from "next/link";

export default async function Dashboard() {
    const users = getUsers ();
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<p>Loading...</p>}>
                
                <ListUsers user = {users}>{users.map((users) => (<p>{users.email}</p>))}

                </ListUsers>
            </Suspense>     
        </div>
    );
};