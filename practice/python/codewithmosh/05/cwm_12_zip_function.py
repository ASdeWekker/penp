"""
Python code with mosh zip function
"""


def main():
    """ Function """

    list1 = [1, 2, 3, 4]
    list2 = [10, 20, 30, 40]

    print(list(zip("abcd", list1, list2)))


if __name__ == "__main__":
    main()
