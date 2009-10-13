from broadcastcms.lite.production_settings import *

DESKTOP_HOSTNAMES = (
    'localhost:8000',
)

MOBILE_HOSTNAMES = (
    'localhostmobile:8000',
)

ADMINS = (
    ('Praekelt Consulting', 'bcms-errors@praekelt.com'),
)

MANAGERS = ADMINS

DATABASE_ENGINE = 'mysql'           # 'postgresql_psycopg2', 'postgresql', 'mysql', 'sqlite3' or 'oracle'.
DATABASE_NAME = 'broadcastcms_capricornfm' # Or path to database file if using sqlite3.
DATABASE_USER = 'root'              # Not used with sqlite3.
DATABASE_PASSWORD = ''              # Not used with sqlite3.
DATABASE_HOST = ''                  # Set to empty string for localhost. Not used with sqlite3.
DATABASE_PORT = ''                  # Set to empty string for default. Not used with sqlite3.

EMAIL_SUBJECT_PREFIX = '[CAPRICORNFM] '
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'bcmslite@gmail.com'
EMAIL_HOST_PASSWORD = 'rdqq6wlk87XDS'
EMAIL_PORT = 587
