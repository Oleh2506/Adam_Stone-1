/* global monogatari */
// Define the messages used in the game.
monogatari.action("message").messages({
  Help: {
    title: "Help",
    subtitle: "Some useful Links",
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome",
    body: "This is the Monogatari VN Engine",
    icon: "",
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

// Define the videos used in the game.
monogatari.assets("videos", {
  intro: "intro.mp4",
});

// Define the images used in the game.
monogatari.assets("images", {});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {});

// Define the Characters
monogatari.characters({
  g: {
    name: "{{stacey.name}}",
    directory: "stacey",
    sprites: {
      normal: "stacey_normal.png",
      act2: "stacey_act2.png",
    },
  },

  a: {
    name: "Адам",
    directory: "adam",
    sprites: {
      normal: "adam_normal.png",
      act2: "adam_act2.png",
    },
  },

  so: {
    name: "Солдат Ордену",
  },
});

monogatari.script({
  Start: [
    "show video intro immersive with close controls",
    'show background url("assets/scenes/black.png") with fadeIn',
    "g Адаме… Адаме, прокидайтесь.",
    'show scene url("assets/scenes/intro_background.png") with fadeIn',
    "show character a normal at right with fadeIn",
    "show character g normal at left with fadeIn",
    "Розплющивши очі, ви подумали, що осліпли: усе навколо було яскраво білим, що сильно било по очах. Першим, що ви побачили, протерши очі, була доволі приваблива роботеса, занадто сильно схожа на людину.",
    "a Що за…",
    "g Привіт, Адаме.",
    "a Непоганий сон… Хто ти?",
    "g Я Гугл-Жінка, ваш асистент. Ви потрапили у Кібервсесвіт.",
    "a Ага… Мене випадково струмом не вдарило, коли світло вимкнулось…",
    "g Мої сенсори показують, що з вами усе добре. Проте нам слід вже йти. Часу не так багато.",
    "a І куди ж ми так поспішаємо? Я поки не хочу прокидатись.",
    "Ви оглянули нову знайому та посміхнулись. Проте її вигляд обличчя не змінився.",
    "a <i>А вона вміє проявляти емоції?</i>",
    "g Гугл-Жінка: На жаль, це не сон, Адаме. І скоро тут буде армія Зевса, а ви ще не готові до цієї зустрічі. Тому нам слід…",
    "a Зевса? Армія Зевса? Це точно КІБЕРсвіт?",
    "g Так, це Кібервсесвіт. І нам дійсно необх…",
    "a Як на мене, більше схоже на якийсь міф античності з елементами кіберпанку. Проте цікаво, що далі?",
    "g Нарешті… Нам потрібно знайти більш безпечне місце для розмови. Наприклад…",
    "Гугл-Жінка активувала якийсь пристрій на своїй долоні, після чого поруч з’явилось щось схоже на портал.",
    "g Це кібернетична сітка, яка пов’язує між собою усі кібервиміри. З її допомогою можна переміщуватись по усьому Всесвіту.",
    "a Ми можемо потрапити в базу даних Пентагону?",
    "g Теоретично так, але…",
    "a Хочу туди.",
    "g Лише теоретично… Давайте ми все ж знайдемо інше місце, де я усе вам розповім? Прошу, заходьте. Це майже не боляче.",
    "a Боляче уві сні? Оке-е-ей, спробуємо.",
    "Ви ступили у портал.",
    "Вмить вас охопила темрява. Здавалось, ніби усе тіло стягується тонкими нитками. Ще секунда і вони розірвуть плоть на мільярди нано-шматочків, які перенесуться разом з даними у будь-який вимір, у будь-яку точку існуючого…",
    "a <i>Що відбувається?..</i>",
    "jump Act1_Start",
  ],
  Act1_Start: [
    "Подорож тривала на подив не довго. Вже через секунду ви опинились на робочому столі.",
    'show scene url("assets/scenes/act1_background.png") with fadeIn',
    "show character a normal at right with fadeIn",
    "show character g normal at left with fadeIn",
    "a Де… Де ми?",
    "g Це робочий стіл.",
    "a Що? ЦЕ робочий стіл?!",
    "g Робочий стіл Windows XP.",
    "a У Кібервсесвіті. Windows XP. Microsoft відключив вам ліцензію?",
    "g Дуже смішно. Насправді це найбезпечніше місце у цьому вимірі.",
    "a Іронічно…",
    "jump Act1_TopicSelect",
  ],
  Act1_TopicSelect: [
    "g Тепер ми можемо продовжити розмову. В тебе є питання?",
    {
      Choice: {
        Continue: {
          Text: "Ні, питань немає.",
          Do: "jump Act1_Continuation",
        },
        Pentagon: {
          Text: "Щодо Пентагону.",
          Do: "jump Act1_Pentagon",
        },
        Cyberspaces: {
          Text: "Кібервиміри.",
          Do: "jump Act1_Cyberspaces",
        },
        RealisticDream: {
          Text: "Реалістичний сон.",
          Do: "jump Act1_RealisticDream",
        },
      },
    },
  ],
  Act1_Pentagon: [
    "a Щодо Пентагону. Ми все ж можемо там… прогулятись?",
    "g В даний момент це неможливо. Не усі частини Кібервсесвіту доступні для вільних подорожей. Такі як Пентагон, наприклад, обмежені багатоступеневим захистом. І я його прорвати не можу. Принаймні поки що.",
    "a Пф, теж мені. Не такий там і сильний захист…",
    "jump Act1_TopicSelect",
  ],
  Act1_Cyberspaces: [
    "a Ти говорила про кібервиміри. Скільки їх?",
    "g Незліченна кількість. Вони існують поза простором і часом. Виміри пов’язані між собою потоками, за допомогою яких ми і можемо переміщуватись в те чи інше місце.",
    "a Телепортація?",
    "g Майже… Спеціальні пристрої, як у мене в руці, переносять нас у потоки, розділяють на біти даних та доставляють за обраною адресою.",
    "a Все так просто…",
    "g Саме так. Іноді переміщення може завдавати болю, особливо переміщення на великі дистанції.",
    "a Та не те щоб. Хм, а ти відчуваєш біль?",
    "g Ні, я не здатна відчувати.",
    "a Зовсім нічого?",
    "g Нічого, я всього лише робот. У мої системи не включені емоції та почуття. Проте я швидко навчаюсь та можу імітувати їх.",
    "a Ооооо! Це вже краще!",
    "Ви неоднозначно посміхнулись.",
    "g Як скажете.",
    "jump Act1_TopicSelect",
  ],
  Act1_RealisticDream: [
    "a Маю сказати, що сон дійсно реалістичний.",
    "g Це не сон…",
    "a Ну так, звісно. Камон, я не вірю в існування так званого Кібервсесвіту, андроїдів, що живуть в бінарному коді, і бога грому, який чомусь залякує кіберістот своєю армією.",
    "g Спробуйте прокинутись.",
    "a А…",
    "g Не виходить?",
    "a Я ще навіть не спробував!",
    "g Добре, я почекаю.",
    "Ви не знаєте як прокинутись. Варіант «ущипнути себе» не привів до бажаного результату, але тепер у вас синець на руці.",
    "g Як успіхи?",
    "a І як мені прокинутись? Ти ж розумна, підкажи.",
    "g Ніяк. Ви не спите, ви дійсно потрапили у Кібервсесвіт. І єдиний вихід звідси – пройти через усі випробування.",
    "a Я все одно тобі не вірю… Але вибору немає, чи не так?",
    "Гугл-Жінка лише кивнула головою, очікуючи ваших подальших запитань.",
    "jump Act1_TopicSelect",
  ],
  Act1_Continuation: [
    "g Якщо питань немає, то я маю розповісти тобі особливості цього світу. Для початку ознайомимось з основним функціоналом. Одним кліком на діалогову область ти можеш перейти до наступної лінії тексту чи діалогу. Кнопкою «skip» у верхньому правому кутку ти можеш перемотувати текст до наступного вибору. Проте будь уважним, так ти можеш пропустити багато корисної інформації, яка може допомогти тобі в майбутньому. Під час вибору ти зможеш обрати дії чи опції діалогу, які матимуть вплив на подальші події чи поведінку головних персонажів, а також безпосередньо на твою долю. Протягом нашої подорожі ти можеш зустріти вибори з таймером. В них ти маєш обмежений час для вибору, якщо не обрати нічого – наслідки можуть бути непередбачуваними, навіть летальними. О, щодо смерті. Ти маєш лише одне життя, але я можу відновлювати твої дані з контрольних точок, але тоді твій прогрес та навички будуть стерті.",
    "a Воу… Багато інформації. Але я це вже й так робив.",
    "g І правда… Що ж, можливо, колись знадобиться. На цьому наш екскурс закінчено, якщо у вас пізніше виникнуть питання, ви завжди можете їх задати.",
    "a Є питання.",
    "g Слухаю.",
    "a А в тебе є ім’я?",
    "g Неочікуване питання. Ви поставили мене в скрутне становище. Мене ніколи ніхто не називав за іменем, тому в мене його немає.",
    "a Тоді я буду в тебе першим?",
    "g Перепрош…",
    "a Як тобі «Стейсі»? Звучить.",
    "g Як скажете, Адаме.",
    "a Чудово, Стейсі. Приємно познайомитись.",
    function () {
      monogatari.storage().stacey.name = "Стейсі";
    },
    "g Навзаєм.",
    "Ви відчуваєте вібрацію у просторі та чуєте дивний гул. Простір навколо розходиться тріщинами, з яких всередину просочується негативна енергія.",
    "g Нам треба йти.",
    "a ЩО ЦЕ?",
    "g Армія Зевса… Схоже, він вже знає про ваше перебування тут.",
    "a Та хоче познайомитись особисто?!",
    "g Можливо… В будь-якому випадку, час спливає, ходімо.",
    "Стейсі щось швидко налаштовує на кіберсітці та відкриває новий портал, в який ви не задумуючись проходите.",
    "jump act1_checkpoint",
  ],
  act1_checkpoint: [
    "Вітаю, ви пройшли перший акт!!!",
    {
      Choice: {
        Save: {
          Text: "Save",
          Do: function () {
            monogatari.menu("Save");
          },
        },
        No: {
          Text: "Continue without saving",
          Do: "jump Act2_Start",
        },
      },
    },
  ],
  Act2_Start: [
    'show scene url("assets/scenes/act2_background.png") with fadeIn',
    "show character a act2 at center with fadeIn",
    "show character g act2 at left with fadeIn",
    "Цього разу портал переніс вас в ігрове лоббі. Ви помічаєте, що зі Стейсі щось не так.",
    "a Щось сталось?",
    "g Моя кіберсітка…",
    "Стейсі беземоційно дістає з руки металевий уламок та піднімає на вас погляд.",
    "g Вона більше не працює. Уламок пошкодив мої системи управління кіберпростором, тому ми більше не зможемо подорожувати вимірами.",
    "a То полагодь її?",
    "g В даний момент це неможливо. Після того, як Зевс прибрав владу у свої руки, ми не маємо такого ж необмеженого доступу до даних та ресурсів, як раніше. З цієї причини я не можу знайти необхідні дані для розробки чи налагодження системи управління кіберпростором.",
    "a Просто супер. Навіть уві сні доводиться ходити ногами. До речі, хто такий цей Зевс? Чому його всі так бояться і чому він аж насті-і-ільки сильний?",
    "g Я думала, ви не запитаєте. Зевс – штучно створений кібернетичний вірус. Під час його написання людиною відбулась фатальна помилка, після чого він почав неконтрольовано розмножувати свої дані.",
    "a Так це ж нормальна поведінка для комп’ют… Кхм. Продовжуй.",
    "g Дякую. Отже, випадковим, або не зовсім випадковим, чином вірус зміг влізти у код новітньої розробки в сфері штучного інтелекту «Olimp».",
    "a Олімп? Ти серйозно? В них найсучасніші захисні системи, цілодобове оновлення ключів доступу і…",
    "g Я не буду питати, звідки ви це знаєте, Адаме.",
    "a Так… Краще не треба.",
    "g Вірус переписав вихідний код та об’єднався зі штучним інтелектом. Так з’явився Зевс – поєднання двох людських розробок, яке стало дечим більшим, ніж людина взагалі може собі уявити. Сьогодні він контролює майже увесь Кібервсесвіт.",
    "a Зачекай, а як він взагалі отримав владу над усіма? Хіба тут не бул…",
    "Не встигли ви договорити фразу, як повз ваше обличчя пролетів лазерний постріл. Інстинктивно застрибнувши за першу ж перешкоду, ви намагаєтесь зрозуміти, що відбувається.",
    "a Що знову?",
    "g Армія Зевса. Вони називають себе «Орден Справедливості». Мають сучасне спорядження, зброю та костюми. До речі, про костюми. Як вам ваш новий вигляд?",
    "Ви перевели погляд на свій одяг, який тепер більше нагадував кібернетичний костюм супергероїв із зоряних війн.",
    "a Ще трохи і я більше нічому не буду дивуватись…",
    "so Швидше! Вони десь тут!",
    "g Нас помітили. Потрібно тікати.",
    {
      Choice: {
        TakeBlaster: {
          Text: "Взяти бластер.",
          Do: "jump Act2_TakeBlaster",
        },
        RunAway: {
          Text: "Тікати.",
          Do: "jump Act2_RunAway",
        },
      },
    },
  ],
  Act2_TakeBlaster: [
    "Ви взяли заряджений лазерний бластер. Зброя зручно лягла в руку та чудово підійшла до вашого нового одягу.",
    "g Гарний вибір, але солдати вже поруч.",
    "a Будемо відстрілюватись.",
    "g Як скажете.",
    "Ви з подивом споглядаєте, як роботеса за лічені секунди модернізує своє тіло та перетворює свої руки на смертоносну зброю, доки вас не відволікають звуки пострілів у ваш бік.",
    "Чорт! Добре, що я ходив на курси стрільби.",
    "Сховавшись за однією з перешкод, ви влучно вибиваєте солдатів один за одним. Скоро ви помічаєте, що на фоні грає епічна музика, а за кожного солдата ви отримуєте бали на рахунку.",
    "a <i>Я у грі? Цей сон стає все більш дивним…</i>",
    "Рахунок Стейсі поповнюється в рази швидше, ніж ваш. Задивившись на її рухи, ви пропускаєте ворога.",
    {
      Choice: {
        Timer: {
          // Time in milliseconds
          time: 2000,

          // The function to run when the time is over
          callback: () => {
            //Click the "tookTooLong" button.
            monogatari
              .element()
              .find('[data-choice="tookTooLong"]')
              .get(0)
              .click();

            // Promise friendly!
            return Promise.resolve();
          },
        },
        Go: {
          Text: "Ухилитися",
          Do: "jump Act2_Blaster_Continue",
          Class: "danger_btn",
        },

        tookTooLong: {
          Text: "TookTooLong",
          Do: "jump Act2_RunAway",
          Class: "invisible",
        },
      },
    },
    "end",
  ],
  Act2_Blaster_Continue: [
    "a <i> Твою ж… Треба бути обачнішим.</i>",
    " Вам пощастило з напарницею, адже вона миттєво вбила солдата, якому вдалось вистрілити у вас. Ви хотіли подякувати їй, проте роботеса навіть не поглянула у ваш бік.",
    "a <i> Роботи… Що з них взяти.</i>",
    " Напружена боротьба тривала не довго: коли кожен набрав більше 10000 балів, солдати зникли, проте на поле бою вийшов бос локації – Автоматизований Робот Альтернативного Бою (АРАБ).",
    "a Що це таке…",
    "g Автоматизовний Робот Альтернативного Бою.",
    "a АРАБ? Серйозно?",
    "Від розмови вас відволік несамовитий крик АРАБа. Створіння зі сталі прагнуло вбивств і крові.",
    "a Ну зараз ти в мене…",
  ],
  Act2_RunAway: ["end"],
});
