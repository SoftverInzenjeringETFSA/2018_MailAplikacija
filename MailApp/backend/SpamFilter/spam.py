import datameta as dm
import numpy as np

import data
import time


def tf(word_freq_dict):
    unique_word_count = len(word_freq_dict)
    tf_dict = dict()
    for entry in word_freq_dict:
        tf_dict[entry[1]] = entry[0][0] / unique_word_count
    return tf_dict


def idf(word_freq_dict, doc_cnt):
    idf_dict = dict()
    for entry in word_freq_dict:
        idf_dict[entry[1]] = np.log10(doc_cnt / entry[0][1])
    return idf_dict


class Classifier(object):
    def __init__(self):
        self.ham = data.preprocess_ham()
        self.spam = data.preprocess_spam()
        bg_size = len(list(data.get_txts_recursive(dm.BG_DATASET_PATH)))
        en_size = len(list(data.get_txts_recursive(dm.ENRON_DATASET_HAM_PATH)))


    def predict(self, message):
        spam_prob = 0
        ham_prob = 0
        data.extract_from_lines(message)


def main():
    pass


if __name__ == '__main__':
    start = time.time()
    main()
    end = time.time()
    print(end - start)
