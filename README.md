# Noted 
1. Untuk menempatkan File Film di direktori `videos/sample.mkv` sesuai isi file index.html

                <h2 id="movie-title">Catfish Killer 2022 </h2>
                <video id="video" width="600" height="400" controls>
                    <source src="videos/Catfish-Killer-2022-1674300108.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="controls">
                    <button id="play-pause">Play</button>
                    <input type="range" id="seek-bar" value="0">
                    <button id="mute">Mute</button>
                    <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1">
                    <button id="full-screen">Full-Screen</button>
                </div>
            </div>
2. Untuk menempatkan banner film di direktori `images/maxresdefault.jpg` sesuai isi file index.html

 
              `<body>
                  <div class="container">
                   <header>
                  <img src="images/650de7f6ae66b.jpg" alt="Movie Banner" class="banner">
              </header>
            <main>`

3. Edit syntax `<h2 id="movie-title">Catfish Killer 2022 </h2>` di index.html untuk memasukkan judul film, serta di script.js
<pre>
<code id="code-block">
 // Set movie title and description
    movieTitle.textContent = 'Catfish Killer 2022'; 
    movieDescription.textContent = 'Hannah is thrilled with how her senior year in high school is going. Her best friends always by her side, her mom is so very supportive, and she just got a coveted scholarship to Stanford University. However, Hannah joins an online chatroom where she meets a guy she falls for quickly, and things quickly go from very good to awful,  Negara & Tanggal Rilis: 1 Juli 2022, Klasifikasi: PG 13+ Bahasa: ENG + Closed Caption Indonesian ,  Warna: Berwarna,  Status: Selesai / Rilis';
</code>
</pre>

4. Tambahkan infromasi film di script.js
<pre>
<code id="code-block">
 // Set movie title and description
    movieTitle.textContent = 'Catfish Killer 2022'; 
    movieDescription.textContent = 'DESKRIPSI SINOPSIS SINGKAT Negara & Tanggal Rilis:-, Klasifikasi: - Bahasa: - ,  Warna: Berwarna,  Status: Selesai / Rilis';
</code>
</pre>

5. Untuk menempatkan index rating film dari rottentomatoes maupun IMDb, edit di index.html

           `<h3>Informasi Film | Rate: --request-headers "{ \"APIKEY IMDB\": \"your-apiROTTENTOMATOES-key-here\"}" \
                --region us-east-1 \
                  --body "{\"query\": \
                     \"{ \
                        title(id: \\\"tt0133093\\\") { \
                          titleText { \
                             text \ <h3>
                         <p id="movie-description">Deskripsi film Anda akan tampil di sini. Berikan informasi menarik tentang film tersebut.</p>`

