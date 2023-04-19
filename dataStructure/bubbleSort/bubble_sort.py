""" Método Burbuja """


def bubble_sort(list_of_numbers: list) -> list:
    """The objective of the function is to sort a list of numbers using the bubble sort algorithm. This algorithm compares adjacent elements in the list and swaps them if they are in the wrong order, repeating the process until the list is sorted in ascending order."""
    for i in range(len(list_of_numbers)):
        sorted = True
        for j in range(len(list_of_numbers)-1):
            if list_of_numbers[j] > list_of_numbers[j+1]:
                sorted = False
                number_to_replace = list_of_numbers[j]
                list_of_numbers[j] = list_of_numbers[j+1]
                list_of_numbers[j+1] = number_to_replace
        if sorted:
            break
    return list_of_numbers


print(bubble_sort([1,2,3,4,5]))
