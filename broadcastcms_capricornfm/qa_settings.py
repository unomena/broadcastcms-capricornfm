from production_settings import *

DEBUG = True

# If you set this to False, Django won't server static content (recommended)
SERVE_STATIC = True

DATABASE_NAME += '_qa'

MEDIA_ROOT = '%s/qa_media/' % BUILDOUT_PATH

MIDDLEWARE_CLASSES = MIDDLEWARE_CLASSES + (
    'debug_toolbar.middleware.DebugToolbarMiddleware',
)

INSTALLED_APPS = INSTALLED_APPS + (
    'debug_toolbar',
)

DEBUG_TOOLBAR_CONFIG = { 
    'INTERCEPT_REDIRECTS': False 
}

DEBUG_TOOLBAR_PANELS = (
    #'debug_toolbar.panels.version.VersionDebugPanel',
    'debug_toolbar.panels.timer.TimerDebugPanel',
    #'debug_toolbar.panels.settings_vars.SettingsVarsDebugPanel',
    #'debug_toolbar.panels.headers.HeaderDebugPanel',
    #'debug_toolbar.panels.request_vars.RequestVarsDebugPanel',
    #'debug_toolbar.panels.template.TemplateDebugPanel',
    'debug_toolbar.panels.sql.SQLDebugPanel',
    'debug_toolbar.panels.logger.LoggingPanel',
)

INTERNAL_IPS = (
    '127.0.0.1',
)
