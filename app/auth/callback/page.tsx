"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return router.push("/login");

      // pega dados do google
      const email = user.email;
      const name = user.user_metadata.full_name;
      const avatar = user.user_metadata.avatar_url;

      // cria/atualiza usuário no seu Users
      await supabase.from("Users").upsert(
        {
          email,
          name,
          avatar,
        },
        { onConflict: "email" } // evita duplicatas
      );

      // salva localmente
      localStorage.setItem(
        "user",
        JSON.stringify({ email, name, avatar })
      );

      router.push("/");
    };

    handleAuth();
  }, [router]);

  return (
    <div className="w-full h-screen flex items-center justify-center text-white">
      Redirecionando...
    </div>
  );
}
