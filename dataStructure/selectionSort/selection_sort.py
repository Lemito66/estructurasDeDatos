# Ordenamiento por selección


def selection_sort(list_of_numbers: list) -> list:
    """
    Sorts a list of numbers in ascending order using the selection sort algorithm.
    The objective of the selection_sort function is to sort a given list of numbers in ascending order using the selection sort algorithm.

    Args:
        list_of_numbers (list): The list of numbers to be sorted.

    Returns:
        list: The sorted list of numbers.
    """
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
print(selection_sort([1,2,3,4,5]))
print(selection_sort([10,9,8,7,6]))