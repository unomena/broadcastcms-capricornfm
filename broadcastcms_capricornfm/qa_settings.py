from production_settings import *

DATABASE_NAME += '_qa'

ROOT_URLCONF = 'broadcastcms.lite.qa_urls'

MEDIA_ROOT = '%s/qa_media/' % BUILDOUT_PATH
