"""
Python code with mosh queues
"""


from collections import deque


def main():
    """ Function """
    
    queue = deque([])
    queue.append(1)
    queue.append(2)
    queue.append(3)
    print(queue)
    queue.popleft()
    print(queue)
    if not queue:
        print("empty")


if __name__ == "__main__":
    main()
