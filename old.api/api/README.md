dead-tree-scribes-api/
│
├── app/
│   ├── main.py              # Ponto de entrada da API
│   ├── config.py            # Configurações (chaves, URL do Supabase)
│   ├── database.py          # Conexão com o Supabase
│   ├── models.py            # Schemas (Pydantic)
│   ├── services/            # Lógica de negócios
│   │   └── clients_service.py
│   └── routes/              # Endpoints da API
│       └── clients.py
│
├── .env                     # Variáveis de ambiente
├── requirements.txt
└── README.md
