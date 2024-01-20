"""
Python code with mosh swapping variables
"""


def main():
    """ Function """

    x = 10
    y = 11
    print(x, y)
    temp = x
    x = y
    y = temp
    print(x, y)

    f = 20
    b = 21
    print(f, b)
    f, b = b, f
    print(f, b)


if __name__ == "__main__":
    main()
