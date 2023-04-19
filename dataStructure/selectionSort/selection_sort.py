# Ordenamiento por selección


def selection_sort(list_of_numbers: list) -> list:
    for i in range(len(list_of_numbers)):
        minimum = i
        for j in range(i+1, len(list_of_numbers)):
            if (list_of_numbers[j] < list_of_numbers[minimum]):
                minimum = j
        temp = list_of_numbers[i]
        list_of_numbers[i] = list_of_numbers[minimum]
        list_of_numbers[minimum] = temp
        
    return list_of_numbers


print(selection_sort([5,4,3,9]))
        