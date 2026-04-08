// apps.js
const appsData = [
    {
        id: "fff",
        name: "Рыбалка для Друзей",
        category: "Игры",
        developer: "evados",
        rating: 4.4,
        description: "Рыбалка для Друзей - мобильный рыболовный симулятор! Можно играть как оффлайн, так и онлайн.",
        minAndroid: "2.3.3",
        version: "1.22",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/fff.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/fff.apk",
        screenshots: [
            "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/screenshots/fff1.jpg", 
            "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/screenshots/fff2.jpg"
        ]
    },
    {
        id: "kutegram",
        name: "Kutegram",
        category: "Приложения",
        developer: "CRX",
        rating: 4.1,
        description: "Kutegram это неофициальный кроссплатформенный клиент на основе Qt для Telegram.",
        minAndroid: "2.3.0",
        version: "1.0.0",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/kutegram.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/kutegram.apk",
        screenshots: [
            "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/screenshots/kutegram1.jpg", 
            "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/screenshots/kutegram2.jpg", 
            "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/screenshots/kutegram3.jpg"
        ]
    },
    {
        id: "youtube",
        name: "YouTube",
        category: "Приложения",
        developer: "FlashBack",
        rating: 4.8,
        description: "Погрузитесь в мир бесконечного контента с YouTube.",
        minAndroid: "2.2.0",
        version: "2.4.4",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/youtube.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/youtube.apk",
        screenshots: [
            "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/screenshots/youtube1.jpg", 
            "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/screenshots/youtube2.jpg"
        ]
    },
    {
        id: "minecraft",
        name: "Minecraft: Pocket Edition",
        category: "Игры",
        developer: "Mojang AB",
        rating: 4.3,
        description: "Minecraft — это строительная игра жанра песочница.",
        minAndroid: "2.3.0",
        version: "0.8.1",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/minecraft.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/minecraft.apk",
        screenshots: [
            "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/screenshots/minecraft1.jpg", 
            "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/screenshots/minecraft2.jpg"
        ]
    },
    {
        id: "geometrydash",
        name: "Geometry Dash",
        category: "Игры",
        developer: "RobTop",
        rating: 4.4,
        description: "Практически непроходимые испытания и безумная музыка.",
        minAndroid: "2.2.0",
        version: "1.0",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/geometrydash.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/geometrydash.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/3316530/screen568x568+%283%29.jpeg.jpg",
			"https://4pda.to/forum/dl/post/3316528/screen568x568+%281%29.jpeg.jpg",
			"https://4pda.to/forum/dl/post/3316531/screen568x568.jpeg.jpg",
			"https://4pda.to/forum/dl/post/3316529/screen568x568+%282%29.jpeg.jpg"
		]
    },
    {
        id: "angrybirds",
        name: "Angry Birds",
        category: "Игры",
        developer: "Rovio",
        rating: 4.0,
        description: "Стреляйте птицами по укреплениям свиней.",
        minAndroid: "1.6.0",
        version: "1.6.0",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/angrybirds.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/angrybirds.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/2197472/2.png",
			"https://4pda.to/forum/dl/post/2197473/3.png",
			"https://4pda.to/forum/dl/post/2197474/4.png"
		]
    },
    {
        id: "subwaysurf",
        name: "Subway Surfers",
        category: "Игры",
        developer: "Kiloo",
        rating: 4.6,
        description: "Уворачивайтесь от поездов и собирайте монеты.",
        minAndroid: "2.3.3",
        version: "1.24.0",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/subwaysurf.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/subwaysurf.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/10022522/01.jpg",
			"https://4pda.to/forum/dl/post/10022525/02.jpg"
		]
    },
    {
        id: "pvsz",
        name: "Plants vs Zombies",
        category: "Игры",
        developer: "PopCap",
        rating: 4.9,
        description: "Защитите свой дом от орд зомби.",
        minAndroid: "1.5.0",
        version: "1.2",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/pvsz.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/pvsz.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/1011048/1.png",
			"https://4pda.to/forum/dl/post/1011051/4.png"
		]
    },
    {
        id: "doodlejump",
        name: "Doodle Jump",
        category: "Игры",
        developer: "Lima",
        rating: 4.0,
        description: "Прыгай выше и выше!",
        minAndroid: "2.3.3",
        version: "1.3",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/doodlejump.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/doodlejump.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/684450/1.png",
			"https://4pda.to/forum/dl/post/684454/3.png"
		]
    },
    {
        id: "fruitninja",
        name: "Fruit Ninja",
        category: "Игры",
        developer: "HalfBrick",
        rating: 4.9,
        description: "Режь фрукты и ставь рекорды.",
        minAndroid: "2.3.3",
        version: "1.9.5",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/fruitninja.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/fruitninja.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/5172496/1.jpg",
			"https://4pda.to/forum/dl/post/5172497/2.jpg",
			"https://4pda.to/forum/dl/post/5172501/4.jpg"
		]
    },
    {
        id: "cuttherope",
        name: "Cut The Rope",
        category: "Игры",
        developer: "ZeptoLab",
        rating: 4.7,
        description: "Накорми Ам Няма конфетами!",
        minAndroid: "1.6.0",
        version: "1.0.0",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/cuttherope.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/cutetherope.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/1039937/2.jpg",
			"https://4pda.to/forum/dl/post/1039938/3.jpg"
		]
    },
    {
        id: "flappybird",
        name: "Flappy Bird",
        category: "Игры",
        developer: "DotGears",
        rating: 5.0,
        description: "Расправь крылья и лети.",
        minAndroid: "2.2.0",
        version: "1.2",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/flappybird.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/flappybird.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/4099865/1.jpeg.jpg"
		]
    },
    {
        id: "flashlight",
        name: "Tiny Flashlight",
        category: "Приложения",
        developer: "Devuni",
        rating: 5.0,
        description: "Простой и яркий фонарик.",
        minAndroid: "4.1.0",
        version: "5.4.1",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/flashlight.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/flashlight.apk",
        screenshots: [
			"https://4pda.to/s/qirti10TwY4iSplkR6spgMTF2iyipK.jpg"
		]
    },
    {
        id: "chrome",
        name: "Google Chrome",
        category: "Приложения",
        developer: "Google LLC",
        rating: 4.6,
        description: "Браузер от Google на основе Chromium.",
        minAndroid: "4.0.1",
        version: "42.0",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/chrome.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/chrome.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/19425466/Screenshot_20200410-213312.png",
			"https://4pda.to/forum/dl/post/19395288/Screenshot_20200410-213343.png"
		]
    },
    {
        id: "antutu",
        name: "AnTuTu Benchmark",
        category: "Приложения",
        developer: "AnTuTu",
        rating: 4.8,
        description: "Benchmark для тестирования устройства.",
        minAndroid: "2.3.0",
        version: "4.0",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/antutu.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/antutu.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/3433743/1.png",
			"https://4pda.to/forum/dl/post/3433745/3.png",
			"https://4pda.to/forum/dl/post/3433746/4.png"
		]
    },
    {
        id: "esfile",
        name: "ES Проводник",
        category: "Приложения",
        developer: "ES Global",
        rating: 4.4,
        description: "Мощный файловый менеджер.",
        minAndroid: "2.2.0",
        version: "4.0.26",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/esfile.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/esfile.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/31232545/Screenshot_2024-08-01-13-43-07-570_com.estrongs.android.pop.jpg",
			"https://4pda.to/forum/dl/post/31232546/Screenshot_2024-08-01-13-43-12-542_com.estrongs.android.pop.jpg"
		]
    },
    {
        id: "j2meloader",
        name: "J2ME Loader",
        category: "Приложения",
        developer: "Play Software",
        rating: 4.7,
        description: "Запуск Java-игр на Android.",
        minAndroid: "2.3.0",
        version: "1.4.2",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/j2meloader.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/j2meloader.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/12652231/Screenshot_J2ME+Loader_20180415-205427.png",
			"https://4pda.to/s/as6yyWkLhz0tBOJ4Rq2HrO26GCJXWxWORQsFMg1hm4Zj.png", 
			"https://4pda.to/forum/dl/post/12109698/screen4.jpg"
		]
    },
    {
        id: "ibispaintx",
        name: "ibisPaint X",
        category: "Приложения",
        developer: "ibis inc.",
        rating: 4.6,
        description: "Приложение для рисования.",
        minAndroid: "4.0.1",
        version: "3.2.1",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/ibispaintx.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/ibispaintx.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/9868491/Screenshot_2017-03-12-12-43-12.png",
			"https://4pda.to/forum/dl/post/9868492/Screenshot_2017-03-12-12-46-14.png"
		]
    },
    {
        id: "mobizen",
        name: "Mobizen",
        category: "Приложения",
        developer: "RSUPPORT",
        rating: 4.2,
        description: "Запись экрана.",
        minAndroid: "4.4.0",
        version: "3.10.7.4",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/mobizen.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/mobizen.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/5161660/%C1%E5%E7%FB%EC%FF%ED%ED%FB%E95.jpg",
			"https://4pda.to/forum/dl/post/5161666/%C1%E5%E7%FB%EC%FF%ED%ED%FB%E910.png"
		]
    },
    {
        id: "semkoed",
        name: "Семкоед",
        category: "Игры",
        developer: "Killa",
        rating: 4.0,
        description: "Фартовый нежданчик для басоты: теперь семкоед и на андроиде! Самый пацанский способ прожигать время в лоховозах, на метре и других тягомотинах. Суетите пацанчика, двигая по экрану пальцем и ловите семки ртом «на Пятаке», «Раёне», «в Инстике», «в Опорке», «Питейке» и в многих других козырных местах.",
        minAndroid: "3.2.0",
        version: "1.9.5",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/semkoed.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/semkoed.apk",
        screenshots: [
			"https://image.winudf.com/v2/image/Y29tLmtpbGxhLmRlYWxlcnNfc2NyZWVuc2hvdHNfNl9jMmFkMjg5OQ/screen-6.jpg?fakeurl=1&type=.jpg",
			"https://image.winudf.com/v2/image/Y29tLmtpbGxhLmRlYWxlcnNfc2NyZWVuc2hvdHNfM19lM2IyNzYzNQ/screen-3.jpg?fakeurl=1&type=.jpg",
			"https://image.winudf.com/v2/image/Y29tLmtpbGxhLmRlYWxlcnNfc2NyZWVuc2hvdHNfN181MWY0Yzhk/screen-7.jpg?fakeurl=1&type=.jpg"
		]
    },
    {
        id: "earntodie",
        name: "Earn To Die Lite",
        category: "Игры",
        developer: "NotDoppler",
        rating: 4.3,
        description: "Earn to Die Lite — это увлекательная гоночная игра для Android, где вы должны ехать на своем автомобиле по опасным дорогам, попутно убивая зомби и зарабатывая деньги для улучшения своего автомобиля!",
        minAndroid: "2.2.0",
        version: "1.0.19",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/earntodie.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/earntodie.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/2670956/unnamed.jpg",
			"https://4pda.to/forum/dl/post/2670950/unnamed+%281%29.jpg",
			"https://4pda.to/forum/dl/post/2670952/unnamed+%282%29.jpg",
			"https://4pda.to/forum/dl/post/2670953/unnamed+%283%29.jpg"
		]
    },
    {
        id: "talkingtomold",
        name: "Talking Tom Cat",
        category: "Игры",
        developer: "OutFit7",
        rating: 4.1,
        description: "Мобильная игра в жанре тамагочи, аналог 2D-игры «Pou», но отличающийся от нее 3D-графическим форматом. Переведен на все языки мира. Четырнадцатая игра из серии Talking Tom and Friends. Разработана словенской компанией Outfit7 Limited.",
        minAndroid: "2.3.0",
        version: "1.0.19",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/talkingtomold.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/talkingtomold.apk",
        screenshots: [
			"https://4pda.to/s/qirtkHY8msMOmcrMBKb1966cdjZyPiKv.jpg",
			"https://4pda.to/s/qirtjMkM38Lz1lMjgDRz0z0lv6cdj3ineUe.jpg"
		]
    },
    {
        id: "talkingtom",
        name: "My Talking Tom",
        category: "Игры",
        developer: "OutFit7",
        rating: 4.4,
        description: "Мобильная игра в жанре тамагочи, аналог 2D-игры «Pou», но отличающийся от нее 3D-графическим форматом. Переведен на все языки мира. Четырнадцатая игра из серии Talking Tom and Friends. Разработана словенской компанией Outfit7 Limited.",
        minAndroid: "4.0.3",
        version: "2.2.2",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/talkingtom.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/talkingtom.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/14208363/101.jpg",
			"https://4pda.to/forum/dl/post/14208368/102.jpg",
			"https://4pda.to/forum/dl/post/14208383/103.jpg",
			"https://4pda.to/forum/dl/post/14208384/104.jpg",
			"https://4pda.to/forum/dl/post/14208386/105.jpg",
			"https://4pda.to/forum/dl/post/14208388/106.jpg"
		]
    },
    {
        id: "redball4",
        name: "Red Ball 4",
        category: "Игры",
        developer: "FDG Entertainment",
        rating: 4.5,
        description: "Red Ball 4 — это аркадный платформер, в котором злобные квадраты хотят превратить мир в куб. Помогите Красному шару спасти планету.",
        minAndroid: "2.3.3",
        version: "1.0.49",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/redball4.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/redball4.apk",
        screenshots: [
			"https://4pda.to/s/qirtgPMfExFtyQpf9WVekQmHJz2En4vLQ.png",
			"https://4pda.to/forum/dl/post/5304767/unnamed+%281%29.jpg"
		]
    },
    {
        id: "granny",
        name: "Granny",
        category: "Игры",
        developer: "DVloper",
        rating: 5.0,
        description: "Granny — хоррор-игра, в которой вам нужно выбраться из дома, избегая страшной бабки.",
        minAndroid: "4.1.0",
        version: "1.7.2",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/granny.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/granny.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/15955359/2019-04-11_235037.png",
			"https://4pda.to/forum/dl/post/15955357/2019-04-11_235450.png"
		]
    },
    {
        id: "hillclimbracing",
        name: "Hill Climb Racing",
        category: "Игры",
        developer: "Fingersoft",
        rating: 4.8,
        description: "Hill Climb Racing — аркадная гоночная игра с физикой, в которой нужно забираться по холмам.",
        minAndroid: "2.2.0",
        version: "1.20.0",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/hillclimbracing.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/hillclimbracing.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/16016611/x4_0.png",
			"https://4pda.to/forum/dl/post/16015511/x4_1.png"
		]
    },
    {
        id: "pou",
        name: "Pou",
        category: "Игры",
        developer: "Zakeh",
        rating: 4.3,
        description: "Ухаживайте за своим виртуальным питомцем Pou: кормите, мойте и играйте с ним.",
        minAndroid: "1.6.0",
        version: "1.4.67",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/pou.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/pou.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/2122740/pou.jpg",
			"https://4pda.to/forum/dl/post/2122741/pou1.jpg",
			"https://4pda.to/forum/dl/post/2122742/pou2.jpg"
		]
    },
    {
        id: "badpiggies",
        name: "Bad Piggies",
        category: "Игры",
        developer: "Rovio",
        rating: 4.6,
        description: "Bad Piggies — головоломка от создателей Angry Birds, где вы помогаете свиньям строить транспорт.",
        minAndroid: "2.2.0",
        version: "1.1.0",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/badpiggies.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/badpiggies.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/2055079/unnamed.jpg",
			"https://4pda.to/forum/dl/post/2055072/unnamed+%281%29.jpg",
			"https://4pda.to/forum/dl/post/2055073/unnamed+%282%29.jpg",
			"https://4pda.to/forum/dl/post/2055075/unnamed+%283%29.jpg",
			"https://4pda.to/forum/dl/post/2055077/unnamed+%284%29.jpg"
		]
    },
    {
        id: "templerun",
        name: "Temple Run",
        category: "Игры",
        developer: "Imangi Studios",
        rating: 3.7,
        description: "Temple Run — бесконечный раннер, в котором нужно убегать от монстров, собирая монеты.",
        minAndroid: "2.1.0",
        version: "1.0.0",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/templerun.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/templerun.apk",
        screenshots: [
			"https://4pda.to/s/qirtlg4z2hz2Bi2R0k322Tz2HYSEgFIokHm.jpg",
			"https://4pda.to/s/qirtjkEk0z0krThuYTHC6bej4oCG2QgxH.jpg",
			"https://4pda.to/s/qirthYGTz1z18gD3y8yYILBZz2fz2H53Piq9.jpg"
		]
    },
    {
        id: "drdriving",
        name: "Dr. Driving",
        category: "Игры",
        developer: "SUD Inc.",
        rating: 4.4,
        description: "Dr. Driving — симулятор вождения с миссиями и заданиями в городских условиях.",
        minAndroid: "2.2.0",
        version: "1.14",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/drdriving.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/drdriving.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/3146211/Screenshot_2013-06-30-20-38-14.png",
			"https://4pda.to/forum/dl/post/3146226/Screenshot_2013-06-30-20-39-45.png"
		]
    },
    {
        id: "veshalka",
        name: "Вешалка",
        category: "Игры",
        developer: "PageNet",
        rating: 4.0,
        description: "Классическая игра «Вешалка» — угадывайте слова по буквам.",
        minAndroid: "1.5.0",
        version: "1.0.4",
        icon: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/img/apps/icons/veshalka.png",
        app: "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/veshalka.apk",
        screenshots: [
			"https://4pda.to/forum/dl/post/826095/ss_1_320_480_160_1_425264676e64a265a57e5aaa9c66ca07e6883db9.jpg",
			"https://4pda.to/forum/dl/post/826094/ss_0_320_480_160_1_ee20eff685ceddec17bbaeb91eeb49a6ebda4410.png"
		]
    }
];

