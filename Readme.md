## BY USING THIS CONTENT YOU AGREE TO THE FOLLOWING CONTRIBUTION AGREEMENT

https://live.warthunder.com/contribution_agreement/?lang=en

This repository contains the Fmod Studio project for War Thunder. This project allows you to create sound modifications. The project doesn’t include crew chat, other monologues, and music. To save space, assets are compressed into vorbis format in the .ogg container (extensions renamed to .wav to preserve the integrity of the original sound event). To keep the project work in the game you shouldn't change sound events names, and the structure of their location in the project.  Also, do not change the structure of the mixer buses.

Actual Fmod Studio version - 2.00.09

Important notice:
In this repository we added compressed assets (with losses, ogg, vorbis) in order to decrease the size of repository (originally over 20 Gb). This project is intended to use with not compressed assets (wav, 44100 Hz, 16bit for example), because it has global compression settings (vorbis, 37% quality). If compressed again, already compressed assets will loose sound quality a lot, and may sound with audible metallic overtone.

## ИСПОЛЬЗУЯ ДАННЫЕ МАТЕРИАЛЫ, ВЫ СОГЛАШАЕТЕСЬ СО СЛЕДУЮЩИМ СОГЛАШЕНИЕМ О ПРЕДОСТАВЛЕНИИ КОНТЕНТА

https://live.warthunder.com/contribution_agreement/?lang=ru

Данный репозиторий содержит проект Fmod Studio для игры War Thunder. На его основе можно создавать звуковые модификации. В проект не включены реплики экипажей, прочие монологи, музыка. Ассеты, в целях экономии места, сжаты в формат vorbis в контейнере ogg (расширения переименованы в wav для сохранения целостности исходного звукового ивента). Для работоспособности проекта в игре не надо менять имена звуковых ивентов, и структуру их расположения в проекте. Так же не надо менять структуру шин микшера.

Актуальная версия Fmod Studio - 2.00.09

Важно:
В репозиторий добавлены ассеты, сжатые с потерями (ogg, vorbis).  Это сделано для того, чтобы уменьшить объем ассетов, в не сжатом виде он превышает 20 Гб. То есть проект предназначен для работы с не сжатыми ассетами (wav, например 44100 Гц, 16 бит), поскольку в нем выставлены глобальные настройки сжатия (vorbis, качество 37%). Повторно сжатые ассеты сильно теряют в качестве, и могут звучать с заметным металлическим призвуком.

Patch notes:
-------------------------------------------------------------------------------------------------------------------------------
25.12.2020 - Fmod Studio project version changed to 2.1.6.
-------------------------------------------------------------------------------------------------------------------------------
High fire rate weapon sound events forming method changed from loop to one shot.
Note: now you can choose automatic weapon sound events forming method (loop/oneshot) by adding in config.blk in sound{} block this string: useLoopsForGunSound:b=yes
27.11.2020 - Fmod Studio project updated to "New Power" release state.
-------------------------------------------------------------------------------------------------------------------------------
16.07.2020 - Fmod Studio version updated. Now it is 2.00.09.

New dialog localisations (assets) will be added gradually with next commits.
-------------------------------------------------------------------------------------------------------------------------------
09.04.2020 - Added fmod project version related to major patch 1.97.1.X

Fmod Studio version - 1.10.17

 - Weapon system reworked, added "on_shot" parameter that triggers shot event. That was done for better sound channels control.
 - Explosions and cannons gain a modular assembly system.
 - Added crew dialogs, all languages for ground and naval crew, aircraft crew - only english and russian (for now).
 - Added empty music events

Notes:
music events in aircraft/music/init should be empty, do not add any music in these events.
-------------------------------------------------------------------------------------------------------------------------------