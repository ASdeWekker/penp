"""
Python code with mosh tuples
"""


def main():
    """ Function """
    
    point_a = 1,  # use a trailing comma to identify it as a tuple
    point_b = ()  # empty brackets to define as a tuple
    print(type(point_a))
    print(type(point_b))

    point_c = (1, 2) * 3
    print(point_c)

    point_d = tuple("Hello World")
    print(point_d)


if __name__ == "__main__":
    main()
