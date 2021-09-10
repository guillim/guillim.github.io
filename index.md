---
layout: default
---



{% for post in site.posts %}
# [](#header-1)[{{ post.title }}][{{ site.baseurl }}{{ post.url }}]
**{{ post.date | date_to_string }}**  {% for category in post.categories  %}  <span class="tag"> {{ category }} </span> {% endfor %}

[{{ site.baseurl }}{{ post.url }}]: {{ site.baseurl }}{{ post.url }}

{% endfor %}
