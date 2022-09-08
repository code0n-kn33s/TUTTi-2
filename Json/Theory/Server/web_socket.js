const server_web_socket = [{
    title: 'WebSocket',
    subtitle: '',
    img: '',
    link: '',
    text: '',
    code: `
    Протокол WebSocket («веб-сокет»), описанный в спецификации RFC 6455, обеспечивает возможность обмена данными между браузером и сервером через постоянное соединение. Данные передаются по нему в обоих направлениях в виде «пакетов», без разрыва соединения и дополнительных HTTP-запросов.

    WebSocket особенно хорош для сервисов, которые нуждаются в постоянном обмене данными, например онлайн игры, торговые площадки, работающие в реальном времени, чаты и т.д.

    let socket = new WebSocket("ws://javascript.info");

    Как только объект WebSocket создан, мы должны слушать его события. Их всего 4:
      open – соединение установлено,
      message – получены данные,
      error – ошибка,
      close – соединение закрыто.

    …А если мы хотим отправить что-нибудь, то вызов socket.send(data) сделает это.
    `
  }, {
    title: 'soap, wamp',
    subtitle: '',
    img: '',
    link: '',
    text: '',
    code: `
    SOAP или WAMP – протокол обмена сообщениями
    (The WebSocket Application Messaging Protocol")

    Sec-WebSocket-Protocol: soap, wamp означает, что мы будем передавать не только произвольные данные, но и данные в протоколах SOAP или WAMP


    let socket = new WebSocket("wss://javascript.info/chat", ["soap", "wamp"]);

    `,
  }, {
    title: 'Передача данных',
    subtitle: '',
    img: '',
    link: '',
    text: '',
    code: `
    (The WebSocket Application Messaging Protocol"

    SOAP или WAMP (The WebSocket Application Messaging Protocol" – «протокол обмена сообщениями WebSocket приложений»

    let socket = new WebSocket("wss://javascript.info/chat", ["soap", "wamp"]);

    `,
  },
]