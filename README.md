1. Установить платформу для разработки серверных приложений на языке Javascript - node.js

    sudo apt-get update
    sudo apt-get install nodejs

2. Установить менеджер пакетов для Node.js - npm

    sudo apt-get install npm

3. Все пакеты, которые устанавливаются при помощи менеджера пакетов npm, лежат в корневой директории в файле package.json

4. Для того, чтобы установить все пакеты, перечисленные в данном файле, необходимо запустить в терминале команду npm install.
 При этом также установиттся менеджер пакетов bower. Создастся папка node_modules, содержащая установленные пакеты.

5. Все пакеты, которые устанавливаются при помощи менеджера пакетов bower, прописаны в файле bower.json, который лежит в корневой директории.

6. Запустить комманду bower install. Создастся папка bower_components, содержащая установленные пакеты.

7. Установить библиотеку undescore коммандой npm install undescore

8. Установить grunt-cli , для выполнения задач grunt

    npm install -g grunt-cli

9. Изменить в файлах моделей resources/assets/js/app/models url для работы с вашим веб-сервисом


К СОЖАЛЕНИЮ, ПРИ ЗАПУСКЕ ПРОЕКТА ВОЗНИКАЕТ ОШИБКА В КОНТРОЛЛЕРЕ, В РЕЗУЛЬТАТЕ ЧЕГО САЙТ НЕ ОТОБРАЖАЕТСЯ,
НЕ СМОТРЯ НА ТО, ЧТО В ТЕРМИНАЛЕ ВСЕ РАБОТАЕТ И ДАЖЕ СЛУШАЕТ ИЗМЕНЕНИЯ В ФАЙЛАХ js и css
