#!/bin/bash

# Verificar si el archivo .env.local existe
if [ ! -f .env.local ]; then
  echo "Error: El archivo .env.local no existe."
  echo "Por favor, crea un archivo .env.local con las variables de entorno necesarias."
  echo "Puedes usar .env.example como plantilla."
  exit 1
fi

# Cargar variables de entorno desde .env.local
export $(grep -v '^#' .env.local | xargs)

# Verificar que las variables de Beehiiv estén definidas
if [ -z "$BEEHIIV_API_KEY" ] || [ -z "$BEEHIIV_PUB_ID" ]; then
  echo "Error: Las variables BEEHIIV_API_KEY y/o BEEHIIV_PUB_ID no están definidas en .env.local"
  exit 1
fi

# Ejecutar docker-compose con las variables de entorno
echo "Iniciando servicios con docker-compose..."
docker-compose -f docker-compose.prod.yml up -d --build

echo "Servicios iniciados correctamente."
echo "La aplicación debería estar disponible en https://adriaestevez.com"
