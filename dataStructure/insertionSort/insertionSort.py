# Método de Inserción

def insertion_sort(list_of_numbers: list) -> list:
    """
    Sorts a list of numbers in ascending order using the insertion sort algorithm.
    The objective of the insertion_sort function is to sort a given list of numbers in ascending order using the insertion sort algorithm.

    Args:
        list_of_numbers (list): The list of numbers to be sorted.

    Returns:
        list: The sorted list of numbers.
    """
    for i in range(1, len(list_of_numbers)):
        temp = list_of_numbers[i]  # temp is the current element
        j = i - 1  # j is the index of the previous element
        # while the current element is less than the previous element
        while j >= 0 and temp < list_of_numbers[j]:
            list_of_numbers[j + 1], list_of_numbers[j] = list_of_numbers[j], temp
            j -= 1

    return list_of_numbers


print(insertion_sort([5, 4, 3, 9]))