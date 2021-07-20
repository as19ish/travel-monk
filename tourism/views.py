from django.shortcuts import render, reverse, redirect
from .models import Track_info, Track_media, Day_plan, Sub_day_plan, Track_enquiry, Posts, Season, Category, \
    Track_Season_Relation, Track_Category_Relation, Reviews, TrekkerStory, Event, Slider_media
# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import re
import os
from django.contrib.auth import authenticate
import http.client as ht
from django.db.models import Q
from django.http import HttpResponseRedirect, HttpResponsePermanentRedirect

# Web Scraping
from selenium import webdriver
from selenium.common.exceptions import *
from chromedriver_py import binary_path # this will get you the path variable
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.utils import ChromeType
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
# Data manipulation
import pandas as pd
# Visualization
# import matplotlib.pyplot as plt
# import seaborn as sns


def view_tracks(request):
    # tracks=Track_info.objects.all().values().order_by("-date")[:4]
    id = Track_media.objects.order_by('track_id_id').values('track_id_id').distinct()
    id_val = []
    for x in id:
        id_val.append(x['track_id_id'])

    # for upcoming treks......
    season_id = Season.objects.filter(name='upcoming  treks').values_list('id')
    track_id = Track_Season_Relation.objects.filter(season_id_id=season_id[0][0]).values_list('track_id')
    id_list = [x[0] for x in track_id]
    tracks = Track_info.objects.all().values().filter(pk__in=id_list)[:11]
    result = []
    result_media = []
    for i in tracks:
        result.append(i)
    id_list = []
    for x in result:
        id_list.append(x['id'])

    media = []
    for i in id_list:
        track_media = Track_media.objects.values().filter(track_id_id=i)[:1]
        media.append(track_media[0])

    # for trek of this month......
    season_id1 = Season.objects.filter(name='trek of this month').values_list('id')
    track_id1 = Track_Season_Relation.objects.filter(season_id_id=season_id1[0][0]).values_list('track_id')
    id_list1 = [x[0] for x in track_id1]
    tracks1 = Track_info.objects.all().values().filter(pk__in=id_list1)[:11]
    result1 = []
    result_media1 = []
    for i in tracks1:
        result1.append(i)
    id_list1 = []
    for x in result1:
        id_list1.append(x['id'])

    media1 = []
    for i in id_list1:
        track_media1 = Track_media.objects.values().filter(track_id_id=i)[:1]
        media1.append(track_media1[0])

    return JsonResponse({'track': result, 'track_media': media, 'track1': result1, 'track_media1': media1})


def view_tracks_ALL(request):
    type = request.GET.get('type')
    sub_type = request.GET.get('sub_type')
    id_list = []
    selected_description = ''
    if type == 'all':
        id_list = Track_info.objects.values_list('id')
        id_list = [x[0] for x in id_list]

    if type == 'category':
        id_desc = Category.objects.filter(name=sub_type).values_list('id', 'description')
        id_desc_list = list(id_desc[0])
        selected_id = id_desc_list[0]
        selected_description = id_desc_list[1]

        track_id = Track_Category_Relation.objects.filter(category_id_id=selected_id).values_list('track_id')
        id_list = [x[0] for x in track_id]

    if type == 'season':
        id_desc = Season.objects.filter(name=sub_type).values_list('id', 'description')
        id_desc_list = list(id_desc[0])
        selected_id = id_desc_list[0]
        selected_description = id_desc_list[1]
        track_id = Track_Season_Relation.objects.filter(season_id_id=selected_id).values_list('track_id')
        id_list = [x[0] for x in track_id]

    result_media = []
    temp_list = id_list.copy()
    for i in temp_list:
        track_media = Track_media.objects.all().filter(track_id_id=i).values()
        if (len(track_media) == 0):
            id_list.remove(i)
        else:
            result_media.append(list(track_media)[0])

    tracks = Track_info.objects.all().filter(pk__in=id_list).values()
    result = list(tracks)


    def sorted_media(elem):
        return elem['track_id_id']

    sorted_result_media = sorted(result_media, key=sorted_media)

    difficulty_list = Track_info.objects.order_by('track_difficulty').values_list('track_difficulty').distinct()
    difficulty_list = list(difficulty_list)

    difficulty_list = [x[0] for x in difficulty_list]
    return JsonResponse({'track': result, 'track_media': sorted_result_media, 'difficulty_list': difficulty_list,
                         'description': selected_description})


