"""tourism_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings
from django.views import generic
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^all_tracks/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^track_detail/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^Track_details/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^admin_login/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^home/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^latest_updates/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^review_form/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^all_reviews/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^trekker_story_form/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^all_trekker_stories/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^event_article/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^rafting/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^chardham/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^customize/', generic.TemplateView.as_view(template_name='index.html')),     
    url(r'^student/', generic.TemplateView.as_view(template_name='index.html')),  
    url(r'^tea_house/', generic.TemplateView.as_view(template_name='index.html')),   
    url(r'^what_we_do/', generic.TemplateView.as_view(template_name='index.html')), 
    url(r'^about_us/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^save_himalaya/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^videos/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'^photos/', generic.TemplateView.as_view(template_name='index.html')),  
    path('', generic.TemplateView.as_view(template_name='index.html')),
    path(r'^sitemap/', generic.TemplateView.as_view(template_name='sitemap.xml')),
    path('', include('tourism.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
if(settings.DEBUG):
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns=urlpatterns+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

