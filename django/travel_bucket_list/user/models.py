from django.db import models
import uuid
from django.contrib.auth.models import User
from django.db.models.base import Model
# Create your models here.
class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,null=True,blank=True)
    first_name=models.CharField(max_length= 200,null=True,blank=True)
    user_name=models.CharField(max_length= 200,null=True,blank=True)
    email=models.EmailField(max_length=200,null=True,blank=True)
    
    
    created= models.DateTimeField(auto_now_add=True)
    id= models.UUIDField(default=uuid.uuid4,primary_key=True,unique=True,editable=False)


    def __str__(self):
        return str(self.user_name)


class BucketList(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,null=True,blank=True)
    place=models.CharField(max_length= 200,null=True,blank=True)
    city=models.CharField(max_length= 200,null=True,blank=True)
    
    state=models.CharField(max_length= 200,null=True,blank=True)
    country=models.CharField(max_length=200,null=True,blank=True)
    
    
    created= models.DateTimeField(auto_now_add=True)
    id= models.UUIDField(default=uuid.uuid4,primary_key=True,unique=True,editable=False)


    def __str__(self):
        return str(self.user_name)
