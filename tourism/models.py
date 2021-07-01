from django.db import models
from django.contrib.auth.models import User
from datetime import datetime


class Track_info(models.Model):
    track_name=models.CharField(max_length=100)
    track_description=models.CharField(max_length=10000)
    track_cost=models.IntegerField()
    track_cost_cusomization = models.CharField(max_length=5000)
    track_duration = models.IntegerField()
    track_altitude = models.CharField(max_length=100)
    track_difficulty=models.CharField(max_length=100)
    date=models.DateTimeField(default=datetime.now)
    track_length = models.IntegerField()
    track_best_season = models.TextField(max_length=1000)
    track_start_point = models.TextField(max_length=100)
    track_end_point = models.TextField(max_length=100)
    track_railway = models.TextField(max_length=500)
    track_airport = models.TextField(max_length=500)
    track_road = models.TextField(max_length=500)



class Posts(models.Model):
    blog_title=models.CharField(max_length=100)
    blog_subject=models.CharField(max_length=100)
    blog_details=models.CharField(max_length=10000)
    blog_image = models.ImageField(upload_to='blog_pics')
    date = models.DateTimeField(default=datetime.now)


class Track_media(models.Model):
    track_id=models.ForeignKey(Track_info, on_delete=models.CASCADE)
    track_image=models.ImageField(upload_to='pics')

class Slider_media(models.Model):
    image=models.ImageField(upload_to='home_slider_pics')
    title=models.CharField(max_length=100)
    detail=models.CharField(max_length=10000)
    date = models.DateTimeField(default=datetime.now)


class Day_plan(models.Model):
    track_id=models.ForeignKey(Track_info, on_delete=models.CASCADE)
    track_description=models.CharField(max_length=10000)
    day=models.IntegerField()

    class Meta:
        unique_together = ('track_id', 'day',)

class Sub_day_plan(models.Model):
    day_plan_id=models.ForeignKey(Day_plan, on_delete=models.CASCADE)
    sub_description=models.CharField(max_length=10000)
    serial=models.IntegerField()

    class Meta:
        unique_together = ('day_plan_id', 'serial',)

class Track_enquiry(models.Model):
    name=models.CharField(max_length=100)
    mobile=models.CharField(max_length=100)
    email= models.CharField(max_length=100)
    destination=models.CharField(max_length=100)
    status=models.CharField(max_length=100)
    date = models.DateTimeField(default=datetime.now)

class Season(models.Model):
    name=models.CharField(unique=True, max_length=100)
    description=models.CharField(max_length=10000,blank=True, null=True)

class Category(models.Model):
    name=models.CharField(unique=True, max_length=100)
    description=models.CharField(max_length=10000,blank=True,null=True)

class Track_Season_Relation(models.Model):
    track_id=models.ForeignKey(Track_info, on_delete=models.CASCADE)
    season_id=models.ForeignKey(Season, on_delete=models.PROTECT)

    class Meta:
        unique_together = ('track_id', 'season_id',)

class Track_Category_Relation(models.Model):
    track_id=models.ForeignKey(Track_info, on_delete=models.CASCADE)
    category_id=models.ForeignKey(Category, on_delete=models.PROTECT)

    class Meta:
        unique_together = ('track_id', 'category_id',)

class Reviews(models.Model):
    name=models.CharField(max_length=100)
    description=models.CharField(max_length=1000)
    star=models.CharField(max_length=10000)
    photo=models.ImageField(upload_to='review_pics')
    status=models.CharField(max_length=100)
    trek_id=models.CharField(max_length=100)
    trek_name = models.CharField(max_length=100)
    category=models.CharField(max_length=1000)
    date = models.DateTimeField(default=datetime.now)

class TrekkerStory(models.Model):
    name=models.CharField(max_length=100)
    description=models.CharField(max_length=5000)
    profile_photo=models.ImageField(upload_to='trekker_story_pics')
    trek_photo = models.ImageField(upload_to='trekker_story_pics')
    status=models.CharField(max_length=100)
    trek_id=models.CharField(max_length=100)
    trek_name = models.CharField(max_length=100)
    date = models.DateTimeField(default=datetime.now)

class Event(models.Model):
    type=models.CharField(max_length=100)
    trek_id=models.CharField(max_length=10)
    subject = models.CharField(max_length=100)

    img1=models.ImageField(upload_to='event_pics')
    sub1 = models.CharField(max_length=100)
    des1 = models.TextField()

    img2 = models.ImageField(upload_to='event_pics')
    sub2 = models.CharField(max_length=100)
    des2 = models.TextField()

    img3 = models.ImageField(upload_to='event_pics')
    sub3 = models.CharField(max_length=100)
    des3 = models.TextField()

    img4 = models.ImageField(upload_to='event_pics')
    sub4 = models.CharField(max_length=100)
    des4 = models.TextField()

    date = models.DateTimeField(default=datetime.now)


# class Order(models.Model):
#     # order_user_id=models.ForeignKey(User,null=True, blank=True,on_delete=models.SET_NULL)
#     order_product_id = models.ForeignKey(Product,null=True, blank=True,on_delete=models.SET_NULL)
#     order_customer_name = models.CharField(max_length=200)
#     order_amount=models.IntegerField()
#     order_address=models.CharField(max_length=1000)
#     order_phone=models.CharField(max_length=1000)
#     # order_email=models.CharField(max_length=100)
#     order_date = models.DateTimeField(auto_now_add=True, blank=True)
#     order_status=models.CharField(max_length=100)
#     order_quantity = models.CharField(max_length=100)
#
# class Order_Item_Details(models.Model):
#     order_product_id=models.ForeignKey(Order,null=True, blank=True,on_delete=models.SET_NULL)
#     product_name=models.CharField(max_length=100)
#     product_image=models.ImageField(upload_to='pics')
#     product_size=models.CharField(max_length=10)
#     product_price=models.IntegerField()
#     product_type = models.CharField(max_length=100)
#     product_gender = models.CharField(max_length=100)
#
# class Product_type(models.Model):
#     product_type_name=models.CharField(max_length=1000)
#     product_type_gender = models.CharField(max_length=1000)
#     # def getAtt(self):
#     #     return (
#     #         {'name':self.product_type_name,
#     #          'gender':self.product_type_gender,
#     #          })
#
#
#
