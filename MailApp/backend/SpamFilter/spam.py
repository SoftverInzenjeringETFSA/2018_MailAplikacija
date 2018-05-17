import data
import time


class Classifier(object):
    def __init__(self):
        self.ham = data.preprocess_ham()
        self.spam = data.preprocess_spam()


def main():
    pass

if __name__ == '__main__':
    start = time.time()
    main()
    end = time.time()
    print(end - start)
