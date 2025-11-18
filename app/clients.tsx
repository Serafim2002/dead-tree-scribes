export type Client = {
  id: number;
  name: string;
  email: string;
  phone?: string;
};

async function fetchClients(token: string): Promise<Client[]> {
  const res = await fetch("http://localhost:8000/clients", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Erro ao buscar clientes");
  }
  return res.json();
}
