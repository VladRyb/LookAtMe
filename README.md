# [LookOnMe](https://lookatme-31fb3.web.app/)

Приложение для удобного хранения фотографий вашией одежды в виде виртуального шкафа. 

Фотографии загружаются в одну из 4 "полок" виртуального шкафа, фильтруются по сезонам и категориям.

Из имеющихся фотографий можно составить "лук" и сделать его публичным для дальшейшей оценки всеми пользователями приложения.

Оценка лука происходит на главной странице в разделе "Битва луков". 

Результаты битвы отображаются ниже в карусели фотографий.
Деплой: https://lookatme-31fb3.web.app/

## Getting Started
```
npm i
npm start
```

## MVP Functionality
- Регистрация через google, facebook, github, email
- Мгновенное фото или загрузка имеющегося изображения, сохранение в базе данных
- Фильтрация одежды по сезонам и категориям
- Создание сочетаний одежды и отображение сочетания на главной странице в карусели и в битве луков
- Реализация оценки сочетания (лайк или дизлайк) 

## Authors
- [Владислав Рыбаков](https://github.com/VladRyb)

- [Егор Желтухин](https://github.com/EgorZ7901)

- [Сергей Сутковецкий ](https://github.com/SutkoVetskii)

- [Олеся Ананьева](https://github.com/OlesyaAnaneva)

## Главная страница:
На главной странице представлен ограниченный функционал приложения, поскольку возможность заполнения гардероба предоставляется только зарегистрированным пользователям. Также отображается раздел "Битва луков", которая работает по принципу тиндера. В данный раздел попадают все публичные луки.
![Главная страница](https://github.com/VladRyb/LookAtMe/blob/master/public/lookOnMe1.png)

## Карусель самых популярных луков:
В данном разделе, который также отображается на главной странице, представлена карусель фотографий, которые уже были оценены в "битве луков" и каждая фотография сопровождается отоброжением количества лайков и дизлайков.
![Карусель](https://github.com/VladRyb/LookAtMe/blob/master/public/lookOnMe2.png)

## Регистрация
При нажатии на кнопку "ВГардероб" всплывает модальное окно с отображением различных способов регистрации.
![Регистрация](https://github.com/VladRyb/LookAtMe/blob/master/public/lookOnMe3.png)

## Гардероб
После рагистрации открывается новый раздел, в котором представлены 4 подраздела. В каждый подраздел можно добавлять загружать изображение или сохранять сделанную фотографию.
![Гардероб](https://github.com/VladRyb/LookAtMe/blob/master/public/lookOnMe4.1.png)

## Модальное окно для добавления вещи в гардероб
В данном окне можно загрузить имеющееся изображение вещи или сделать с помощью камеры фото и загрузить его. Также есть возможность указать сезон, категорию и состояние вещи для дальнейшей фильтраиции. 
![Модальное окно](https://github.com/VladRyb/LookAtMe/blob/master/public/lookOnMe5.png)

## Сохранение лука
Выбрав 1 вещь из каждого раздела гардероба можно сохранить данное сочетание с помощью нажатия на кнопку "сохранить лук"
![Сохранение лука](https://github.com/VladRyb/LookAtMe/blob/master/public/lookOnMe6.2.png)
