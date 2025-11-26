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

      const email = user.email;

      // Compatibilidade com Google E Facebook
      const name =
        user.user_metadata.full_name || // Google
        user.user_metadata.name || // Facebook
        null;

      const avatar =
        user.user_metadata.avatar_url || // Google
        user.user_metadata.picture || // Facebook
        null;

      // cria/atualiza usuário no Users
      await supabase.from("Users").upsert(
        {
          email,
          name,
          avatar,
        },
        { onConflict: "email" }
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