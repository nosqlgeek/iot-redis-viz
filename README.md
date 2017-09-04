# Redis Labs IOT Demo Vizualization

This demo uses a background job to emit some data by using web sockets. Here some example data:

```
{"macaddr":"a4:0f:24:0e:93:ca","screenname":"francois","values":["669"]}
{"macaddr":"c4:0f:24:0e:93:cz","screenname":"gabe","values":["787"]}
{"macaddr":"c4:0f:24:0e:93:cz","screenname":"gabe","values":["504"]}
{"macaddr":"c4:0f:24:0e:93:cz","screenname":"gabe","values":["541"]}
{"macaddr":"b4:0f:24:0e:93:cb","screenname":"david","values":["50"]}
{"macaddr":"c4:0f:24:0e:93:cz","screenname":"gabe","values":["40"]}
{"macaddr":"b4:0f:24:0e:93:cb","screenname":"david","values":["335"]}
{"macaddr":"b4:0f:24:0e:93:cb","screenname":"david","values":["661"]}
{"macaddr":"a4:0f:24:0e:93:ca","screenname":"francois","values":["865"]}
{"macaddr":"a4:0f:24:0e:93:ca","screenname":"francois","values":["406"]}
```

BTW: Values are strings because they are returned as strings by the service which will be integrated with this vizualization application.

The web application vizualizes the last 100 received values.

![alt tag](https://raw.github.com/nosqlgeek/iot-redis-viz/master/iot-redis-viz/public/images/screenshot.png)