def direct_track_detail(request):
    name = request.GET.get('name')
    print('name = ', name)
    db_names = list(Track_info.objects.values_list('track_name'))
    # db_names = [tup[0].lower().replace(" ", "") for tup in db_names]
    db_names = [tup[0] for tup in db_names]
    # name = name.lower().replace(" ", "")
    print('name = ', name)
    # print(type(name))
    # print('db_names = ', db_names)
    # print(name in db_names)
    track_id = 0
    for x in db_names:
        print(x)
        if name == x:
            id = Track_info.objects.all().filter(track_name=x).values('id')
            # print(id)
            id = list(id)
            # print(id)
            track_id = id[0]['id']
            # print(track_id)
            break
            # return redirect('/Track_details',{'track_id': track_id},permanent=True)
            # return render(request, '/track_details/', {'track_id': track_id})
            # return HttpResponseRedirect("www.facebook.com")
            # return HttpResponsePermanentRedirect(reverse('track_detail_with_param'))

    day_data = Day_plan.objects.filter(track_id=Track_info.objects.get(pk=track_id))

    dayPlanid_day_description_list = [[x['id'], x['day'], x['track_description']] for x in list(day_data.values())]

    dayPlanid_subDaySequence_description_list = []

    for x in dayPlanid_day_description_list:
        sub_day_data = Sub_day_plan.objects.filter(day_plan_id=Day_plan.objects.get(pk=x[0]))

        demo = [[x['day_plan_id_id'], x['serial'], x['sub_description']] for x in list(sub_day_data.values())]
        dayPlanid_subDaySequence_description_list.append(demo)

    tracks = Track_info.objects.all().filter(pk=track_id).values()

    result = []
    result_media = []
    for i in tracks:
        result.append(i)

    track_media = Track_media.objects.all().filter(track_id_id=track_id).values()
    result_media.extend(list(track_media))

    if (len(day_data) == 0):
        return JsonResponse({})
    else:
        return JsonResponse({'dayPlanid_day_description_list': dayPlanid_day_description_list,
                             'dayPlanid_subDaySequence_description_list': dayPlanid_subDaySequence_description_list,
                             'other_details': result, 'media': result_media})



def track_detail(request):

    track_id = request.GET.get('track_id')
    print('tarck_id = ', track_id)

    day_data = Day_plan.objects.filter(track_id=Track_info.objects.get(pk=track_id))

    dayPlanid_day_description_list = [[x['id'], x['day'], x['track_description']] for x in list(day_data.values())]


    dayPlanid_subDaySequence_description_list = []

    for x in dayPlanid_day_description_list:
        sub_day_data = Sub_day_plan.objects.filter(day_plan_id=Day_plan.objects.get(pk=x[0]))

        demo = [[x['day_plan_id_id'], x['serial'], x['sub_description']] for x in list(sub_day_data.values())]
        dayPlanid_subDaySequence_description_list.append(demo)


    tracks = Track_info.objects.all().filter(pk=track_id).values()

    result = []
    result_media = []
    for i in tracks:
        result.append(i)


    track_media = Track_media.objects.all().filter(track_id_id=track_id).values()
    result_media.extend(list(track_media))

    if (len(day_data) == 0):
        return JsonResponse({})
    else:
        print('returning here.............')
        return JsonResponse({'dayPlanid_day_description_list': dayPlanid_day_description_list,
                             'dayPlanid_subDaySequence_description_list': dayPlanid_subDaySequence_description_list,
                             'other_details': result, 'media': result_media})

def send_sms(name, mobile, email, destination):

    admin_mobile = '6399896494'
    admin_mobile1= '9557115706'
    message_admin = 'Enquiry Received:' + '\\n' + 'Name: ' + name.upper() + '\\n' + 'Mobile: ' + mobile + '\\n' + 'Email: ' + email + '\\n' + 'Trek: ' + destination.upper()
    message_user = 'Hi, ' + name.upper() + '\\n' + 'Welcome To Hike2Heaven' + '\\n' + 'Your request for ' + destination.upper() + ' received. We will get back to you shortly.' + '\\n' + 'Enjoy Trekking @ /'
    try:
        conn = ht.HTTPSConnection("api.msg91.com")
        payload = '''{"sender": "MROVER","route": "4","country": "91","sms": [{  "message": "''' + message_user + ''' ","to": ["''' + mobile + '''"]}]}'''

        headers = {
            'authkey': "317935ATsIwITV7aZ5e43bcbcP1",
            'content-type': "application/json"
        }
        conn.request("POST", "/api/v2/sendsms", payload, headers)
        res = conn.getresponse()
        data = res.read()
        conn.close()
    except Exception as e:
        print('exception====', e)

    try:
        conn = ht.HTTPSConnection("api.msg91.com")
        payload = '''{"sender": "MROVER","route": "4","country": "91","sms": [{  "message": "''' + message_admin + ''' ","to": ["''' + admin_mobile + '''"]}]}'''

        headers = {
            'authkey': "317935ATsIwITV7aZ5e43bcbcP1",
            'content-type': "application/json"
        }
        conn.request("POST", "/api/v2/sendsms", payload, headers)
        res = conn.getresponse()
        data = res.read()
        conn.close()
    except Exception as e:
        print('exception====', e)

    try:
        conn = ht.HTTPSConnection("api.msg91.com")
        payload = '''{"sender": "MROVER","route": "4","country": "91","sms": [{  "message": "''' + message_admin + ''' ","to": ["''' + admin_mobile1 + '''"]}]}'''

        headers = {
            'authkey': "317935ATsIwITV7aZ5e43bcbcP1",
            'content-type': "application/json"
        }
        conn.request("POST", "/api/v2/sendsms", payload, headers)
        res = conn.getresponse()
        data = res.read()
        conn.close()
    except Exception as e:
        print('exception====', e)


