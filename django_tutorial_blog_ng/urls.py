from django.conf.urls import include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    # Examples:
    # url(r'^$', 'django_tutorial_blog_ng.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),

    # Blog URLs
    url(r'', include('blogengine.urls', namespace="blogengine")),

    # Flat pages
    url(r'', include('django.contrib.flatpages.urls')),
]
