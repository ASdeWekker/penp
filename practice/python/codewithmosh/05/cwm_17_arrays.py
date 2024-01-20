"""
Python code with mosh arrays
"""


from array import array


def main():
    """ Function """

    numbers = array("i", [1, 2, 3])
    print(numbers[0])  # only use array for lists with more than 10k entries.


if __name__ == "__main__":
    main()
