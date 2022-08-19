from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from .forms import customUserCreationForm
# Create your views here.
def index(request):
    form = customUserCreationForm()
    if request.method=='POST':
        form = customUserCreationForm(request.POST)
        
        if form.is_valid():
            user = form.save(commit=False)
            user.username=user.username.lower()
            user.save()
            return redirect('')
    context={
        'form':form
    }
    return render(request,'users/index.html',context)

    