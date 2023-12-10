"""
Python code with mosh filter functions
"""


def main():
    """ Function """

    items = [
        ("Product1", 10),
        ("Product2", 9),
        ("Product3", 12),
    ]

    filtered = list(filter(lambda item: item[1] >= 10, items))
    print(filtered)


if __name__ == "__main__":
    main()
