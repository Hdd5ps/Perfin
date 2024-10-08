from django.shortcuts import render, redirect
from .models import Income, Expense, SavingsGoal
from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):
    incomes = Income.objects.filter(user=request.user)
    expenses = Expense.objects.filter(user=request.user)
    savings_goals = SavingsGoal.objects.filter(user=request.user)
    context = {
        'incomes': incomes,
        'expenses': expenses,
        'savings_goals': savings_goals
    }
    return render(request, 'tracker/dashboard.html', context)


# View to add income
@login_required  # Ensure the user is logged in before accessing this view
def add_income(request):
    if request.method == "POST":  # Check if the request method is POST
        amount = request.POST['amount']  # Get the amount from the form data
        source = request.POST['source']  # Get the source from the form data
        date = request.POST['date']  # Get the date from the form data
        # Create a new Income object and save it to the database
        Income.objects.create(user=request.user, amount=amount, source=source, date=date)
        return redirect('dashboard')  # Redirect to the dashboard after adding income
    return render(request, 'tracker/add_income.html')  # Render the add income form

# View to add expense
@login_required  # Ensure the user is logged in before accessing this view
def add_expense(request):
    if request.method == "POST":  # Check if the request method is POST
        amount = request.POST['amount']  # Get the amount from the form data
        category = request.POST['category']  # Get the category from the form data
        date = request.POST['date']  # Get the date from the form data
        # Create a new Expense object and save it to the database
        Expense.objects.create(user=request.user, amount=amount, category=category, date=date)
        return redirect('dashboard')  # Redirect to the dashboard after adding expense
    return render(request, 'tracker/add_expense.html')  # Render the add expense form

# View to add a savings goal
@login_required  # Ensure the user is logged in before accessing this view
def add_savings_goal(request):
    if request.method == "POST":  # Check if the request method is POST
        goal_name = request.POST['goal_name']  # Get the goal name from the form data
        target_amount = request.POST['target_amount']  # Get the target amount from the form data
        current_amount = request.POST['current_amount']  # Get the current amount from the form data
        due_date = request.POST['due_date']  # Get the due date from the form data
        # Create a new SavingsGoal object and save it to the database
        SavingsGoal.objects.create(user=request.user, goal_name=goal_name, target_amount=target_amount, current_amount=current_amount, due_date=due_date)
        return redirect('dashboard')  # Redirect to the dashboard after adding savings goal
    return render(request, 'tracker/add_savings_goal.html')  # Render the add savings goal form
