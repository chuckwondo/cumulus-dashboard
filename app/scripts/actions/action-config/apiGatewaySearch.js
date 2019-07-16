'use strict';

export const apiGatewaySearchString = `{
  "aggs": {
    "2": {
      "filters": {
        "filters": {
          "ApiExecutionErrors": {
            "query_string": {
              "query": "+\\"Method completed with status:\\" -\\"Method completed with status: 307\\"",
              "analyze_wildcard": true,
              "default_field": "*"
            }
          },
          "ApiExecutionSuccesses": {
            "query_string": {
              "query": "+\\"Method completed with status: 307\\"",
              "analyze_wildcard": true,
              "default_field": "*"
            }
          },
          "ApiAccessErrors": {
            "query_string": {
              "query": "-(\\"status \\\\: 307\\" \\"status \\\\: 200\\") +protocol",
              "analyze_wildcard": true,
              "default_field": "*"
            }
          },
          "ApiAccessSuccesses": {
            "query_string": {
              "query": "+(\\"status \\\\: 307\\" \\"status \\\\: 200\\") +protocol",
              "analyze_wildcard": true,
              "default_field": "*"
            }
          }
        }
      }
    }
  },
  "size": 0,
  "_source": {
    "excludes": []
  },
  "stored_fields": [
    "*"
  ],
  "script_fields": {},
  "docvalue_fields": [
    {
      "field": "@timestamp",
      "format": "date_time"
    }
  ],
  "query": {
    "bool": {
      "must": [
        {
          "match_all": {}
        },
        {
          "range": {
            "@timestamp": {
              "gte": 1547224803266,
              "lte": 1562859603266,
              "format": "epoch_millis"
            }
          }
        },
        {
          "match_phrase": {
            "_index": {
              "query": "mhs4-cloudwatch*"
            }
          }
        },
        {
          "match_phrase": {
            "logGroup": {
              "query": "\\"API\\\\-Gateway\\\\-Execution*\\""
            }
          }
        }
      ],
      "filter": [],
      "should": [],
      "must_not": []
    }
  }
}`;