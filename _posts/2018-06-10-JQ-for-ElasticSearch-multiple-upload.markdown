---
layout: default
title:  "JQ for ElasticSearch multiple upload"
date:   2018-06-10 03:22:48 +0100
categories: terminal
---

You want to upload many documents in your **ElasticSearch** database, using **_bulk**, but you need to format your input to the accepted format ? Here is what you can do  
Tested Configuration:  
`MacOS:  Sierra 10.12`  
`Terminal: iTerm2 & ElasticSearch 6.2.4 & jq 1.5`

# 1.  What is the matter ?

You have a JSON object like this:

``` json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "code": "91016"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              1.95923,
              48.30858
            ],
            [
              1.96002,
              48.30808
            ],
            [
              1.95923,
              48.30858
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "code": "91021"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              2.23497,
              48.58895
            ],
            [
              2.23514,
              48.589
            ],
            [
              2.23497,
              48.58895
            ]
          ]
        ]
      }
    }
  ]
}
```

And you want to upload every **"features"** in your ElasticSearch database. However, the recommended format for bulk insert is like this:  
``` es
POST _bulk
{ "index" : { "_index" : "featureindex", "_type" : "_doc"} }
{"type":"Feature","properties":{"code":"91016"},"geometry":{"type":"Polygon","coordinates":[[[1.95923,48.30858],[1.96002,48.30808],[1.95923,48.30858]]]}}
{ "index" : { "_index" : "featureindex", "_type" : "_doc"} }
{"type":"Feature","properties":{"code":"91021"},"geometry":{"type":"Polygon","coordinates":[[[2.23497,48.58895],[2.23514,48.589],[2.23497,48.58895]]]}}
```

Imagine you have 100.000 records to insert, then you need a script to format this for you ! That's when **jq** comes  


# 2. Solved in less than a minute:

Type:  
``` bash
brew install jq
```  
Then go to your directory where the JSON is stored  
``` bash
cd ~/Downloads #in this example, the JSON is called "communes.json" and stored in the Downloads folder
```  
And Run this command:  
``` bash
jq -c '.features[] | { index: { _index: "featureindex", _type: "_doc" } }, .' communes.json > communes2.json
```


Done.  
The communes.json was transformed into communes2.json (stored in the same location), which can be sent to ElasticSearch


# 3.  Notes

We can notice that we have some geojson here. We could create a mapping for a geojson Feature to map with:  
 1. the geometry field as a geo_shape type  
 2. the type as a keyword type  
 3. the properties as an object type  


# 4.  Ressources

Official jq website: [jq][jq]  
Testing jq online: [onlineTestjq][onlineTestjq]  
ElasticSearch [geoshape][geoshape]  
ElasticSearch [bulk][bulk]  
Blog: [programminghistorian][jsonandjq]  
Blog: [shapeshed][transformjs]  
Other examples of json to be fromated: [geoapi][geoapi]

[jq]: https://stedolan.github.io/jq/
[onlineTestjq]:https://jqplay.org/#
[geoshape]: https://www.elastic.co/guide/en/elasticsearch/reference/current/geo-shape.html
[bulk]: https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html
[jsonandjq]: https://programminghistorian.org/en/lessons/json-and-jq
[transformjs]: https://shapeshed.com/jq-json/#how-to-transform-json
[geoapi]: https://api.gouv.fr/api/api-geo.html
