from django.db.models.signals import post_save,post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import profile
from django.core.mail import send_mail
from django.conf import settings
# @receiver(post_save,sender=profile)
def createProfile(sender,instance,created,**kwargs):
    
    if created:
        user=instance
        Profile=profile.objects.create(
            user=user,
            user_name=user.username,
            email=user.email,
            name=user.first_name,
            )

        subject = "Welcome to Devsearch"
        message=  "We are glad you are  here!"
        send_mail(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            [profile.email],
            fail_silently=False,
        )


        
def updateUser(sender,instance ,created,**kwargs):
    profile=instance
    user=profile.user
    
    if created==False:
        user.first_name=profile.name
        user.username=profile.user_name
        user.email=profile.email
        user.save()



def deleteUser(sender,instance,**kwargs):
    user=instance.user
    user.delete()
    print('deleting user...')


post_save.connect(createProfile,sender=User)
post_save.connect(updateUser,profile)
post_delete.connect(deleteUser,sender=profile)