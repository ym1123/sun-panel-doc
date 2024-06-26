# Configuration file

> [!note] The default configuration directory is ./conf
> ```
> .
> ├── conf
> |   ├── conf.ini
> |   └── conf.example.ini
> └── ...
> ```
> Where `./conf/conf.example.ini` is the complete configuration for the current software version. It will be overwritten and updated every time you start. If the configuration file is damaged, you can directly rename it to `conf.ini`.

Each version's configuration file may have slight differences. Please refer to the `conf.ini` in your program. The following content is for reference only:

```ini
# ======================
# Basic configuration
# ======================
[base]
# Web run port. Default:3002
http_port=3002
# Database driver [mysql/sqlite(Default)]
database_drive=sqlite
# Cache driver [redis/memory(Default)]
cache_drive=memory
# Queue driver [redis/memory(Default)]
queue_drive=memory
# File cache path (Please start with the current path './')
# Warning: The files that have been uploaded after the modification cannot be accessed
source_path=./uploads
# File cache path.
source_temp_path=./runtime/temp

# ======================
# Mysql database driver
# ======================
[mysql]
host=127.0.0.1
port=3306
username=root
password=root
db_name=sun_panel
wait_timeout=100

# ======================
# sqlite database driver
# ======================
[sqlite]
file_path=./database/database.db

# ======================
# redis database driver
# ======================
[redis]
address=127.0.0.1:6379
password=
prefix=sun_panel:
db=0
```