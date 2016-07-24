1. Добавление новой книги в библиотеку

url: http://bsa_laravel_rest.local/books
  	body:
		{
   			 "author": "Gard",
   			 "title": "Bible3",
  			  "year": "1200",
    			"genre": "life"
 		 }
method: POST

2. Списание книги из библиотеки

url: http://bsa_laravel_rest.local/books/{id}
body:
method: DELETE

3. Предоставление детальной инорфмации о книге

url: http://bsa_laravel_rest.local/books/{id}
body:
method: GET

4. Предоставление списка книг, имеющихся в библиотеке

url: http://bsa_laravel_rest.local/books
body:
method: GET

5. Предоставление списка книг, которые взял определенный пользователь

url: http://bsa_laravel_rest.local/users/{user_id}/books
body:
method: GET

6. Возвращать книгу от определенного пользователя в билиотеку (в моей реализации 1 книга может принадлежать только одному пользователю. Поэтому в базе данных имеет место отношение один ко многим. При возврате определенной книги, в отношении books поле user_id обнуляется. Тоесть происходит update отношения books. Поэтому, чтобы вернуть какую то книгу, достаточно передать только идентификатор возвращаемой книги.)

url: http://bsa_laravel_rest.local/books/{id}
body:
method: PUT

7. Присваивать книгу определенному пользователю

url: http://bsa_laravel_rest.local/users/{user_id}/books/{book_id}
body:
method: PUT

8. Возвращать данные профиля об определенном пользователе

url: http://bsa_laravel_rest.local/users/{id_user}
body:
method: GET