@csrf_exempt
def enquiry(request):
    if (request.method == 'POST'):

        enquiry = json.loads(request.body)

        name = enquiry['name']
        mobile = enquiry['mobile']
        email = enquiry['email']
        destination = enquiry['destination']
        send_sms(name, mobile, email, destination)
        query = Track_enquiry(name=name, mobile=mobile, email=email, destination=destination, status='Pending')
        query.save()
        return JsonResponse({'result': 'pass'})


# Posts and Blogs are same.....................
def view_posts(request):
    if (request.method == 'GET'):

        posts = Posts.objects.all().values().order_by("-date")[:4]

        result = []
        # result_media = []
        for i in posts:
            result.append(i)

        return JsonResponse({'posts': result})


# Posts and Blogs are same.....................
def view_blogs_ALL(request):
    if (request.method == 'GET'):
        posts = Posts.objects.all().values().order_by("-date")
        result = []
        # result_media = []
        for i in posts:
            result.append(i)

        return JsonResponse({'blogs': result})


def search(request):
    if (request.method == 'GET'):
        search_key = request.GET.get('search_key')
        id_list = []
        for track in Track_info.objects.all().values():
            if re.search(search_key, track['track_name'], flags=re.IGNORECASE):
                # list of all track ids which have search_key(ignorecase) inside track name.
                id_list.append(track['id'])

        result_media = []
        temp_list = id_list.copy()
        for i in temp_list:
            track_media = Track_media.objects.all().filter(track_id_id=i).values()
            if (len(track_media) == 0):
                id_list.remove(i)
            else:
                result_media.append(list(track_media)[0])

        tracks = Track_info.objects.all().filter(pk__in=id_list).values()
        result = list(tracks)

        def sorted_media(elem):
            return elem['track_id_id']

        sorted_result_media = sorted(result_media, key=sorted_media)
        return JsonResponse({'track': result, 'track_media': sorted_result_media})


def view_season_category_all(request):
    if (request.method == 'GET'):
        result = Season.objects.all().values()
        season = []
        for i in result:
            season.append(i)

        res = Category.objects.all().values()
        category = []
        for i in res:
            category.append(i)

        return JsonResponse({'season': season, 'category': category})


@csrf_exempt
def admin_verification(request):
    if (request.method == 'POST'):
        user_name = request.POST.get('admin_name')
        user_password = request.POST.get('admin_password')
        user = authenticate(username=user_name, password=user_password)
        if user is not None:
            return JsonResponse({'result': 'success'})
        else:
            return JsonResponse({'result': 'Failed'})

    return JsonResponse({'result': 'success'})


