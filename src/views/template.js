export const renderHtml = (reactHtml, initialData) => `
<!DOCTYPE html>
    <html>
        <head>
        </head>
        <body>
            <div id='root'>${reactHtml}</div>
            <script>
                window.__INITIAL_DATA__ = ${JSON.stringify(initialData)}
            </script>
            <script src="/client.js"></script>    
        </body>
    </html>
`;
