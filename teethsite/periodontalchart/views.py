from django.shortcuts import render
def ind(request):
    return render(request, 'periodontalchart/index.html')

def about(request):
    return render(request, 'periodontalchart/about.html')

#def before(request):
 #   return render(request, 'periodontalchart/index.html', {
  #      'image_src': 'img/1.PNG',
   #     'message': 'Hii! GeeksforGeeks people'
   # })

#def after(request):
 #   return render(request, 'periodontalchart/index.html', {
   #     'image_src': 'img/2.PNG',
    #    'message': 'Bye! GeeksforGeeks people'
   # })
