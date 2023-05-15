import requests

def get_tasks():
    try:
        url = 'http://127.0.0.1:8000/tasks/api/v1/tasks/'
        response = requests.get(url)
        
        return response.json()
    except:
      print('Ha ocurrido un error')
    

print(get_tasks())