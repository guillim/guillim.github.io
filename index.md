---
layout: default
---



{% for post in site.posts %}
# [](#header-1)[{{ post.title }}][{{ site.baseurl }}{{ post.url }}]
**{{ post.date | date_to_string }}**    #[](#header-1){{ post.categories }}

[{{ site.baseurl }}{{ post.url }}]: {{ site.baseurl }}{{ post.url }}

{% endfor %}
