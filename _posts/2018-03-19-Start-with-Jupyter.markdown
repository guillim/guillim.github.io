---
layout: default
title:  "Start with Jupyter"
date:   2018-03-19 03:22:48 +0100
categories: python
comments: true
---

You want to learn how to use *Jupyter*, the best way to develop in python ? Here is what you can do  
Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Anaconda: 5.1`  
`Jupyter notebook: 5.4.0`  
`Browser: Google Chrome v64`  

# 1.  Pre requisite

Install Anaconda following this [link][Anaconda]  
It will set up the environment for you so you don't have to worry about compatibilities  

# 2.  Start Jupyter

Open the Anaconda Navigator application. It will prompt a screen like this one:  
![screenshot]( https://ibin.co/3vVzhi28BoWy.png){:class="img-responsive"}  


Then click on the _Launch_ button for Jupyter Notebook.  
It will open a tab on your internet browser like the following:  

![screenshot2]( https://ibin.co/3vW11VhfNSX7.png){:class="img-responsive"}

Note that there are 3 tabs: __Files__, __Running__ and __Clusters__.  
Only the __Files__ tab allow you to open or create notebooks.

# 3. Create a Notebook

Super Easy: click  _Python 3_  

![screenshot]( https://ibin.co/3vW2IoVs99gc.png){:class="img-responsive"}  


Name it _(by clicking on 'Untitled')_  

![screenshot]( https://ibin.co/3vW3PoWawSHn.png){:class="img-responsive"}  


By giving it a name, the notebook will be __saved__ as a file with extension __.ipynb__  


Now if you come back to the __Files__ tab, you see your new file. I named it _test_ and as you can see, its status is "running" because I left it open.  

![screenshot]( https://ibin.co/3vW4kYGd2CwK.png){:class="img-responsive"}

# 3. Edit your Notebook

Code VS Markdown: there is a cell type on the right. It lets you choose between commenting your code (using Markdown) or writing python code (selecting code).  

![screenshot]( https://ibin.co/3vW6mNLaqDLe.png){:class="img-responsive"}

Let's practise with commenting `First line of comment` on top of a python code that returns the string `printed out`  
How to validate one cell: type __\<Shift\> + \<Enter\>__  


![screenshot]( https://ibin.co/3vW80Ya8aNhE.png){:class="img-responsive"}  

Note: type Esc to exit the edit mode of a cell  

Note: All key shortcuts, simply go to _Help → Keyboard Shortcuts_  
My favorites:  
 * Insert Cell: \<Esc\> + \<b\>
 * Delete Cell: \<Esc\> + \<d\> + \<d\>
 * Copy & paste Cell: Select a cell + \<Esc\> + \<c\> + \<v\>


# 4. Commit your script

If you don't know what __commit__ stands for: [read this][commit]

A cool function of Jupyter Notebook is the ability to create checkpoint, which basically are Jupyter way for commiting your script.   

 * Create a new checkpoint: go to _File_ and click on _Save and Checkpoint_. The notebook is saved at this current state.  
 * Go back to a previous checkpoint: go to _File_, then _Revert to Checkpoint_ and click on the checkpoint you want.  

# 5. Export your Notebook

You will probably use Jupyter as an editor, and then you will need to get your python code out of Jupyter.  

Easy: go to _File_ → _Download as_  

![screenshot]( https://ibin.co/3vWGfZVwRFmv.png){:class="img-responsive"}  


# 6. Change the Root folder

 If you come back to the Files tab, you see every folder. And you can modify what you want, so some mistakes may happen... like deleting the folder "Documents" simply using the Jupyter.      
 That's why we will change the default Folder ```/``` to a specific folder like this ```/Users/username/the/path/you/want/```


1. In a Terminal run:  ```jupyter notebook --generate-config```  
![screenshot]( https://ibin.co/3we29GHWQdre.png){:class="img-responsive"}  


2. This writes a file called __jupyter_notebook_config__ that we need to open with the command  
```sudo nano /Users/username/.jupyter/jupyter_notebook_config.py```

3. And replace the following line:  
```#c.NotebookApp.notebook_dir = '' ```  
by  
```c.NotebookApp.notebook_dir = '/Users/username/the/path/you/want/'```  
![exemaple](https://ibin.co/3we8KfJZa4Xn.png){:class="img-responsive"}  

And now it looks like this:
![empty](https://ibin.co/3we8ZL7Nmvd9.png){:class="img-responsive"}  

Now your safe ! Enjoy

# 7. Quick notes

* If you want to use a Bash command into the notebook use ```!```. So for instance to change directory:
 ```!cd ..``` or  ```!ls```



[Anaconda]: https://www.anaconda.com/download/#macos
[commit]: https://en.wikipedia.org/wiki/Commit_(version_control)
