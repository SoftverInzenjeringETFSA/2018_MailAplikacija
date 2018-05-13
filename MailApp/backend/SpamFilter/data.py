import concurrent.futures
import os
import re
import matplotlib.pyplot as plt
import numpy as np
import datameta as dm

from functools import reduce


def get_txts_recursive(path):
    for root, dirs, files in os.walk(path):
        for file in files:
            if file.endswith(".txt"):
                yield os.path.join(root, file)


def strip_html_tags(text):
    return text.replace('<[^<]+?>', '')


def union_sets(x, y):
    return x.union(y)


def union_dicts(x, y):
    if len(x) == 0:
        return y
    elif len(y) == 0:
        return x
    else:
        for k, v in y.items():
            x[k] = x[k] + v if k in x else v
        return x


def filter_words(dictionary):
    for key in list(filter(lambda x: len(x) < 4, dictionary.keys())):
        del dictionary[key]
    for word in dm.STOP_WORDS.union(dm.BANNED_HTML_CSS):
        if word in dictionary:
            del dictionary[word]
    return dictionary


def extract_bg_words(path):
    def get_email_content(lines):
        return lines[(lines.index("\n") + 1):] if "\n" in lines else []

    def remove_non_alphanum(lowered):
        return [re.sub('[^a-z]+', ' ', line) for line in lowered]

    def get_word_dict(line):
        dictionary = dict()
        for word in line.split():
            dictionary[word] = dictionary[word] + 1 if word in dictionary else 1
        return dictionary

    def get_word_dict_from_lines(lines):
        return reduce(union_dicts, map(get_word_dict, [line for line in lines]))

    with open(path, encoding='ascii', errors='ignore') as f:
        raw_lines = f.readlines()
        # Content starts from newline
        content = get_email_content(raw_lines)

        if len(content) == 0:
            return dict()

        # content = reduce(lambda x, y: x + y, content)

        # Strip tags
        stripped_tags = map(strip_html_tags, content)
        # To lower
        lowered_lines = [line.lower() for line in stripped_tags]
        alphanum_lines = remove_non_alphanum(lowered_lines)
        word_dict = get_word_dict_from_lines(alphanum_lines)
        return word_dict


def preprocess_bg():
    def get_word_dict():
        files = list(get_txts_recursive(dm.BG_DATASET_PATH))
        with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
            word_dict = reduce(union_dicts, executor.map(extract_bg_words, files))
            return word_dict

    return filter_words(get_word_dict())


def seq_preprocess_bg():
    for file in get_txts_recursive(dm.BG_DATASET_PATH):
        extract_bg_words(file)


def preprocess_enron():
    pass


def top_n_words(word_dict, n):
    return sorted(map(lambda e: (e[1], e[0]), word_dict.items()), reverse=True)[:n]


def analyze_dict(top):
    words = dict()
    for v in top:
        words[v[1]] = v[0]
    plt.bar(np.arange(len(top)), list(words.values()))
    plt.xticks(np.arange(len(top)), words.keys())
    plt.show()


def preprocess():
    word_dict = preprocess_bg()
    print(len(word_dict))
    top = top_n_words(word_dict, dm.TOP_N)
    print(list(map(lambda x: x[1], top)))
    analyze_dict(top)
