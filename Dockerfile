FROM nginx:alpine

# Statische Dateien kopieren
COPY index.html style.css app.js data.js /usr/share/nginx/html/

# Nginx-Konfiguration für den Container
COPY nginx-container.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1
