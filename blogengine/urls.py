from django.conf.urls import patterns, url
from django.views.generic import ListView
from blogengine.models import Post

urlpatterns = patterns('',
    # Index
    url(r'^(?P<page>\d+)?/?$', ListView.as_view(
        model=Post,
        paginate_by=5,
        )),
)
