---
layout: default
title:  "BERT architecture"
date:   2020-09-29 03:22:48 +0100
categories: machine-learning
comments: true
---

If you heard many times the words **BERT, Tranformers, Attention Head**... and you still don't really know what's behind, here is the perfect summary.  

If you wonder why we use such techniques, please read [this blogpost](https://guillim.github.io/python/2019/11/29/start-BERT-intent-transformer.html) about why BERT works better than Word2vec and LSTM.

# What is BERT

BERT is a deep learning model, created by Google. It's a statistical way to understand the language. It is a pre-trained model with many applications  such as sentiment analysis, or question answering.

# Why Pre-trained language models

![google](https://wordtracker-swoop-uploads.s3.amazonaws.com/uploads/ckeditor/pictures/3196/content_google_bert_gif.gif)

When Google created a new network architecture in 2017 (see the famous [Attention Is All You Need](https://arxiv.org/abs/1706.03762) paper), that was a big step forward in NLP. They called this network architecture **Transformer**. To compare with previous architecture, understand this: there's no more recurrence, no more "memorize the past words of a sentence" for putting a context around a word.

From this new architecture, Google released the first pre-trained model [BERT](https://arxiv.org/abs/1810.04805) which broke many record. It is so popular because usable for many NLP tasks, with very few additional training : _"BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models for a wide range of tasks"_


# What is the idea to create BERT ?
Using mask modeling :
- you download 100Gb of text (and tokenize it using WordPiece Tokenisation, see [Tokenization](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization))
- hide some words (well... the "tokens")
- ask your model to guess for hidden words.

So basically that's it. You play Hide and seek with your deep learning architecture, and ath the end, it has a good understanding of your language. A statistic understanding of course, but still quite good.

For instance, I tested the BERT model asking it to find what could fit the best in the sentence __Paris is the ????? of France.__
![test](/assets/img/bert/BERT-test.png)

Thanks @HuggingFace for letting this BERT inference possible.

Pretty good right ? You may wonder how he can be 99% sure that __capital__ would be a good fit. Well, it's quite simple : the model has read a big part of the internet. And many times, it has read about Paris being the French capital. It may have even read this exact sentence.

So let's try with something it has never seen : I make up a name, and will ask BERT to tell me more about this imaginary person.

![test](/assets/img/bert/BERT-test2.png)

Note that all words are adjectives : BERT knows the kind of expected words. However, he is not confident on his guesses : only 5% of confidence. BERT has many possibilities in mind, which may explain this.


### For the nerds, the original quote
This is from the orignial BERT paper, and is sefl-explanatory :  

 _BERT alleviates the previously mentioned unidirectionality constraint by using a “masked language model” (MLM) pre-training objective, inspired by the Cloze task (Taylor, 1953). The
masked language model randomly masks some of
the tokens from the input, and the objective is to
predict the original vocabulary id of the masked
arXiv:1810.04805v2 [cs.CL] 24 May 2019
word based only on its context. Unlike left-to-right language model pre-training, the MLM objective enables the representation to fuse the left
and the right context, which allows us to pretrain a deep bidirectional Transformer. In addition to the masked language model_

If you want to learn more about MLM, or how the text is actually represented before entering BERT, see [this blogpost](https://yashuseth.blog/2019/06/12/bert-explained-faqs-understand-bert-working/)

# What is the BERT architecture

1. **Embedding** layer | __E__:  creates the embedding representation of an input word. Think of it as the word vectorisation.
2. Intermediate layers, **the Transformer Blocks** | __Trm__: representations of the same word. (Every layer does some multi-headed attention computation on the word representation of the previous layer to create a new intermediate representation)
3. **Final output** | __T__

In the origianl paper, there were 2 similar architecture
- base – 12 layers, 12 attention heads, and 110 million parameters
- Large – 24 layers, 16 attention heads and, 340 million parameters

For information, training base BERT on 4 cloud TPUs took 4 days.

![archi](/assets/img/bert/BERT-architecture.png)

### Tokenisation

let's say, we have this sentence :  
__My dog is cute. He likes playing.__  
After the tokenization, this sentence turns out to be  
__[CLS] my dog is cute [SEP] he likes play ##ing [SEP]__  

You basically understand that tokeninsation consists in removings uppercase letters, adding specific anchors instead of ponctuation, and grabbing the root meaning of words.

While BERT uses WordPiece algorithm for tokenization, some newer model use [SentencePiece](https://arxiv.org/abs/1808.06226). The difference is whole-word masking and not sub-word masking.

### Embedding

Embedding is a vectorisation. There are many algorithm for Embedding, and BERT use [WordPiece embeddings](https://arxiv.org/pdf/1609.08144.pdf).

if you read Google's paper, you'll see this schema :
![archi](/assets/img/bert/BERT-embedding.png)
_The input embeddings are the sum of the token embeddings, the segmentation embeddings and the position embeddings._

Each word gets transformed into a vector of size 512 (size that can be changed in BERT children)

You can see we have 10 columns, because the tokenized sentence has 10 tokens. In real life, the number of columns is equal to the longest sentence number of tokens. I read that for BERT, maximum number of columns was 512 - to be confirmed.

### Transformer block

This part is quite long and difficult. Best sources of information are these :
- Google 2017 paper : [Attention Is All You Need](https://arxiv.org/abs/1706.03762)  
- The Annotated Transformer : [harvardNLP](https://nlp.seas.harvard.edu/2018/04/03/attention.html)  
- Google 2018 paper : [BERT](https://arxiv.org/abs/1810.04805)  
- Nice illustration of transformers : [jalammar](http://jalammar.github.io/illustrated-transformer/)  

If you don't have time for these papers, here what you need to remember.

First what we call _Transformer_ usually reference to the model, composed as you now understand of an Embedding layer, many Tranformer blocks in the middle, and the output layer.  



# Fine tuning

Now that we have BERT, what do we do ?

![finetuning](/assets/img/bert/BERT-finetuning.png)

_Figure 1: Overall pre-training and fine-tuning procedures for BERT. Apart from output layers, the same architectures are used in both pre-training and fine-tuning. The same pre-trained model parameters are used to initialize
models for different down-stream tasks. During fine-tuning, all parameters are fine-tuned. [CLS] is a special
symbol added in front of every input example, and [SEP] is a special separator token (e.g. separating questions/answers)._

From this statement, we understand that BERT is sort of a big Matrix, and parameters inside this Matrix will be modified by an additional training, called the "Fine tuning" process. After BERT is fine-tuned, the output changes from _"finding the word hidden by [MASK]"_ to a specific task like question-answering, in this case _"finding the span answering the question"_.

Note that every parameter from this Matrix will change, not only the one from the last transformer layer.


# Reference
Fine-tuning tasks : [question-answering | SQuAD](https://rajpurkar.github.io/SQuAD-explorer/)  
Fine-tuning tasks : [sentiment-analysis | CLS](https://webis.de/data/webis-cls-10.html)  
LePetit experiments : [medium](https://medium.com/illuin/lepetit-a-pre-training-efficient-and-lightning-fast-french-language-model-96495ad726b3)  
Google 2017 paper : [Attention Is All You Need](https://arxiv.org/abs/1706.03762)  
The Annotated Transformer : [harvardNLP](https://nlp.seas.harvard.edu/2018/04/03/attention.html)  
Google 2018 paper : [BERT](https://arxiv.org/abs/1810.04805)  
Nice illustration of transformers : [jalammar](http://jalammar.github.io/illustrated-transformer/)  
BERT faq : [yashuseth blog](https://yashuseth.blog/2019/06/12/bert-explained-faqs-understand-bert-working/)  
WordPiece Tokenisation : [stackoverflow](https://stackoverflow.com/questions/55382596/how-is-wordpiece-tokenization-helpful-to-effectively-deal-with-rare-words-proble/55416944#55416944)  
Another Tokenisation : [SentencePiece](https://arxiv.org/abs/1808.06226)  
Bias : [Gender Bias in BERT](https://arxiv.org/pdf/2009.05021.pdf)  
More on [word embedding](https://medium.com/deeper-learning/glossary-of-deep-learning-word-embedding-f90c3cec34ca)  
