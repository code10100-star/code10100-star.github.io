from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.db.models.base import Model


class customUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name','email','username','password1','password2']
        labels ={
            'first_name':'Name',
        }
        