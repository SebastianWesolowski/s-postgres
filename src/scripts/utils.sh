# Function to parse the database URL using Python
parse_database_url() {
  python3 - <<EOF
from urllib.parse import urlparse, parse_qs

url = "$1"
parsed_url = urlparse(url)

protocol = parsed_url.scheme
username = parsed_url.username
password = parsed_url.password
host = parsed_url.hostname
port = parsed_url.port
database = parsed_url.path.lstrip('/')
query_params = parse_qs(parsed_url.query)

# Print variables in a format that can be captured by the calling shell script
print(f"PROTOCOL={protocol}")
print(f"USERNAME={username}")
print(f"PASSWORD={password}")
print(f"HOST={host}")
print(f"PORT={port}")
print(f"DATABASE={database}")
for key, values in query_params.items():
    print(f"{key.upper()}={' '.join(values)}")
EOF
}
