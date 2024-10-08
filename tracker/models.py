from django.db import models
from django.contrib.auth.models import User

# Model to represent Income
class Income(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link income to a specific user
    amount = models.DecimalField(max_digits=10, decimal_places=2)  # Amount of income
    source = models.CharField(max_length=100)  # Source of the income
    date = models.DateField()  # Date of the income

# Model to represent Expense
class Expense(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link expense to a specific user
    amount = models.DecimalField(max_digits=10, decimal_places=2)  # Amount of expense
    category = models.CharField(max_length=100)  # Category of the expense (e.g., groceries, rent)
    date = models.DateField()  # Date of the expense

# Model to represent SavingsGoal
class SavingsGoal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link savings goal to a specific user
    goal_name = models.CharField(max_length=100)  # Name of the savings goal
    target_amount = models.DecimalField(max_digits=10, decimal_places=2)  # Target amount to save
    current_amount = models.DecimalField(max_digits=10, decimal_places=2)  # Amount saved so far
    due_date = models.DateField()  # Due date for achieving the goal

    # Calculate the remaining amount to reach the goal
    def remaining_amount(self):
        return self.target_amount - self.current_amount

# Model to represent Visualizations
class Visualization(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link visualization to a specific user
    chart_type = models.CharField(max_length=50)  # Type of chart (e.g., bar, line)
    data = models.JSONField()  # Data to be visualized in JSON format
    date_created = models.DateField(auto_now_add=True)  # Date the visualization was created
