<h1>Step to start project</h1>
<p>To build the Docker image:</p>
<code>docker build . -t [username]/cloudx</code>

<p>Your image will now be listed by Docker:</p>
<code>docker images</code>

<p>Run the image:</p>
<code>docker run -p 49160:8080 -d [username]/cloudx</code>

<h2>Open link on localhost:49610</h2>
