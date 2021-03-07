cp tools/oicphonetics.conf /etc/nginx/conf.d/
systemctl reload nginx
# sudo certbot certonly --agree-tos --email khacpv@gmail.com --webroot -w /var/lib/letsencrypt/ -d phonetic.oicsoft.com
