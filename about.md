---
layout: about
permalink: /about
---

<div style="padding-left: 30px; padding-right: 30px; max-width: 1280px; margin: auto">
  <div style="display: flex; flex-wrap: wrap;">
  {% for project in site.data.projects %}
  {% if project.active == true %}
    <div style="flex: 0 0 auto;" class="responsive">
      <div style="margin:10px">
        <a href="{{ site.baseurl }}{{project.url}}" style="color: inherit;text-decoration: inherit;" target="_blank">
          <div style="padding:24px; border-radius:1rem; background-color: #ecf9ff;" class="zoom">
            <div class="card-meta">
              <div class="card-authors">
                <div style="display:flex; align-items:center">
                  <div style="margin-right:10px;">
                    <img src="{{project.picture}}" alt=""
                    width='26px' heigh='26px' style='border-radius:50%; display:flex;'>
                  </div>
                  <div style="flex-direction:column">
                    <h3 style="margin:0px; font-weight:600;">
                      {{project.title}}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-title" style="margin-top:10px">
              <div style="font-size:14px; font-weight: 500; line-height:1">{{project.description}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    {% endif %}
    {% endfor %}
  </div>
</div>

<div style="padding-left: 30px; padding-right: 30px; padding-top: 10px; max-width: 1280px; margin: auto; margin-top: 100px;    border-top: solid 1px #eff0f1;
">
🪦 Graveyard - Projects that no longer exist
  <div style="display: flex; flex-wrap: wrap; margin-top:15px;">
  {% for project in site.data.projects %}
    {% if project.active == false %}
    <div style="flex: 0 0 auto;" class="responsive">
      <div style="margin:10px">
        <a href="{{ site.baseurl }}{{project.url}}" style="color: inherit;text-decoration: inherit;" target="_blank">
          <div style="padding:24px; border-radius:1rem; background-color: #ecf9ff;" class="zoom">
            <div class="card-meta">
              <div class="card-authors">
                <div style="display:flex; align-items:center">
                  <div style="margin-right:10px;">
                    <img src="{{project.picture}}" alt=""
                    width='26px' heigh='26px' style='border-radius:50%; display:flex;'>
                  </div>
                  <div style="flex-direction:column">
                    <h3 style="margin:0px; font-weight:600;">
                      {{project.title}}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-title" style="margin-top:10px">
              <div style="font-size:14px; font-weight: 500; line-height:1">{{project.description}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    {% endif %}
    {% endfor %}
  </div>
</div>
