from django.http.response import HttpResponse
from django.db.models import Q
from django.shortcuts import render
from .models import Profile

# Create your views here.


def createUser(request):
    profile = Profile.objects.get(name='surekha')
    pk=Profile.objects.get(name='Dhananjay')
    chats = profile.messages.filter(receiver=pk.id)
    print(chats)

    
    
    context={
        'chats':chats
    }
    return render(request,'./users/index.html',context)