function getStars(rating) {
    let starsHtml = '<div class="stars-wrapper">';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            // Целая звезда
            starsHtml += '<i class="fa-solid fa-star filled"></i>';
        } else if (rating >= i - 0.5) {
            // Половинка
            starsHtml += '<i class="fa-solid fa-star-half-stroke filled"></i>';
        } else {
            // Пустая
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }
    starsHtml += `<span class="rating-number">${rating}</span></div>`;
    return starsHtml;
}

async function updateAppSize(appLink) {
    const sizeElement = document.getElementById('appSize');
    if (!sizeElement || !appLink) return;

    try {
        // Превращаем raw ссылку в путь для API
        // Из: https://raw.githubusercontent.com/DoiKo35/ClassicMarket/main/apps-apk/fff.apk
        // В: DoiKo35/ClassicMarket/contents/apps-apk/fff.apk
        const urlParts = appLink.replace('https://raw.githubusercontent.com/', '').split('/');
        const owner = urlParts[0];
        const repo = urlParts[1];
        const branch = urlParts[2];
        const filePath = urlParts.slice(3).join('/');

        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.size) {
            const sizeInMB = (data.size / (1024 * 1024)).toFixed(1);
            sizeElement.textContent = `Размер: ${sizeInMB} MB`;
        } else {
            sizeElement.textContent = `Размер: н/д`;
        }
    } catch (error) {
        console.error("Ошибка API:", error);
        sizeElement.textContent = `Размер: ошибка`;
    }
}