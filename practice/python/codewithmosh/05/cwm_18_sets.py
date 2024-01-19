"""
Python code with mosh sets
"""


def main():
    """ Function """

    numbers = [1, 1, 2, 3, 4]
    first = set(numbers)
    second = {1, 5}

    print(first | second)
    print(first & second)
    print(first - second)
    print(first ^ second)


if __name__ == "__main__":
    main()
