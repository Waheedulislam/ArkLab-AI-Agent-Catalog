"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center px-4 py-3 border-b bg-white shadow-sm">
      <h1 className="font-bold text-xl text-primary">ArkLab AI</h1>

      <div>
        {session?.user ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative rounded-full overflow-hidden border">
              <Image
                src={session.user.image || "/default-avatar.png"}
                alt="avatar"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm">{session.user.name}</p>
            <Button variant="outline" size="sm" onClick={() => signOut()}>
              Logout
            </Button>
          </div>
        ) : (
          <Button onClick={() => signIn("google")}>Login with Google</Button>
        )}
      </div>
    </nav>
  );
}