@csrf_exempt
def add_season(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        season = data['name']
        desc = data['description']
        result = []
        item = Season(name=season, description=desc)
        item.save()
        season_data = Season.objects.all().values()
        for i in season_data:
            result.append(i)
        return JsonResponse({'result': result})


@csrf_exempt
def get_season(request):
    if (request.method == 'GET'):
        result = []
        season_data = Season.objects.all().values()
        for i in season_data:
            result.append(i)
        return JsonResponse({'result': result})


@csrf_exempt
def add_category(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        category = data['name']
        desc = data['description']
        result = []
        item = Category(name=category, description=desc)
        item.save()
        category_data = Category.objects.all().values()
        for i in category_data:
            result.append(i)
        return JsonResponse({'result': result})


@csrf_exempt
def get_category(request):
    if (request.method == 'GET'):
        result = []
        category_data = Category.objects.all().values()
        for i in category_data:
            result.append(i)
        return JsonResponse({'result': result})


@csrf_exempt
def submit_trek_info(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        item = Track_info(track_name=data['TREK NAME'],
                          track_description=data['TREK DESCRIPTION'],
                          track_cost=data['TREK COST'],
                          track_duration=data['TREK DAYS'],
                          track_altitude=data['TREK ALTITUDE'],
                          track_difficulty=data['TREK DIFFICULTY'],
                          track_length=data['TREK LENGTH'],
                          track_best_season=data['BEST SEASON'],
                          track_start_point=data['START POINT'],
                          track_end_point=data['END POINT'],
                          track_railway=data['NEARBY RAILWAY'],
                          track_airport=data['NEARBY AIRPORT'],
                          track_road=data['ROAD ROUT'],
                          track_cost_cusomization=data['TREK COST CUSTOMIZATION'])
        item.save()

        return JsonResponse({'result': 'success'})


@csrf_exempt
def get_track_id_name(request):
    if (request.method == 'GET'):
        id_name = Track_info.objects.values('id', 'track_name')
        id_name = list(id_name)
        return JsonResponse({'result': id_name})


@csrf_exempt
def get_blog_id_title(request):
    if (request.method == 'GET'):
        id_name = Posts.objects.values('id', 'blog_title')
        id_name = list(id_name)
        return JsonResponse({'result': id_name})


@csrf_exempt
def get_track_season_cat_id_name(request):
    if (request.method == 'GET'):
        id_name = Track_info.objects.values('id', 'track_name')
        id_name_list = list(id_name)
        season_name = Season.objects.values('id', 'name')
        season_name_list = list(season_name)
        category_name = Category.objects.values('id', 'name')
        category_name_list = list(category_name)
        return JsonResponse({'track': id_name_list, 'season': season_name_list, 'category': category_name_list})


@csrf_exempt
def submit_trek_image(request):
    if (request.method == 'POST'):
        try:
            track_name = request.POST.get('track_name')
            track_id = request.POST.get('track_id')
            image = request.FILES['image']
            item = Track_media(track_id=Track_info.objects.get(id=track_id), track_image=image)
            item.save()
            return JsonResponse({'result': 'success'})
        except Exception as e:
            print('exception====', e)

@csrf_exempt
def submit_slider_image(request):
    if (request.method == 'POST'):
        try:
            title = request.POST.get('title')
            detail = request.POST.get('detail')
            image = request.FILES['image']
            item = Slider_media(title=title, detail=detail, image=image)
            item.save()
            return JsonResponse({'result': 'success'})
        except Exception as e:
            print('exception====', e)

@csrf_exempt
def delete_slider_image(request):
    if (request.method == 'GET'):
        item = Slider_media.objects.all().values()
        item_list = list(item)
        return JsonResponse({'result': item_list})

    if (request.method == 'POST'):
        data = json.loads(request.body)
        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        MEDIA_ROOT = os.path.join(BASE_DIR, 'tourism_project/static/media/')
        name = data['image']
        MEDIA_ROOT = os.path.join(MEDIA_ROOT, name)
        os.remove(MEDIA_ROOT)
        Slider_media.objects.filter(pk=data['id']).delete()
        return JsonResponse({'result': 'success'})

@csrf_exempt
def submit_day_plan(request):
    data = json.loads(request.body)
    track_info_dict = data['track_info'][0]
    track_id = track_info_dict['id']
    day_plan_list = data['day_plan']
    i = 1
    try:
        for plan in day_plan_list:
            item = Day_plan(track_id=Track_info.objects.get(id=track_id), track_description=plan, day=i)
            item.save()
            i += 1
    except Exception as e:
        print ('EXCEPTION....////', e)
        return JsonResponse(
            {'result': 'Day Plan Already Exists!!!!..Please Delete The Day Plan For This Trek First , Then Add Again'})

    return JsonResponse({'result': 'success'})


@csrf_exempt
def submit_sub_day_plan(request):
    data = json.loads(request.body)
    day_plan_id = data['track_day_selected'][0][0]
    sub_day_plan_list = data['sub_day_plan']
    i = 1
    try:
        for plan in sub_day_plan_list:
            item = Sub_day_plan(day_plan_id=Day_plan.objects.get(id=day_plan_id), sub_description=plan, serial=i)
            item.save()
            i += 1
    except Exception as e:
        print ('EXCEPTION....////', e)
        return JsonResponse(
            {
                'result': 'Sub_Day Plan Already Exists!!!!..Please Delete The Day Plan For This Trek First , Then Add Again'})

    return JsonResponse({'result': 'success'})


@csrf_exempt
def get_days_using_track_id(request):
    track_id = request.GET.get('track_id')
    days = Day_plan.objects.order_by("day").values_list('id', 'track_description').filter(
        track_id=Track_info.objects.get(id=track_id))
    days = list(days)
    days = [[x[0], x[1]] for x in days]
    return JsonResponse({'result': days})


@csrf_exempt
def get_track_info(request):
    track_id = request.GET.get('track_id')
    track = Track_info.objects.all().values().filter(id=track_id)
    track_list = list(track)
    return JsonResponse({'result': track_list[0]})


@csrf_exempt
def update_track(request):
    data = json.loads(request.body)
    data = data['track_info']
    Track_info.objects.filter(pk=data['id']).update(track_name=data['track_name'],
                                                    track_description=data['track_description'],
                                                    track_cost=data['track_cost'],
                                                    track_duration=data['track_duration'],
                                                    track_altitude=data['track_altitude'],
                                                    track_difficulty=data['track_difficulty'],
                                                    track_length=data['track_length'],
                                                    track_best_season=data['track_best_season'],
                                                    track_start_point=data['track_start_point'],
                                                    track_end_point=data['track_end_point'],
                                                    track_railway=data['track_railway'],
                                                    track_airport=data['track_airport'], track_road=data['track_road'],
                                                    track_cost_cusomization=data['track_cost_cusomization'])
    return JsonResponse({'result': 'Update Success'})


@csrf_exempt
def delete_track_image(request):
    if (request.method == 'GET'):
        track_id = request.GET.get('track_id')
        item = Track_media.objects.all().filter(track_id=track_id).values()
        item_list = list(item)
        return JsonResponse({'result': item_list})

    if (request.method == 'POST'):
        data = json.loads(request.body)
        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        MEDIA_ROOT = os.path.join(BASE_DIR, 'tourism_project/static/media/')
        name = data['track_image']
        MEDIA_ROOT = os.path.join(MEDIA_ROOT, name)
        os.remove(MEDIA_ROOT)
        Track_media.objects.filter(pk=data['id']).delete()
        return JsonResponse({'result': 'success'})


@csrf_exempt
def delete_blog(request):
    data = json.loads(request.body)
    data = list(data)
    id = data[0]['id']
    img = Posts.objects.values('blog_image').filter(pk=id)
    img = list(img)[0]['blog_image']
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    MEDIA_ROOT = os.path.join(BASE_DIR, 'tourism_project/static/media/')
    MEDIA_ROOT = os.path.join(MEDIA_ROOT, img)
    os.remove(MEDIA_ROOT)
    Posts.objects.filter(pk=id).delete()
    return JsonResponse({'result': 'success'})


@csrf_exempt
def update_track_season_cat_relation(request):
    data = json.loads(request.body)
    track_id = data['track_id']
    season_id = data['season_id']
    category_id = data['category_id']
    try:
        item = Track_Season_Relation(track_id=Track_info.objects.get(pk=track_id),
                                     season_id=Season.objects.get(pk=season_id))
        item.save()
    except Exception as e:
        print ('EXCEPTION....////', e)

    try:
        item = Track_Category_Relation(track_id=Track_info.objects.get(pk=track_id),
                                       category_id=Category.objects.get(pk=category_id))
        item.save()
    except Exception as e:
        print ('Exception...////', e)
    return JsonResponse({'result': 'success'})


@csrf_exempt
def update_season(request):
    data = json.loads(request.body)
    id = data['id']
    name = data['name']
    description = data['description']
    Season.objects.filter(pk=id).update(name=name, description=description)
    return JsonResponse({'result': 'success'})


@csrf_exempt
def update_category(request):
    data = json.loads(request.body)
    id = data['id']
    name = data['name']
    description = data['description']
    Category.objects.filter(pk=id).update(name=name, description=description)
    return JsonResponse({'result': 'success'})


@csrf_exempt
def delete_day_plan(request):
    data = json.loads(request.body)
    id = data['track_info'][0]['id']
    Day_plan.objects.filter(track_id_id=id).delete()
    return JsonResponse({'result': 'Deleted Successfully'})


@csrf_exempt
def add_blog(request):
    title = request.POST.get('title')
    subject = request.POST.get('subject')
    details = request.POST.get('details')
    image = request.FILES['image']
    item = Posts(blog_title=title, blog_subject=subject, blog_details=details, blog_image=image)
    item.save()
    return JsonResponse({'result': 'success'})


@csrf_exempt
def get_inquery(request):
    posts = Track_enquiry.objects.all().values().filter(status='Pending').order_by("-date")
    result = []
    # result_media = []
    for i in posts:
        result.append(i)
    return JsonResponse({'result': result})


@csrf_exempt
def clear_inquiry(request):
    data = json.loads(request.body)
    id = data['id']
    Track_enquiry.objects.filter(pk=id).update(status='Complete')
    return JsonResponse({'result': 'success'})


@csrf_exempt
def submit_review(request):
    try:
        name = request.POST.get('name')
        rating = request.POST.get('rating')
        description = request.POST.get('description')
        category = request.POST.get('category')
        track_name = request.POST.get('track_name')
        track_id = request.POST.get('track_id')
        image = request.FILES['image']

        item = Reviews(name=name, trek_id=track_id, trek_name=track_name, description=description, star=rating,
                       category=category, status='pending', photo=image)
        item.save()
        return JsonResponse({'result': 'success'})
    except Exception as e:
        print('exception====', e)


@csrf_exempt
def view_reviews(request):
    if (request.method == 'GET'):
        posts = Reviews.objects.all().values().filter(status='approved').order_by("-date")
        result = []
        # result_media = []
        for i in posts:
            result.append(i)

        return JsonResponse({'reviews': result})


@csrf_exempt
def view_reviews_4(request):
    if (request.method == 'GET'):
        posts = Reviews.objects.all().values().filter(status='approved').order_by("-date")[:9]
        result = []
        # result_media = []
        for i in posts:
            result.append(i)

        return JsonResponse({'reviews': result})


@csrf_exempt
def view_reviews_all(request):
    if (request.method == 'GET'):
        posts = Reviews.objects.all().values().order_by("-date")
        result = []
        # result_media = []
        for i in posts:
            result.append(i)

        return JsonResponse({'reviews': result})


@csrf_exempt
def update_reviews(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        id = data['id']
        photo = data['photo']
        action = data['action']
        if action == 'delete':
            BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            MEDIA_ROOT = os.path.join(BASE_DIR, 'tourism_project/static/media/')
            MEDIA_ROOT = os.path.join(MEDIA_ROOT, photo)
            os.remove(MEDIA_ROOT)
            Reviews.objects.filter(pk=id).delete()

        if action == 'approve':
            Reviews.objects.filter(pk=id).update(status='approved')

        posts = Reviews.objects.all().values().order_by("-date")
        result = []
        # result_media = []
        for i in posts:
            result.append(i)

        return JsonResponse({'reviews': result})


@csrf_exempt
def submit_trekker_story(request):
    try:
        name = request.POST.get('name')
        description = request.POST.get('description')
        track_name = request.POST.get('track_name')
        track_id = request.POST.get('track_id')
        profile_image = request.FILES['profile_image']
        trek_image = request.FILES['trek_image']
        item = TrekkerStory(name=name, trek_id=track_id, trek_name=track_name, description=description,
                            status='pending', profile_photo=profile_image, trek_photo=trek_image)
        item.save()
        return JsonResponse({'result': 'success'})
    except Exception as e:
        print('exception====', e)


@csrf_exempt
def view_trekker_story(request):
    if (request.method == 'GET'):
        posts = TrekkerStory.objects.all().values().filter(status='approved').order_by("-date")
        result = []
        # result_media = []
        for i in posts:
            result.append(i)
        return JsonResponse({'stories': result})

@csrf_exempt
def view_trekker_story_4(request):
    if (request.method == 'GET'):
        posts = TrekkerStory.objects.all().values().filter(status='approved').order_by("-date")[:9]
        result = []
        # result_media = []
        for i in posts:
            result.append(i)
        return JsonResponse({'stories': result})


@csrf_exempt
def view_trekker_story_all(request):
    if (request.method == 'GET'):
        posts = TrekkerStory.objects.all().values().order_by("-date")
        result = []
        # result_media = []
        for i in posts:
            result.append(i)

        return JsonResponse({'stories': result})


@csrf_exempt
def update_trekker_story(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        id = data['id']
        profile_photo = data['profile_photo']
        trek_photo = data['trek_photo']
        action = data['action']
        if action == 'delete':
            BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            MEDIA_ROOT = os.path.join(BASE_DIR, 'tourism_project/static/media/')
            MEDIA_ROOT1 = os.path.join(MEDIA_ROOT, profile_photo)
            MEDIA_ROOT2 = os.path.join(MEDIA_ROOT, trek_photo)
            os.remove(MEDIA_ROOT1)
            os.remove(MEDIA_ROOT2)
            TrekkerStory.objects.filter(pk=id).delete()

        if action == 'approve':
            TrekkerStory.objects.filter(pk=id).update(status='approved')

        posts = TrekkerStory.objects.all().values().order_by("-date")
        result = []
        # result_media = []
        for i in posts:
            result.append(i)
        return JsonResponse({'stories': result})


@csrf_exempt
def submit_event_article(request):
    try:
        type = request.POST.get('type')
        subject = request.POST.get('subject')
        track_id = request.POST.get('track_id')
        sub1 = request.POST.get('sub1')
        sub2 = request.POST.get('sub2')
        sub3 = request.POST.get('sub3')
        sub4 = request.POST.get('sub4')
        des1 = request.POST.get('des1')
        des2 = request.POST.get('des2')
        des3 = request.POST.get('des3')
        des4 = request.POST.get('des4')
        img1 = request.FILES['image1']
        img2 = request.FILES['image2']
        img3 = request.FILES['image3']
        img4 = request.FILES['image4']
        item = Event(type=type, trek_id=track_id, subject=subject, sub1=sub1, sub2=sub2, sub3=sub3, sub4=sub4,
                     des1=des1, des2=des2, des3=des3, des4=des4, img1=img1, img2=img2, img3=img3, img4=img4)
        item.save()
        return JsonResponse({'result': 'success'})
    except Exception as e:
        print('exception====', e)


@csrf_exempt
def view_event_article_ALL(request):
    if request.method == 'GET':
        event_data = Event.objects.all().values().order_by("date")
        result = []
        for i in event_data:
            result.append(i)
        return JsonResponse({'event_data': result})


@csrf_exempt
def delete_event_article(request):
    if (request.method == 'POST'):
        data = json.loads(request.body)
        id = data['id']
        img1 = data['img1']
        img2 = data['img2']
        img3 = data['img3']
        img4 = data['img4']
        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        MEDIA_ROOT = os.path.join(BASE_DIR, 'tourism_project/static/media/')

        MEDIA_ROOT1 = os.path.join(MEDIA_ROOT, img1)
        MEDIA_ROOT2 = os.path.join(MEDIA_ROOT, img2)
        MEDIA_ROOT3 = os.path.join(MEDIA_ROOT, img3)
        MEDIA_ROOT4 = os.path.join(MEDIA_ROOT, img4)
        os.remove(MEDIA_ROOT1)
        os.remove(MEDIA_ROOT2)
        os.remove(MEDIA_ROOT3)
        os.remove(MEDIA_ROOT4)

        Event.objects.filter(pk=id).delete()

        event_data = Event.objects.all().values().order_by("-date")
        result = []
        for i in event_data:
            result.append(i)
        return JsonResponse({'event_data': result})


@csrf_exempt
def view_related_trekker_story(request):
    if (request.method == 'GET'):
        id = request.GET.get('id')
        posts = TrekkerStory.objects.filter(trek_id=id).values().order_by("-date")
        result = []
        # result_media = []
        for i in posts:
            result.append(i)

        return JsonResponse({'stories': result})

@csrf_exempt
def view_related_reviews(request):
    if(request.method=='GET'):
        id = request.GET.get('id')
        posts = Reviews.objects.filter(trek_id=id).values().order_by("-date")
        result = []
        # result_media = []
        for i in posts:
            result.append(i)

        return JsonResponse({'reviews': result})


@csrf_exempt
def view_related_event_article_ALL(request):
    if (request.method == 'GET'):
        id = request.GET.get('id')
        event_data = Event.objects.filter(trek_id=id).values().order_by("date")
        result = []
        for i in event_data:
            result.append(i)
        return JsonResponse({'event_data': result})


@csrf_exempt
def get_category_season_using_track_id(request):
    track_id = request.GET.get('track_id')
    category_id_list = Track_Category_Relation.objects.values('category_id').filter(
        track_id=track_id)
    category_id_list=list(category_id_list)
    category_id_list=[x['category_id'] for x in category_id_list]
    category_list=Category.objects.values('id','name').filter(pk__in =  category_id_list )
    category_list=list(category_list)
    category_list=[[x['id'],x['name']] for x in category_list]

    # season list

    season_id_list = Track_Season_Relation.objects.values('season_id').filter(
        track_id=track_id)
    season_id_list = list(season_id_list)
    season_id_list = [x['season_id'] for x in season_id_list]
    season_list = Season.objects.values('id', 'name').filter(pk__in=season_id_list)
    
    season_list = list(season_list)
    season_list = [[x['id'], x['name']] for x in season_list]
    

    return JsonResponse({'category_list': category_list,'season_list':season_list})

@csrf_exempt
def remove_track_category_season_relation(request):
    data = json.loads(request.body)
    
    type=data['type']
    track_id=data['track_selected'][0]['id']
    id=data['data'][0][0]

    
    if type=='season':
        Track_Season_Relation.objects.filter(Q(track_id=track_id) & Q(season_id=id)).delete()
    else:
        Track_Category_Relation.objects.filter(Q(track_id=track_id)&Q(category_id=id)).delete()

    return JsonResponse({'result':'success'})

@csrf_exempt
def scrap(request):  
    
    webdriver_path = '/tourism/tourism_project/tourism_project/chromedriver_linux64/chromedriver.exe' # Enter the file directory of the Chromedriver
    urls = {
                "flipkart" : 'https://www.flipkart.com/',
                "amazon" : 'https://www.amazon.in/',
                "croma" : 'https://www.croma.com/'
            }

    search_item = 'iphone 11' # Chose this because I often search for coffee!

    # Select custom Chrome options
    # options = webdriver.ChromeOptions()
    # options.add_argument('--headless') 
    # options.add_argument('start-maximized') 
    # options.add_argument('disable-infobars')
    # options.add_argument('--disable-extensions')

    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    # Open the Chrome browser
    # browser = webdriver.Chrome()
    browser = webdriver.Chrome(executable_path=binary_path, chrome_options=chrome_options)
    # browser = webdriver.Chrome(ChromeDriverManager(chrome_type=ChromeType.GOOGLE).install())

    browser.get(urls['flipkart'])

    FLIPKART_SEARCH_INPUT = browser.find_element_by_class_name('_3704LK')
    FLIPKART_SEARCH_BUTTON = browser.find_element_by_class_name('L0Z3Pu')

    WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CLASS_NAME, '_3704LK')))
    FLIPKART_SEARCH_INPUT.send_keys(search_item)
    FLIPKART_SEARCH_BUTTON.submit()

    WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CLASS_NAME, '_4rR01T')))
    FLIPKART_DESCRIPTION_SECTION = browser.find_elements_by_class_name('_4rR01T')
    FLIPKART_PRICE_SECTION = browser.find_elements_by_class_name('_30jeq3')
    item_titles = FLIPKART_DESCRIPTION_SECTION
    item_prices = FLIPKART_PRICE_SECTION

    # Initialize empty lists
    titles_list = []
    prices_list = []
    # Loop over the item_titles and item_prices
    for title in item_titles:
        titles_list.append(title.text)
    for price in item_prices:
        prices_list.append(price.text)
    

    # for amazon

    browser.get(urls['amazon'])

    WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.ID, 'twotabsearchtextbox')))

    AMAZON_SEARCH_INPUT = browser.find_element_by_id('twotabsearchtextbox')
    AMAZON_SEARCH_BUTTON = browser.find_element_by_xpath("//input[@type='submit' and @id='nav-search-submit-button']")

    AMAZON_SEARCH_INPUT.send_keys(search_item)
    AMAZON_SEARCH_BUTTON.submit()
    

    WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CLASS_NAME, 'a-price-whole')))
    WebDriverWait(browser, 10).until(EC.presence_of_all_elements_located((By.XPATH, "//span[contains(@class, 'a-size-medium') and contains(@class, 'a-color-base') and contains(@class, 'a-text-normal')]")))
    AMAZON_DESCRIPTION_SECTION = browser.find_elements_by_xpath("//span[contains(@class, 'a-size-medium') and contains(@class, 'a-color-base') and contains(@class, 'a-text-normal')]")
    AMAZON_PRICE_SECTION = browser.find_elements_by_class_name('a-price-whole')
    item_titles = AMAZON_DESCRIPTION_SECTION
    item_prices = AMAZON_PRICE_SECTION

    # Initialize empty lists
    A_titles_list = []
    A_prices_list = []
    # Loop over the item_titles and item_prices
    for title in item_titles:
        A_titles_list.append(title.text)
    for price in item_prices:
        A_prices_list.append(price.text)
    

    # for croma

    browser.get(urls['croma'])

    WebDriverWait(browser, 10).until(EC.presence_of_element_located((By.ID, 'search')))
    CROMA_SEARCH_INPUT = browser.find_element_by_id('search')
    # CROMA_SEARCH_BUTTON = browser.find_element_by_xpath("//input[@type='submit' and @class='nav-input']")

    CROMA_SEARCH_INPUT.send_keys(search_item)
    CROMA_SEARCH_INPUT.send_keys(Keys.RETURN)
    # CROMA_SEARCH_INPUT.submit()
    

    WebDriverWait(browser, 10).until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'product-title')))
    WebDriverWait(browser, 10).until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'amount')))
    CROMA_DESCRIPTION_SECTION = browser.find_elements_by_class_name('product-title')
    CROMA_PRICE_SECTION = browser.find_elements_by_class_name('amount')
    item_titles = CROMA_DESCRIPTION_SECTION
    item_prices = CROMA_PRICE_SECTION

    # Initialize empty lists
    C_titles_list = []
    C_prices_list = []
    # Loop over the item_titles and item_prices
    for title in item_titles:
        C_titles_list.append(title.text)
    for price in item_prices:
        C_prices_list.append(price.text)

    context ={'data':[{'title':titles_list[0:3], 'price':prices_list[0:3]},{'title':A_titles_list[0:3], 'price':A_prices_list[0:3]},{'title':C_titles_list[0:3], 'price':C_prices_list[0:3]}]}
    return render(request,'scrap.html',context)
