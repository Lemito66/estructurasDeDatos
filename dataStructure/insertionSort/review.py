def insertion_sort(list_of_numbers: list) -> list:
    for i in range(1, len(list_of_numbers)):
        temp = list_of_numbers[i]
        j = i - 1
        while j >= 0 and temp < list_of_numbers[j]:
            list_of_numbers[j + 1], list_of_numbers[ j ] = list_of_numbers[ j ], temp
            j -=1
    return list_of_numbers

print(insertion_sort([9,5,6,4,3,-1]))