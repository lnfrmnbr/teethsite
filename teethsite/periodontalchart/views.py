from django.shortcuts import render
def ind(request):
    return render(request, 'periodontalchart/index.html')

def about(request):
    return render(request, 'periodontalchart/about.html')
