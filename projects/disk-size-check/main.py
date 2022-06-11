"""
Check the size of the disk and notify the user if there's not much space left.
"""

import shutil


def main():
    print(f"{shutil.disk_usage('/mnt/vd0').free // (2**30)} GB")


if __name__ == "__main__":
    main()
