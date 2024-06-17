---
layout: default
title: "AWS Lamdba layer for installing python package the serverless way"
date: 2020-12-15 03:22:48 +0100
categories: AWS serverless
comments: true
thumbnail: /assets/img/aws-create-layer.png
---

You are new to serverless on AWS, and you feel there python packages are missing, right ? Except for numpy and scipi, you are right : there are no packages by default on AWS lambda functions. Here is how you can install them.

# 1 - Install your package on your computer

let's say you want to install numpy. We begin on our local computer, creating a working fodler and typing :

```bash
mkdir working_dir
cd working_dir
docker run --rm -v $(pwd):/foo -w /foo lambci/lambda:build-python3.7 pip install numpy -t python
```

Note : `lambci/lambda:build-python3.7` can be changed to your better suited python version if required. It's a way for us tu replicate AWS servers so that the installing process is similar to what we will push to AWS later.

# 2 - Store it online

Now that our package is installed into the /python directory, we can push it to AWS storage plateform called S3.

### Zip the Folder

First, let's zip our folder :

```bash
zip -r my_custom_numpy_layer python/
```

### Push it to S3

Then, let's go to [AWS S3 interface](https://s3.console.aws.amazon.com/s3/buckets/) and create a bucket in our favorite region (_us-east-1_ for instance). Now we can upload our **my_custom_numpy_layer.zip** file to this bucket ! Copy the Link Url

This step may not be required for small packages, but bugger ones have to be uploaded to S3. If you package is small, you can skip this S3 complication.

# 3 - Layer & Lambda Function

### Create your Layer

We will now create our **my_custom_numpy_layer** on [Lambda interface](https://console.aws.amazon.com/lambda/home?region=us-east-1#/create/layer). Simply follow the instruction, see bellow:

![create AWS layer](/assets/img/aws-create-layer.png)

Don't forget to mention the runtimes you want (python 3.7 in this example)

### Add your layer

Now, just go to your [Lambda function](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/). In the "code" tab, you will be able to add a layer at the bottom of the webpage. It will look like this :  
![create AWS layer](/assets/img/aws-layer-add.png)

Since you previously created the layer, you will see it appear in your custom layers !!! Easy.

### Use your paackage

Here we go : in the code editor, you can now import numpy !!!

![create AWS layer](/assets/img/aws-use-package.png)

### Note :

- If you need to use several layers together, some packages will be redundant. Then, better check this tutorial out : [theashworld](https://github.com/theashworld/nlp_on_aws_lambda) for installing only the additional packages.
- For nodeJs or other language, apply similar steps accordingly.
- If you have errors with the region, it's because you Lambda function lies in a different region than your S3 Bucket. Please re-upload into a S3 bucket in the proper region

# Reference

Main source of inspiration : [theashworld](https://github.com/theashworld/nlp_on_aws_lambda)  
Layer is not enough : use a Lamdba [docker container](https://github.com/lambci/docker-lambda)
