---
layout: default
---

<div style="padding-left: 30px; padding-right: 30px; max-width: 1280px; margin: auto">
  <div style="display: flex; flex-wrap: wrap;">
  {% for post in site.posts %}
    <div style="flex: 0 0 auto;" class="responsive">
      <div style="margin:10px">
        <div>
          <a href="{{ site.baseurl }}{{post.url}}"><img alt="alt for {{post.title}}"
              src="{{post.thumbnail}}" 
              style="aspect-ratio: 16 / 9; width: 100%; object-fit: cover; border-radius:0.45rem">
          </a>
        </div>
        <div style="padding:15px">
          <div class="card-meta">
            <div class="card-authors">
              <div style="display:flex; align-items:center">
                <div style="margin-right:10px;">
                  <img src="/assets/img/guillaume-lancrenon-small.jpg" alt="Guillaume Lancrenon"
                  width='26px' heigh='26px' style='border-radius:50%; display:flex;'>
                </div>
                <div style="flex-direction:column">
                  <div style="font-size:12px; font-weight: 500; line-height:1">Guillaume</div>
                  <div style="font-size:12px; font-weight: 300; line-height:1">{{post.date | date_to_string}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-title">
            <h3>
              <a href="{{ site.baseurl }}{{post.url}}">{{post.title}}</a>
            </h3>
          </div>
          <div style="line-height:0">
          {% for category in post.categories  %} 
            <span class="tag"> #{{ category }} </span> 
          {% endfor %}
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
