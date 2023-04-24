# Búsqueda Lineal


def linear_search(list_of_numbers: list, number: int) -> int:
    for position in range(len(list_of_numbers)):
        if list_of_numbers[position] == number:
            return position
    return None

def search(number: int, list_of_numbers: list)-> str:
    if linear_search(list_of_numbers , number) == None:
      return f'El número {number} no se encontro'
    else:
        return f'El número {number} se encontro en la posición {linear_search(list_of_numbers, number)}'
    
print(search(4, [5,2,3,2]))