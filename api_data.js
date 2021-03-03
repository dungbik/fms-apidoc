define({ "api": [
  {
    "type": "get",
    "url": "/v1/chart/:period",
    "title": "과거 데이터 요청",
    "version": "1.0.0",
    "name": "getData",
    "group": "chart",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/v1/chart/0",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "period",
            "description": "<p>요청할 기간[0:한달, 1:1년, 2:2년]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>처리 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>응답 상태 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>데이터 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>데이터의 unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.time",
            "description": "<p>측정된 시간</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.humi",
            "description": "<p>습도</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.temp",
            "description": "<p>온도</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"time\": 1612137600942,\n      \"humi\": 30.1,\n      \"temp\": 15.2\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/chart/controller.js",
    "groupTitle": "chart"
  },
  {
    "type": "get",
    "url": "/v1/log",
    "title": "로그 데이터 요청",
    "version": "1.0.0",
    "name": "getLog",
    "group": "log",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/v1/log",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>처리 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>응답 상태 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>데이터 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>데이터의 unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.type",
            "description": "<p>로그의 유형(0:습도, 1:온도, 2:전원)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.time",
            "description": "<p>측정된 시간</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.value",
            "description": "<p>값 (습도 or 온도 or 전원[0:꺼짐, 1:켜짐])</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"type\": 1,\n      \"time\": 1612137600942,\n      \"value\": 99\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/log/controller.js",
    "groupTitle": "log"
  },
  {
    "type": "get",
    "url": "/v1/power/off",
    "title": "전원 끄기",
    "version": "1.0.0",
    "name": "setPowerOff",
    "group": "power",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/v1/power/off",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>처리 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>응답 상태 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>데이터</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"data\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/power/controller.js",
    "groupTitle": "power"
  },
  {
    "type": "get",
    "url": "/v1/power/on",
    "title": "전원 켜기",
    "version": "1.0.0",
    "name": "setPowerOn",
    "group": "power",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/v1/power/on",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>처리 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>응답 상태 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>데이터</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"data\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/power/controller.js",
    "groupTitle": "power"
  },
  {
    "type": "get",
    "url": "/v1/settings",
    "title": "설정 값 가져오기",
    "version": "1.0.0",
    "name": "getSettings",
    "group": "settings",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/v1/settings",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>처리 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>응답 상태 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>데이터</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>데이터의 unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.max_humi",
            "description": "<p>습도 설정 값</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.max_temp",
            "description": "<p>온도 설정 값</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"data\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/settings/controller.js",
    "groupTitle": "settings"
  },
  {
    "type": "post",
    "url": "/v1/settings",
    "title": "설정 값 바꾸기",
    "version": "1.0.0",
    "name": "updateSettings",
    "group": "settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_humi",
            "description": "<p>습도 설정 값</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_temp",
            "description": "<p>온도 설정 값</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"max_humi\": 60,\n  \"max_temp\": 40\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>처리 성공 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>응답 상태 코드</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>데이터</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"status\": 200,\n  \"data\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/settings/controller.js",
    "groupTitle": "settings"
  }
] });