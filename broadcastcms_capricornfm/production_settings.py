from broadcastcms.lite.production_settings import *

# Url switches allows you to specify a particular url script to use for a particular hostname.
# Used in conjunction with broadcastcms.lite.middleware.URLSwitchMiddleware
URL_SWITCHES = {
    'localhost:8000': 'broadcastcms.lite.desktop_urls',
    'localhostmobile:8000': 'broadcastcms.lite.mobile_urls',
}

MOBILE_HOSTNAME = 'localhostmobile:8000'

ADMINS = (
    ('Praekelt Consulting', 'bcms-errors@praekelt.com'),
)

MANAGERS = ADMINS

DATABASE_ENGINE = 'mysql'           # 'postgresql_psycopg2', 'postgresql', 'mysql', 'sqlite3' or 'oracle'.
DATABASE_NAME = 'broadcastcms_capricornfm' # Or path to database file if using sqlite3.
DATABASE_USER = 'cap'              # Not used with sqlite3.
DATABASE_PASSWORD = 'Das5looP'              # Not used with sqlite3.
DATABASE_HOST = ''                  # Set to empty string for localhost. Not used with sqlite3.
DATABASE_PORT = ''                  # Set to empty string for default. Not used with sqlite3.

EMAIL_SUBJECT_PREFIX = '[CAPRICORNFM] '
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'bcmslite@gmail.com'
EMAIL_HOST_PASSWORD = 'rdqq6wlk87XDS'
EMAIL_PORT = 587

#CACHE_BACKEND = 'memcached://127.0.0.1:7073/'
