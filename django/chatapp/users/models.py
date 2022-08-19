from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields import CharField, TextField
from django.contrib.auth.models import User
import uuid

# Create your models here.


class Profile(models.Model):
    user  =models.OneToOneField(User,on_delete=models.CASCADE,null=True,blank=True)
    name = CharField(max_length=50,blank=True,null=True)
    email = models.EmailField(max_length=200,null=True,blank=True)
    username = models.CharField(max_length=200,null=True,blank=True)

    created= models.DateTimeField(auto_now_add=True)
    id= models.UUIDField(default=uuid.uuid4,primary_key=True,unique=True,editable=False)


    def __str__(self):
        return str(self.name)


class Chat(models.Model):
    sender = models.ForeignKey(Profile,on_delete=CASCADE,null=True,blank=True)
    receiver= models.ForeignKey(Profile,on_delete=models.SET_NULL,null=True,blank=True,related_name="messages")

    message = TextField()
    created= models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4,primary_key=True,unique=True,editable=False)

    def __str__(self):
        return self.message

    class Meta:
        ordering = ['-created']
