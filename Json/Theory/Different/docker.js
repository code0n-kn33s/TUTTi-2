const docker_comands = [
    {
        title: 'Порядок выполнения',
        subtitle: 'Последним зашел - первым вышел',
        img: '',
        code: `
        run docker build -t {build name} .
        * tag docker build with  docker tag {build name} solantequkraine/admin:{version}
        * push container to repo with docker push solantequkraine/admin:{version}

        #### Docker delivery

        On server side

        * pull new image sudo docker pull solantequkraine/admin:{version}
        * check new image sudo docker images copy new image ID (used in commands below as {imageId})
        * check active containers sudo docker ps copy current API container ID (used in commands below as {containerId})
        * you can pass a few variables as ENV variable inside the container to change behaviours of the node server.js

        | Variable | What it responsible for | Required (Default) |
        |---|---|---|
        | API_HOST | Used to specify host to proxy all API requests to | required / no defaults |
        | ADMIN_PORT | Specify port number inside the container what express will listen to | required / no defaults |
        | STATIC_ROUTE_PREFIX | You can change route name for serving static content. This value will be concatenated with trailing / | not required / / |

        * add each variable to sudo docker run command by adding -e {variableName}={variableValue}, for string values  -e {variableName}='{variableValue}'
        * restart api docker stop {containerId} && docker run --restart unless-stopped -d -p 18889:18889 -e API_HOST='{API_HOST}' -e ADMIN_PORT={ADMIN_PORT} -e STATIC_ROUTE_PREFIX='{STATIC_ROUTE_PREFIX}' {imageId}.

        * examples of running commands

        * to run tezpay admin:
        sudo docker ps
        sudo docker stop {containerId}
        sudo docker images
        sudo docker run -d --restart unless-stopped -p 6102:6102 -e API_HOST=http://azericard-backend-mobile.solanteq.com:6100 -e ADMIN_PORT=6102 {imageId}

        #### Docker details

        * to check app logs in docker container use <b>docker logs -f </b>{containerId}
        * remove image from server <b>docker image rm -f</b> {imageId}
        * check docker network status <b>docker inspect bridge</b>

        `
    },



]
