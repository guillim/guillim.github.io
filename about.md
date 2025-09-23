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
              {% if project.stars or project.rating %}
              <div style="margin-top:8px; display: flex; align-items: center; gap: 4px;">
                {% if project.rating %}
                  <span style="font-size: 12px; color: #666; font-weight: 500;">{{project.rating}}</span>
                {% elsif project.stars %}
                  <div style="display: flex; align-items: center;">
                    {% assign full_stars = project.stars | floor %}
                    {% assign has_half_star = project.stars | modulo: 1 | round: 1 %}
                    {% for i in (1..5) %}
                      {% if i <= full_stars %}
                        <span style="color: #ffc107; font-size: 14px;">★</span>
                      {% elsif i == full_stars | plus: 1 and has_half_star > 0 %}
                        <span style="color: #ffc107; font-size: 14px;">☆</span>
                      {% else %}
                        <span style="color: #e0e0e0; font-size: 14px;">☆</span>
                      {% endif %}
                    {% endfor %}
                  </div>
                  <span style="font-size: 12px; color: #666; margin-left: 4px;">{{project.stars}}</span>
                {% endif %}
              </div>
              {% endif %}
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
              {% if project.stars or project.rating %}
              <div style="margin-top:8px; display: flex; align-items: center; gap: 4px;">
                {% if project.rating %}
                  <span style="font-size: 12px; color: #666; font-weight: 500;">{{project.rating}}</span>
                {% elsif project.stars %}
                  <div style="display: flex; align-items: center;">
                    {% assign full_stars = project.stars | floor %}
                    {% assign has_half_star = project.stars | modulo: 1 | round: 1 %}
                    {% for i in (1..5) %}
                      {% if i <= full_stars %}
                        <span style="color: #ffc107; font-size: 14px;">★</span>
                      {% elsif i == full_stars | plus: 1 and has_half_star > 0 %}
                        <span style="color: #ffc107; font-size: 14px;">☆</span>
                      {% else %}
                        <span style="color: #e0e0e0; font-size: 14px;">☆</span>
                      {% endif %}
                    {% endfor %}
                  </div>
                  <span style="font-size: 12px; color: #666; margin-left: 4px;">{{project.stars}}</span>
                {% endif %}
              </div>
              {% endif %}
            </div>
          </div>
        </a>
      </div>
    </div>
    {% endif %}
    {% endfor %}
  </div>
</div>

<div style="padding-left: 30px; padding-right: 30px; padding-top: 40px; max-width: 1280px; margin: auto; margin-top: 60px; border-top: solid 1px #eff0f1;">
  <div style="text-align: center;">
    <h2 style="color: #333; margin-bottom: 20px; font-size: 28px;">Let's work together</h2>
    <p style="font-size: 16px; color: #666; margin-bottom: 30px; max-width: 700px; margin-left: auto; margin-right: auto;">
      I'm always interested in new opportunities. Want to chat about building something, I'd love to hear from you. Also, you can support my open source projects by buying me a coffee.
    </p>
    
    <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 15px; margin-bottom: 30px;">
      <a href="https://www.linkedin.com/in/guillaumelancrenon/" class="btn" style="background-color: #0077b5; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500;">
        💼 LinkedIn
      </a>
      <a href="https://buymeacoffee.com/guillim" class="btn" style="background-color: #ffdd00; color: #000; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500;">
        ☕ Buy me a coffee
      </a>
    </div>
  </div>
</div>
