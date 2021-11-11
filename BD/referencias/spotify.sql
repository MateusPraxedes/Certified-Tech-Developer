CREATE TABLE artista (
  id_artista INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  nome VARCHAR(45),
  sobrenome VARCHAR(100)
  
  ) ;
  
  CREATE TABLE genero(
  id_genero INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  genero VARCHAR(45)
  );
  
  CREATE TABLE playlist( 
  id_playlist INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(45),
  qtdcancoes INT,
  datacriacao DATETIME,
  usuario_id INT, #atributo da fk
  CONSTRAINT fk_playlist_usuario #nome
  FOREIGN KEY (usuario_id) #atributo que vai receber
  REFERENCES usuario (id_usuario) #referencia de onde esta vindo
  );
  
  CREATE TABLE album(
   id_album INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   titulo VARCHAR(45),
   artista_id INT,
   CONSTRAINT fk_album_artista
   FOREIGN KEY (artista_id)
   REFERENCES artista (id_artista)
   );
  
  CREATE TABLE cancoes(
  id_cancao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(45),
  duracao DOUBLE,
  qtdreproducao INT,
  qtdlikes INT,
  album_id INT,
  CONSTRAINT fk_cancoes_album
  FOREIGN KEY (album_id)
  REFERENCES album (id_album)
  );
 
  
  CREATE TABLE genero_cancao(
  id_generocancao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cancao_id INT,
  genero_id INT,
  CONSTRAINT fk_generocancao_cancoes
  FOREIGN KEY (cancao_id)
  REFERENCES cancoes (id_cancao),
  CONSTRAINT fk_generocancao_genero
  FOREIGN KEY (genero_id)
  REFERENCES genero (id_genero)
  );
  
  CREATE TABLE playlist_cancao(
  id_playlist_cancao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cancao_id INT,
  playlist_id INT,
  CONSTRAINT fk_playlistcancao_cancoes
  FOREIGN KEY (cancao_id)
  REFERENCES cancoes (id_cancao),
  CONSTRAINT fk_playlistcancao_playlist
  FOREIGN KEY (playlist_id)
  REFERENCES playlist (id_playlist)
  );
  