"""project_fashion URL Configuration

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
from django.urls import include, path
from .import views

urlpatterns = [
    path('direct_track_detail/', views.direct_track_detail, name = 'direct_track_detail'),
    # path('track_detail/<str:name>/', views.track_detail, name = 'track_detail_with_param'),
    path('view_tracks/', views.view_tracks, name = 'view_tracks'),
    path('view_tracks_ALL/', views.view_tracks_ALL, name = 'view_tracks_ALL'),
    path('track_details/', views.track_detail, name = 'track_details'),
    path('enquiry/', views.enquiry, name = 'enquiry'),
    path('view_posts/', views.view_posts, name = 'view_posts'),
    path('view_blogs_ALL/', views.view_blogs_ALL, name = 'view_blogs_ALL'),
    path('search/', views.search, name = 'search'),
    path('view_season_category_all/', views.view_season_category_all, name = 'view_season_category_all'),
    path('admin_verification/', views.admin_verification, name = 'admin_verification'),
    path('add_season/', views.add_season, name = 'add_season'),
    path('get_season/', views.get_season, name = 'get_season'),
    path('add_category/', views.add_category, name='add_category'),
    path('get_category/', views.get_category, name='get_category'),
    path('submit_trek_info/', views.submit_trek_info, name = 'submit_trek_info'),
    path('get_track_id_name/', views.get_track_id_name, name = 'get_track_id_name'),
    path('get_track_season_cat_id_name/', views.get_track_season_cat_id_name, name='get_track_season_cat_id_name'),
    path('submit_trek_image/', views.submit_trek_image, name = 'submit_trek_image'),
    path('submit_slider_image/', views.submit_slider_image, name = 'submit_slider_image'),
    path('submit_day_plan/', views.submit_day_plan, name = 'submit_day_plan'),
    path('get_days_using_track_id/', views.get_days_using_track_id, name = 'get_days_using_track_id'),
    path('submit_sub_day_plan/', views.submit_sub_day_plan, name = 'submit_sub_day_plan'),
    path('get_track_info/', views.get_track_info, name='get_track_info'),
    path('update_track/', views.update_track, name='update_track'),
    path('delete_track_image/', views.delete_track_image, name='delete_track_image'),
    path('delete_slider_image/', views.delete_slider_image, name='delete_slider_image'),
    path('update_track_season_cat_relation/', views.update_track_season_cat_relation, name='update_track_season_cat_relation'),
    path('update_season/', views.update_season, name='update_season'),
    path('update_category/', views.update_category, name='update_category'),
    path('delete_day_plan/', views.delete_day_plan, name='delete_day_plan'),
    path('delete_blog/', views.delete_blog, name='delete_blog'),
    path('add_blog/', views.add_blog, name='add_blog'),
    path('get_blog_id_title/', views.get_blog_id_title, name='get_blog_id_title'),
    path('get_inquery/', views.get_inquery, name='get_inquery'),
    path('clear_inquiry/', views.clear_inquiry, name='clear_inquiry'),
    path('submit_review/', views.submit_review, name='submit_review'),
    path('view_reviews/', views.view_reviews, name='view_reviews'),
    path('view_reviews_4/', views.view_reviews_4, name='view_reviews_4'),
    path('view_reviews_all/', views.view_reviews_all, name='view_reviews_all'),
    path('update_reviews/', views.update_reviews, name='update_reviews'),
    path('submit_trekker_story/', views.submit_trekker_story, name='submit_trekker_story'),
    path('view_trekker_story/', views.view_trekker_story, name='view_trekker_story'),
    path('view_trekker_story_4/', views.view_trekker_story_4, name='view_trekker_story_4'),    
    path('view_trekker_story_all/', views.view_trekker_story_all, name='view_trekker_story_all'),
    path('update_trekker_story/', views.update_trekker_story, name='update_trekker_story'),
    path('submit_event_article/', views.submit_event_article, name='submit_event_article'),
    path('view_event_article_ALL/', views.view_event_article_ALL, name='view_event_article_ALL'), 
    path('delete_event_article/', views.delete_event_article, name='delete_event_article'),
    path('view_related_trekker_story/', views.view_related_trekker_story, name='view_related_trekker_story'),
    path('view_related_reviews/', views.view_related_reviews, name='view_related_reviews'),
    path('view_related_event_article_ALL/', views.view_related_event_article_ALL, name='view_related_event_article_ALL'),
    path('get_category_season_using_track_id/', views.get_category_season_using_track_id, name='get_category_season_using_track_id'),
    path('remove_track_category_season_relation/', views.remove_track_category_season_relation, name='remove_track_category_season_relation'),
         
    

]