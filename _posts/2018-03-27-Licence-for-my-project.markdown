---
layout: default
title: "Licence for my project"
date: 2018-03-27 03:22:48 +0100
categories: licence
comments: true
thumbnail: /assets/img/thumbnails/1.jpg
---

You have an open-source project, and would like to publish it on github. You read everywhere **MIT licence** on github, but you don't know if it suits your project ? Here is a short summary of what can be done for open source projects

## Note

I didn't know anything about Licences. Everything I learnt is summed up here, in french [Guide for open-sourcing][ouverture]  
So this tutorial is basically a translated summary of this content.

# Licences, but on what

There are licences for Softwares (code) & content (data)

# Licences, but for what

Open-source licences will garantee 4 things:

- freedom of **use**
- freedom of **copy**
- freedom of **study**
- freedom of **modify** and **publish** modified version

# Licences, but what kind

There are two families:

- **copyleft** which force children projects to be published under the same garantee than your project (ex: [GNU GPL][gnu])
- **permissive** which allow children projects to be published under different licence type than your project (ex: [MIT][mit], [Apache][Apache] & [BSD][bsd])

<hr>

# Licences, what do I do

To make it simple, if you contribute to

- a copyleft project -> use the same copyleft licence (or another compatible copyleft)
- a permissive project -> use any copyleft or permissive licence (you choose)

If you create from scratch

- Choose copyleft or permissive (copyleft will ensure children projects stay as open as yours, permissive allows anything)

# Example

I fork a bootstrap theme, which is MIT licenced. That's permissive. So what licence will I choose ?

- Easy way: use MIT as well
- More complex: use a copyleft licence, like GNU GPLv3.  
  However, you have to mention which part of your project is inherited from the MIT one, and which part is the newest part covered by GNU GPLv3.

## Ressource

[General open source guide][ressource1]

[ouverture]: https://github.com/entrepreneur-interet-general/eig-link/blob/master/ouverture.org
[gnu]: https://fr.wikipedia.org/wiki/Licence_publique_g%25C3%25A9n%25C3%25A9rale_GNU
[mit]: https://fr.wikipedia.org/wiki/Licence_MIT
[bsd]: https://fr.wikipedia.org/wiki/Licence_BSD
[Apache]: https://fr.wikipedia.org/wiki/Licence_Apache
[ressource1]: https://opensource.guide/
