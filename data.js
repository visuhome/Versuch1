var APP_DATA = {
  "scenes": [
    {
      "id": "0-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.1252925747084603,
        "pitch": 0.38317148222550124,
        "fov": 1.4231091447623951
      },
      "linkHotspots": [
        {
          "yaw": 2.4303478266575613,
          "pitch": 0.27122599807584535,
          "rotation": 0,
          "target": "1-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7154551853670403,
        "pitch": 0.33142442036756137,
        "fov": 1.4231091447623951
      },
      "linkHotspots": [
        {
          "yaw": 2.1035819964908935,
          "pitch": 0.7272162960933493,
          "rotation": 0,
          "target": "0-wohnzimmer"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
