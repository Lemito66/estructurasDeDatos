def bubble_sort(list_of_numbers: list) -> list:
    for i in range(len(list_of_numbers)):
        sorted = True
        for j in range(len(list_of_numbers)-1):
            if list_of_numbers[j] > list_of_numbers[j + 1]:
              sorted = False
              temp = list_of_numbers[j]
              list_of_numbers[j] = list_of_numbers[j + 1]
              list_of_numbers[j + 1] = temp
        if sorted:
            break
    return list_of_numbers


print(bubble_sort([5,9,10,3,-1]))