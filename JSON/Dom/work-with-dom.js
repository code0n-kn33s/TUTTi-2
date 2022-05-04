

const workWithDom = {
    key: 'title',
    object: 'title',
    subject: '',
    themes: [
        {
            type: 'text' || 'code',
            title: '',
            subtitle: '',
            text: '',
            code: '',
        },
        {
            type: 'text' || 'code',
            title: '',
            subtitle: '',
            text: '',
            code: `
                // paths from index.html
                const connectFiles = [ './script1.js', './script2.js', ]
                // ------------> загрузить скрипт в dom
                function loadScript(src) {
                let script = document.createElement('script');
                script.src = src;
                document.head.append(script);
                }

                for (let i = 0; i < connectFiles.length; i++) {
                loadScript(connectFiles[i])
                }
            `,
        },
    ]
}