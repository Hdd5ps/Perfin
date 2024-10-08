from django.urls import path
from . import views

urlpatterns = [
    path('add_income/', views.add_income, name='add_income'),
    path('add_expense/', views.add_expense, name='add_expense'),
    path('add_savings_goal/', views.add_savings_goal, name='add_savings_goal'),
]

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('add_income/', views.add_income, name='add_income'),
    path('add_expense/', views.add_expense, name='add_expense'),
    path('add_savings_goal/', views.add_savings_goal, name='add_savings_goal'),
]
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('add_income/', views.add_income, name='add_income'),
    path('add_expense/', views.add_expense, name='add_expense'),
    path('add_savings_goal/', views.add_savings_goal, name='add_savings_goal'),
    path('login/', auth_views.LoginView.as_view(template_name='tracker/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='tracker/logout.html'), name='logout'),
]

