import data
import time


def main():
    data.preprocess()


if __name__ == '__main__':
    start = time.time()
    main()
    end = time.time()
    print(end - start)


