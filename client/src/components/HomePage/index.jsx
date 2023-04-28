import axios from "axios";
import React, { useState, useEffect } from "react";
import setModalMaxHeight from "../modal";

import Navbar from "../navbar/Navbar";

import righthand from "../../img/righthand.png";
import lefthand from "../../img/lefthand.png";

import btminus4 from "../../img/btminus4.png";
import bt1 from "../../img/bt1.png";
import bt2 from "../../img/bt2.png";
import btminus1 from "../../img/btminus1.png";
import btminus2 from "../../img/btminus2.png";
import btminus3 from "../../img/btminus3.png";
import Layout from "../Layout";

const mock = [
  {
    id: 1,
    noteName: "бт/-4 27/01/21",
    noteText:
      "выписываю неправильное утро в заметки, попутно сжигая свои брови\n" +
      "\n" +
      "-тебе нужна попутка?\n" +
      "-мне нужна гуманитарная помощь\n" +
      "-нужно оставить заявку, они позвонят\n" +
      "-у меня нет телефона\n" +
      "-все равно никто бы не позвонил\n" +
      "\n" +
      "выхожу один на один к светофору, он агрессивный, светит в глаза, мигает, рычит и показывает клыки\n" +
      "начинаю переходить на красный, будто бы не замечаю, он звереет, переливается всеми цветами радуги, зажигает и тушит одновременно все сигналы\n" +
      "\n" +
      "-сегодня не твой день\n" +
      "-а чей?\n" +
      "\n" +
      "перелажу через забор на границе своего понимания и выхожу за пределы. зачем нужно есть пищу? очень странно, что никогда не знаешь куда тебя заведёт лабиринт поощрений и наказаний.\n" +
      "вчера ты был лобстер на пиру у короля. каждый жирный человек жадно отрывал от тебя кусок, вгрызался в мяся. сегодня же, ты быстроногий пёс на гонах, бежишь за волком, лаешь между выстрелами.\n" +
      "а суть то в чем? в том что бутерброд падает маслом вниз.\n" +
      "\n" +
      "-я ем детей\n" +
      "-их нужно готовить на паровой бане или прожаривать? а что на счёт подачи?\n" +
      "-я серьезно\n" +
      "-я тоже\n" +
      "-иногда бывает, хочется звёздное небо плеснуть в молока с кровью\n" +
      "-ты обращалась к специалистам?\n" +
      "-только они ко мне\n" +
      "\n" +
      "рядом с нами лежала бездомная собака.",
    image: "btminus4",
  },
  {
    id: 2,
    noteName: "бт/-1 25/01/21",
    noteText:
      "выхожу из вагона. иду по длинному перрону, фонари светят тусклым жёлтым.\n" +
      "\n" +
      "-у вас не найдется закурить?\n" +
      "-а у вас не найдется огня?\n" +
      "старый хромой фонарь даёт мне огня, я ему даю самокрутку. в фойе вокзала пусто, табло показывает прибытие поезда без времени.\n" +
      "\n" +
      "-когда приедет поезд?\n" +
      "-покажите ваш билет\n" +
      "\n" +
      "даю свёрток похожий на письмо 17 века\n" +
      "\n" +
      "-знаете, он уже уехал!\n" +
      "-совсем уже никак?\n" +
      "\n" +
      "от вокзала идёт три улицы, выбираю самую тёмную. скверный запах мертвой плоти, сразу же нахожу его источник: 4 крысы пытаются разделить труп своего собрата. матерая мощно бьёт конкурентов и кусает, не давая подойти. молодец! вот у нее в точно получится построить карьеру юриста. через несколько пролётов нахожу бездомного, он уговаривает шлюху принять в оплату старые четвертаки в банке\n" +
      "\n" +
      "-отстань!\n" +
      "-но ведь тут достаточно денег\n" +
      "-это не деньги, отвали!\n" +
      "-ну хотя бы раз\n" +
      "-нет!\n" +
      "\n" +
      "-эй, ты не хочешь развлечься?\n" +
      "-у меня нет чувства юмора\n" +
      "-это не обязательно...\n" +
      "-лучше бы оно было\n" +
      "\n" +
      "страшная угловатая улица-помойка вышла к ещё одной такой, но через переулок виден яркий свет. ныряю в него, вынириваю. глоток свежего воздуха!здесь приятно. или нет. фонари на тротуаре моложе тех, что были на перроне, а может быть просто хорошо сохранились. каждый из них в блеске, излучая жизненную энергию предлагает постоять именно под ним.становлюсь под фонарь.\n" +
      "\n" +
      "рядом останавливается машина:\n" +
      "-я видела, что ты не сел в поезд\n" +
      "-это он меня не подождал\n" +
      "-садись в машину\n" +
      "-ладно\n" +
      'вечернее шоссе, огни города в зеркале заднего вида кричат "вернись, а как же мы?"они не первые кого я бросил в этой жизни. в жизни приходится бросать. или быть брошеным.\n' +
      "\n" +
      "-давай заедем на заправку. ты будешь что нибудь?\n" +
      "-мне средний дизель и спички\n" +
      "-только спички\n" +
      "-сойдет\n" +
      'на заправке написано " не курить в зоне ...м запрещено"\n' +
      "я закуриваю. двигатель уже прогрет.\n" +
      "\n" +
      "-садись скорее!\n" +
      "-я ещё покурю\n" +
      "\n" +
      "звёзды на небе такие красивые.",
    image: "btminus1",
  },
  {
    id: 3,
    noteName: "бт/-2 06/12/20",
    noteText:
      "знакомое место. а я думал что больше сюда не попаду, но вот снова рельсы и знакомый перон. радоваться или плакать? не важно.\n" +
      "\n" +
      "я помню что в прошлый раз не смог отсюда уехать. у меня есть новый шанс. мне нужно просто сесть на трамвай и не выходить из него. важно сесть на трамвай который едет в нужную сторону. и не выйти из него пока не уеду.\n" +
      "\n" +
      "-как мне добраться?\n" +
      "-сядь на этот трамвай и едь.\n" +
      "\n" +
      "сел. дело в шляпе! а шляпы на голове нет. или на шляпе головы. может иногда так случиться, что и головы нет.\n" +
      "\n" +
      "все в порядке, я скоро приеду. в прошлый раз мне пришлось идти пешком и в итоге я заблудился в метро, хотя шел по трамвайным путям. теперь не выйду, буду ехать и точно приеду.\n" +
      "\n" +
      "но вот в чем проблема: проезжаю одну станцию и на остановке в��жу людей, они все ждут трамвай.\n" +
      "я выхожу. спрашиваю у человека на остановке:\n" +
      "\n" +
      "-сколько стоит акация?\n" +
      "-ничего не стоит\n" +
      "-у вас тут хорошая экономика. можно мне веточку?\n" +
      "\n" +
      "трамвай уехал, а у меня есть веточка акации.\n" +
      "я смотрю на то, как уезжает трамвай, накатывает ужас - снова не смог уехать.\n" +
      "сдаваться мы не умеем. бегу за ним, пока он не останавливается на следующей станции. есть. догнал. уеду. запрыгиваю в салон.\n" +
      "\n" +
      "-вы что не видите? конечная! выйдите пожалуйста!\n" +
      "\n" +
      "выхожу. такие дела. как так получилось? каждый раз одно и то же. нужно мыслить нестандартно. \n" +
      "пошел по трамвайным путям, нашел новую станцию.\n" +
      "пора зайти в уборную.\n" +
      "\n" +
      "-стой, там не работает слив, тебя зальёт водой\n" +
      "-а здесь?\n" +
      "-тоже не работает\n" +
      "-где работает?\n" +
      "-нигде\n" +
      "-а зачем вы продали мне билет?\n" +
      "\n" +
      "проснулся и был очень рад, что туалет во сне не работал.",
    image: "btminus2",
  },
  {
    id: 4,
    noteName: "бт/-3 27/02/21",
    noteText:
      "\n" +
      'утром она пришла, чего я совсем не ожидал. сказала, что просто повидаться, но выглядит как прощание. в моменте я сидел на дереве китайского можевельника и пытался съесть завтрак. завтрак пытался съесть меня. как жаль, у него получается лучше чем у меня, я наверное не способен. ни на что не способен, а значит способен на все сразу? это все Инь Янь. главное не забывать закрывать окна, иначе она опять придет. придет и скажет "прощай"\n' +
      " \n" +
      '-да ну, перестань, каждый день "прощай" и ещё ни разу не ушла! время что то менять.\n' +
      "-так ведь только 10\n" +
      "-значится, одевайся, скоро все закроется, а мы ещё можем успеть\n" +
      "\n" +
      "мы всегда не успевали. просто время летит так быстро, так неуловимо. порой ты ждёшь пока стрелка секунды сдвинется с места, а она кажется умерла, но с НЕЙ не так, с ней как будто ускоряешься до скорости света. и тоже стрелка не двигается.\n" +
      "\n" +
      "-ткни ее палкой!\n" +
      "-лучше проверить пульс\n" +
      "-но у нее нет вен\n" +
      "-значит она не героиновая наркоманка\n" +
      "\n" +
      "это тоже неправда, секундная стрелка любит это дело, об этом знает минутная стрелка и все прочие...\n" +
      "но мы её не будем судить, у нее страшно-тяжелая роль. будь я секундной стрелкой я бы спился\n" +
      "\n" +
      "-ты и так спился\n" +
      "-провокация и ложь\n" +
      "-отдай бутылку!\n" +
      "\n" +
      "я отдаю ей всего себя. бутылку не отдаю.\n" +
      "мы садимся на можевельник и она высыпает песочные часы в обычные.",
    image: "btminus3",
  },
  {
    id: 5,
    noteName: "бт/2 06/0/0",
    noteText:
      "она позвонила очень неожиданно\n" +
      "\n" +
      "-ты будешь сегодня гулять?\n" +
      "\n" +
      "ответ застал меня врасплох\n" +
      "нужно было действовать нетривиально по этому я повел ее в поле\n" +
      "мы собирали бурьян\n" +
      "а потом я кормил девчушку с цветами вместо волос черноземом\n" +
      "\n" +
      "-знаешь меня еще никто не кормил черноземом\n" +
      "\n" +
      "сказала мне она\n" +
      "а я совсем забыл что забыл дома утюг включить\n" +
      "перед уходом\n" +
      "\n" +
      "-давай пойдем ко мне?\n" +
      "-ой нет прости я не могу мне еще нужно волосы полить\n" +
      "\n" +
      "у меня дома даже не было ванной\n" +
      "так жаль\n" +
      "а ведь я так хотел полить ее волосы\n" +
      "они пахли полем, букетом из бурьяна и черноземом\n" +
      "чернозем\n" +
      "ом\n" +
      "я мазал руки\n" +
      "а потом и вовсе стал ножем мазать его на хлеб\n" +
      "это было самое дорогое свидание за мой счет\n" +
      "\n" +
      "-тебе намазать бутерброд маслом в дорогу, дорогая?\n" +
      "-ты хотел сказать землей?\n" +
      "\n" +
      "я ничего не хотел\n" +
      "сказать\n" +
      "это вообще не моя натура\n" +
      "сказать\n" +
      "мне легче\n" +
      "\n" +
      "наказать\n" +
      "намазать\n" +
      "назвать\n" +
      "\n" +
      "но я вовсе не знаю что говорить этой девушке\n" +
      "тем более что у нее цветы вместо…\n" +
      "\n" +
      "-я люблю тебя\n" +
      "-и я\n" +
      "\n" +
      "-я хочу быть с тобой всегда\n" +
      "-ты всегда со мной\n" +
      "\n" +
      "-ты выйдешь за меня замуж?\n" +
      "-может хочешь полить мне волосы?",
    image: "bt2",
  },
  {
    id: 6,
    noteName: "Бт/01",
    noteText:
      "Хочу на пальцах простыми словами объяснять что хорошо что плохо, только озадачивает инвертируемость этих понятий, на пальцах не объясняется, на полочки в голове не кладётся, кладётся в сундуки\n" +
      "На чьих пальцах объяснить, на моих только пыльца звездная смешалась с твоей - нарвал полевых цветов. Быстрым касанием перемешались - как пятна бензина в луже в ней отражение поезда, поднимаю глаза - уже улетел вдогонку за золотым самолётом на станцию звёздный бульвар. Смотри на кончики своих в��лос, солнце их покрывает золотом, а пальцы как древесные круги, в детстве мама сказала так можно узнать сколько дереву лет. Раз два три, сбиваюсь, тонкие трещины сплетаются в одну, между собой закручиваются, твои волосы падают тебе на глаза, я не могу понять у дерева одна большая жизнь или много маленьких.\n" +
      "Сладкого есть не хочется - забивает рецепторы, которые тебя ещё помнят. Хочется себя разломать на части как печенье, с которым я завязал, и найти внутри тебя, а не начинку. Земля ломает себя сама тоже, сталкивает тектонические плиты, эти слова я помню со школы, с высоты бросает сама на себя камни, почему я не могу так же? Тяну руку - можно? я знаю правильный ответ! Я - твой дом.",
    image: "bt07",
  },
  {
    id: 7,
    noteName: "Бт/02",
    noteText:
      "Хочу тебя обнять руками, но в моем пользовании только слова. Большую часть своих текстов пишу о тебе. Могу разные буквы ставить вместе, чтобы теплым шарфом ложились тебе на шею и на плечи, свитером крупной вязки согревали каждое твое утро. Оказалось так мало у меня есть способов, чтобы тебя обнять, но в то же время есть миллиарды вариантов как соединить 33 буквы вместе, чтобы мягким старым пледом, под которым маленьким засыпал тебя накрыть и ты в безопасности, ничего не страшно. теплым летним вечерним ветром тебя ласково коснуться, думаешь как хорошо, хоть бы так было всегда. Жаркими лучами солнца обжигать голые загорелые плечи, прости если больно. Хрупкими снежинками плавно опускаться на твои волосы и ресницы и таять, носи пожалуйста шапку. фланелевой хрустящей рубашкой кладу тебе на плечи свои руки. колечки блестят на пальцах разноцветными стекляшками, это я случайно быстро касаюсь твоей руки. Утопаю в слишком большой футболке со смешной картинкой и чувствую себя маленькой, так как буду себя чувствовать в твоих объятиях. Сильный порыв ветра бьет в спину - нечестно и по предательски - обволакивает быстрым серым холодом, мне даже нравится, это тоже твои объятия, проносится дальше, чуть задерживаясь на моих плечах, руках, локтях, кистях , уже ласково последним порывом гладит кончики пальцев. буду сидеть на кухне скоро зимой одна в квартире, смотреть в черное окно, крупный снег лениво падает вниз, каменные ледяные руки держат чашку с горячим чаем, лампа светит медом, такое ощущение что ты один на всей планете и до бесконечности, нехотя откуда-то падает снег. чтобы упасть надо сначала куда-то залезть, может кто-то его просыпал случайно так много или сидит и от скуки сквозь пальцы роняет вяло на нас белые лепестки. Сижу в мягком свитере черно белом на голое тело, это ты меня обнимаешь, где-то тоже собираешь в кармашки снежинки.",
    image: "bt08",
  },
  {
    id: 8,
    noteName: "Бт/03",
    noteText:
      "Я знаю ответы на эти вопросы, но все равно задаю их себе каждый день, вчера перестал\n" +
      "Записки на крахмальных манжетах -список врагов\n" +
      "У нас одно правило - не влюбляться в меня\n" +
      "Чувствую себя аппендицитом, рудиментарным органом\n" +
      "Относительно чего?\n" +
      "Мне хватило трусости только чтобы не сказать правду\n" +
      "Завуалированным смыслом.\n" +
      "По дороге дилижанс сломался. Пациент умер.\n" +
      "Четверо ранено, один сошёл с ума.\n" +
      "апокалипсис значит новый свет\n" +
      "Все что может остановиться когда-то остановится\n" +
      "За завтраком обсуждали революцию\n" +
      "Лавирую между разными вопросами, чтобы не отвечать ни на один\n" +
      "Давайте поможем друг другу убьём себя сами\n" +
      "Убей хотя бы одного человека и потом поговорим\n" +
      "Ты красиво выглядишь, хочешь выкурить со мной сигарету? Мотает головой. Я чувствую себя обособлено, отрешённо, не как часть, давай хотя бы мы поговорим и больше никогда не увидим друг друга, хочешь?\n" +
      "Ты молодая и красивая, зачем ты куришь\n" +
      "Я закуриваю вторую\n" +
      'Он бросает бычок на землю "я разбираюсь в экологии"\n' +
      "Я не хочу здесь жить, я хочу жить совершенно на другой планете, кто-то находясь с тобой в полярных точках планеты, может легко уничтожить тебя и все что вокруг\n" +
      "Не получится только если между нами тысячи световых лет\n" +
      "В нашем понимании родина- то что жрет своих сыновей\n" +
      "Я не чувствую неприятия или злости\n" +
      "Я все верю в судьбу иступлено, с всепоглощающим доверием в разумность ее решений\n" +
      "Меня только выворачивает наружу и обратно, снова и снова\n" +
      "Я не хочу выходить из куба в котором сижу.\n" +
      "Пропускать светлые волосы сквозь пальцы\n" +
      "Уходить целиком в чёрные полностью глаза\n" +
      "Я никогда не делала шаг, чтобы войти, даже когда они звали\n" +
      "Сейчас я стучу в них кулаками, ору пустите меня пустите меня внутрь, срываю голос, сажусь на колени, спиной опираюсь о закрытую дверь, шепчу мокрым рваным голосом откройте мне\n" +
      "Они молчат\n" +
      "Ещё хуже потому что я сижу на своей кровати и пишу какие-то слова\n" +
      "А ты постой с автоматом хотя бы минуту ты сразу все поймёшь\n" +
      "Обещай, что ничего не будешь обо мне рассказывать\n" +
      "Он говорит мне «посмотри в моем пальто в правом кармане, может там есть деньги»\n" +
      "Я встаю, он достаёт пистолет стреляет себе в голову: в моей смерти прошу никого не винить\n" +
      "Ну кто так делает\n" +
      "Мне 12 или 13 лет, выхожу из-под земли, чёрный свитер короткий в рукавах и колется, поднимаюсь и не могу идти дальше, передо мной стекло, стучу по нему ногтями, за ним ходят люди, приезжает автобус, выпускает из себя толпу и пожирает новую. Они идут за стеклом, мимо меня, будто никто не видит, что стоит ребёнок в аквариуме. Я смотрю кино. Моргаю, стекло исчезает, я снова здесь с ними, приезжает новый автобус. пойду пешком.\n" +
      "Почему ты не говорила раньше?\n" +
      "Я умею говорить последние пару месяцев.\n" +
      "Беру с собой твои фотографии, твой запах в флакончике, коллекцию скуренных сигарет в коробочке и осуждающих взглядов, ведь я молода и красива.\n" +
      "Последний окурок не добавляю.\n" +
      "Я не хочу больше ругаться, я хочу снова каждые полчаса получать сообщения что все хорошо. Твой телефон истошно орет о тревоге, мой бы разрывался от твоих сообщений «я в порядке».\n" +
      "Подхожу к каждому человеку вплотную -поговори со мной\n" +
      "-у меня все хорошо\n" +
      "-спасибо\n" +
      "Обернусь в одело сплетенное из слов «со мной все хорошо».\n" +
      "\n" +
      "И улщчх шщжфлщ шихзхкфлл! 1 упттпхф ухшсипюлр цхлкъщ фхиву ъкхзфву\n" +
      " ужчячъщху и упчл шщжфлщ шихзхкфлл! щчпшщж щвшёю теклр ъучлщ.",
    image: "bt09",
  },
  {
    id: 9,
    noteName: "Бт/3.14",
    noteText:
      "-мы нигде не встречались? кажется я тебя видела\n" +
      "-я снимался в фильмах молодого Годара\n" +
      "-точно, наверное там.\n" +
      "ты хорошо сохранился, сколько тебе лет?\n" +
      "-осенью исполнится 93\n" +
      "-выглядишь не на свои года\n" +
      "-я овен\n" +
      "-я работаю сегодня, но если хочешь можешь зайти за мной после работы\n" +
      "-могу даже не зайти за тобой\n" +
      "-это было бы мило\n" +
      "\n" +
      "вечером я изо всех сил старался на заходить. зашёл в трамвай. он тоже идёт сегодня на свидание. после смены будет ехать в депо, в общежитие где живут девочки трамваи. как я это понял? внутри у него была бутылка вина и букет ромашек.\n" +
      "синие цвета улицы иногда становились желтыми, но холод обесцвечивал их и улица серела. дождь шёл как с работы и на следующей остановке в вагон забежала мокрая девчушка. я уже забыл куда еду, такая мокрая она была. глаза карие волосы коричневые мягкие черты лица и ангельский взгляд.такое было в ее взгляде, будто никогда больше ее не встречу.набравшись смелости и воды в рот я пошёл к ней.\n" +
      "\n" +
      "-ммм\n" +
      "-что? я тебя не понимаю\n" +
      "-хочешь свитер ты совсем мокрая, холодно же, - сказал я, выронив воду прямо\n" +
      " на ее густые волосы\n" +
      "-ты не снимался у молодого Годара?\n" +
      "-я слишком молод для этого\n" +
      "\n" +
      "девчушка взяла у меня свитер и ловко сменила погоду улиц на колючую.\n" +
      "я тоже переоделся - теперь у меня не было свитера.\n" +
      "\n" +
      "-меня зовут…\n" +
      "-меня иногда тоже, но вообще я не любитель приходить\n" +
      "-звёзды на небе такие красивые, представляешь как много там разных уютных планет? думаю где нибудь есть планета на которой трамваи после возвращения в депо ходят на свидание\n" +
      "\n" +
      "эта девчушка.\n" +
      "что то в ней было безумно странно. мне не удавалось понять что именно. я думал о ней как о персонаже арт-хаусного порно фильма в стиле ужасов девяностых.\n" +
      "она спросила меня\n" +
      "\n" +
      "-мы нигде не встречались?",
    image: "bt12",
  },
  {
    id: 10,
    noteName: "Бт/04",
    noteText:
      "Я глянул во двор, на асфальтированном дворе проходили разноцветные коты\n" +
      "Предательства боится только предатель\n" +
      "Пророк говорит «сам не знаю как так вышло»\n" +
      "Часовщик вставил себе в глаз стаканчик из-под игральных костей,\n" +
      "по мере себя увеличивал население городка.\n" +
      "Месиво изуродованной морали прятал впиджак на малиновой подкладке. В него прятался сам, застегивал изнутри и создавал свой город.\n" +
      "Я говорю всем уйдите, но вокруг меня никого нет, говорю наверное голосам в голове и обществу из забытых мною и забывших меня людей, они удивляются, им больше некуда идти, кроме моей головы для них нет места и дома. Они удивляются, но не боятся, они знают, что я бессильна их выг��ать не могу. Улицы в моем городе меняются местами, вьются друг с другом змеями, им никогда не покинуть его. Заходи, тут приют для всех из моего прошлого, располагайся.\n" +
      "\n" +
      "Стараясь понять, что происходит вокруг. Однажды она спросила:\n" +
      "- Мама, почему повсюду столько боли, страданий и горя? Для чего все это?\n" +
      "Это был несложный вопрос.\n" +
      "\n" +
      "Возьму наушники, буду идти в тишине, но пошёл в пальто.\n" +
      "Пищевое отравление вытошнить, скальпелем опухоль вырезать, переломать каждую маленькую косточку,\n" +
      "Подслушиваю разговор охранников, артисты, буддисты запрыгивают в танки.\n" +
      "Если что-то сотворить, оно обязательно будет использовано, например, ядерное оружие\n" +
      "Надо мной нимб, ореол из несказанных слов, с каждым днём их все больше\n" +
      "Звук будильника утром самый важный означает, что ты проснулся\n" +
      "Я не завожу будильник\n" +
      "Переступаю порог дома и самовоспламеняюсь\n" +
      "⁃ ну вот опять подметать за тобой пепел\n" +
      "Я слишком поздно вспомнил как звучат колокола, сказать или нет\n" +
      "Светом спасаюсь от звука\n" +
      "Ихтиандр плавает в тёмной мутной воде, водоросли царапают торчащие рёбра\n" +
      "Я слышу шум воды в трубах внутри стен это\n" +
      "Шум труп",
    image: "bt11",
  },
  {
    id: 11,
    noteName: "бт/-5 09/03/21",
    noteText:
      "поймал мысль на себе. мысль что сильная охота ловить не приводит человечество к апогею. каждый охотник желает знать…\n" +
      "\n" +
      "-мне нужно ампутировать память, она гниёт\n" +
      "-я думаю это сифилис\n" +
      "-ох, точно нет, он у меня уже был\n" +
      "-и как?\n" +
      "-мило пообщались\n" +
      "\n" +
      "как часто ошибается светофор? а хирург? я хочу что бы каждый аппендикс в этом мире слышал меня и со мной разговаривал, но что меня огорчает, аппендиксы - молчаливые ребята. намного проще поговорить с печенью! сердце слушать не люблю, оно слишком кичливое, его стук действует на нервы. его стук действует.\n" +
      "\n" +
      "-кто там?\n" +
      "-это почта\n" +
      "-кому?\n" +
      "-вам\n" +
      "-я не ждал\n" +
      "-а она пришла\n" +
      "-тогда пусть зайдет!\n" +
      "\n" +
      "привет тебя как зовут меня коля а меня почта давай дружить тебе больше нравится синий или красный я смеюсь а ты фотографируешь меня на поляроид небо светло-голубое солнце ярко желтое лучи мягкие растекаются вот попробуй возьми в руку видишь они жидкие смотри не урони а то испачкаешь балетки мама сказала завтра пойдем к врачу это совсем не страшно а ты был когда то у врача мне говорили что врачи это люди которые чинят то что сломалось в новостях показывали президента а за столом был оливье и картошка под елкой лежали подарки мне врач сказал все нормально я посмотрел в зеркало а там",
    image: "bt10",
  },
  {
    id: 12,
    noteName: "October 31,2022",
    noteText:
      "Она мне рассказывала про себя, я ей рассказывал про тебя\n" +
      "Губы дрожат, улыбка кривая режет лицо\n" +
      "Забрать бы в святящиеся лампочки, в объятия со спины, в горячую ромашку с мёдом, в коробочку в 20 квадратов где все что за окнами - сон и не по настоящему\n" +
      "Я боюсь засыпать, когда все дома уже спят, читаю маленьких женщин, жду рассвета. Луиза мэй олкотт написала инструкцию, мне понадобится спустя восемь лет. Я все ещё боюсь засыпать до рассвета, двести двадцать пять дней не встаёт солнце.\n" +
      "Полощу рот водой, обратно выплевываю мировую историю.\n" +
      "Голоса в голове перепутались с настоящими, половину выдумываю, что такое на самом деле я уже давно не знаю, как-то размазало по реальности пятном краски, незаконченным мазком внутри с пробелами\n" +
      "Судья был пауком. Приговор «ваша карта отклонена попробуйте другую». Да, сейчас, достаю контурные, океанов, религий.\n" +
      "Все решается очень легко, вообще никаких проблем не существует.    ",
    image: "oct31",
  },
  {
    id: 13,
    noteName: "наома4таж",
    noteText:
      "лабиринт из лабиринтов\n" +
      "я исследую комнату за комнатой\n" +
      "открываю двери\n" +
      "закрываю глаза\n" +
      "\n" +
      "-о, это ты\n" +
      "-да, это я\n" +
      "-Постойте! Ой! Дайте\n" +
      "этому парню нужно\n" +
      "выпить виски\n" +
      "-о да, мне нужно\n" +
      "-дайте виски этому парню\n" +
      "-давайте\n" +
      "\n" +
      "я выпиваю виски\n" +
      "виски́\n" +
      "я открываю двери\n" +
      "закрываю двери\n" +
      "бывают в жизни совпадения\n" +
      "\n" +
      "-я думал ты умер\n" +
      "-нет, осколком задело\n" +
      "\n" +
      "ох уж эти заколки\n" +
      "наколки\n" +
      "закаулки\n" +
      "\n" +
      "-я сейчас сделаю сальто!\n" +
      "-а можно я просто тебя обниму\n" +
      "\n" +
      "Еда для всех и даром просто на здоровье\n" +
      "всем делиться с ближним\n" +
      "с дальним?\n" +
      "расстояние это иллюзия. иллюзия тоже иллюзия\n" +
      "кто кого придумал \n" +
      "\n" +
      "-я недавно придумал\n" +
      "-не придумывай\n" +
      "-выпить водки\n" +
      "-а это отличная идея\n" +
      "\n" +
      "конвертирую идеи в иронию\n" +
      "выгодная сделка\n" +
      "\n" +
      "-давай делать то что нельзя\n" +
      "-а если нас поймают?\n" +
      "-когда не спрашиваешь всегда разрешают\n" +
      "\n" +
      "мы не спрашиваем, нам всегда разрешают\n" +
      "\n" +
      "-ну в перспективе мы все мертвы\n" +
      "-да я думаю смысл в том что когда ты родился обязательно потом нужно умереть\n" +
      "-ага\n" +
      "-а знаешь что гусеница в коконе превращается в суп имея лишь одну клетку которая превращает суп в бабочку и тогда она становится из супа бабочкой\n" +
      "-нам всем нужно научиться у бабочек\n" +
      "    ",
    image: "bt02",
  },
  {
    id: 14,
    noteName: "Бтb4 Молоко",
    noteText:
      "Отказываюсь от выживания. Никому не нравится смотреть на представителя своего вида, не пытающегося выжить. Это лишает наблюдающих возможности защищаться. Иррациональность. Быть человеком для меня не стыдно, а для вас? Отказ от выживания как определяющая черта возможностей человека. Мне кажется это самое достойное, на что способны, самая большая борьба нам дозволенная это неборьба. Меня выталкивает на поверхность воды. Я такой легкий что всплываю и начинаю взлетать из ванной. В моем гороскопе такого не было. Все время какие то проблемы с помыться у меня. А у помыться, вероятно, есть проблемы со мной. Но я и помыться - мы давние друзья. Мы вместе решим наши проблемы, ведь мы настоящие друзья. А даже если и не вместе, все равно. Друзья никогда не уходят, пока ты сам не уйдешь. Мне кажется, у меня слишком мало друзей. Или слишком много. Так или иначе, это не имеет значения, если значения глобальны только в пределах одной черепной коробки. -Выглядишь неважно. Что то произошло? -Ты почему так долго не звонил? Я же волнуюсь -Нужно как то самому Сам себе я. Никуда не гожусь, только в собеседники и в соблюдатели. Блюсти мир вокруг и делать заметки. Что еще хотеть от жизни? Я сел не в ту лодку, меня укачивает… Я засыпаю, а когда просыпаюсь не могу вспомнить. О чем таком я думал? Кажется, мне снился кошмар. Через 15 минут я забуду детали. Так что можно их не записывать и тогда их считай никогда не было. Со мной так же. Если меня не записать я тут же уплыву в бесконечном потоке, сбиваясь о скопления света растянусь расплывусь по вселенной и из следов останется только белая дымка. Это молоко.",
    image: "bt03",
  },
  {
    id: 15,
    noteName: "воскресенье, 4 декабря, 22:03 Харьков",
    noteText:
      "Я в харькове. Почему я здесь? Это то что меня все спрашивают. Правда мне нечего им ответить, ведь я сам не знаю. Да и какая разница? Вероятность что в тебя попадут ракетой в моем государстве приблизительно равна для любого города. Справедливо будет заметить что “здесь” не как везде. Везде не как везде, это тоже верно. Только это место более странно чем обычно места бывают. Это особое место. Раньше я мало знал о таком городе, но вот что мне удалось узнать за 7 дней в Харькове. То есть очень чистый, очень культурный, красивый город. Похож на Питер. Харьковчане его очень любят. В нем красивые станции метро, в центре почти все дома исторические. Интересно как в Харькове сохранились коммунальные квартиры. На моей улице почти все дома коммуналки. Я тоже живу в ней. Коммуна это 1 подьезд в котором два верхних этажа располагают каждый по квартире приблизительно на восемь комнат. Было странно ехать в Х. В новостях только про него и писали каждый день в начале. В моем вагоне в какой то момент остался только я и еще один парень. Никто не едет в Харьков. У нас был длинный диалог, он боялся что парней не выпускают с вокзала.\n" +
      "Ко мне в поезд по пути в 2 садилась знакомая девушка. Странная встреча в этом пустом поезде. Договорились приехать и написать близким отложенным сообщением прощальную записку на случай если в нас попадет ракета.\n" +
      "Когда я ступил за порог комуны нас встретил парень с автоматом и девушка с борщем. Уютно. Парень, его зовут Воля, он похож на чегевару и уже уехал на передок. Как то раз мы были в его комнате я играл на синтезаторе странную музыку. Он выставил автомат к единственной в комнате лампе дулом вверх и сказал:\n" +
      "-Вот так еще автомат поставить чтоб понятно было что война и вообще сюр.\n" +
      "Правда - абсурд. Я уже видел центр. Место это привело меня к мысли об антисмысле. Одни люди строят город. Другие его разрушают. Старые дома без крыш, забитые входы  досками, окна стекла рассыпались. Забитые улицы ракетами. Антисмысл. Множество экзестенциальных вопросов возникает в голове во время прогулки по бывшей столице Украины. Экзестенциальные вопросы написаны на лицах прохожих. В автобусе бесплатный проезд, как и во всем транспорте. Метро всегда открыто. Только что началась тревога, пока я писал про метро. Может пойти в метро?\n" +
      "Говорят если город в прифронтовой зоне, ракеты прилетают перед тревогой. Мне нет разницы, правда. А что? Здорово они отыгрались. Выпустили злобу. Или что они вообще сделали? Антисмысл. Разрушили город.Город возвели что бы в нем жить, а сейчас в нем можно умереть. Надеюсь мне не пригодятся отложенные сообщения, ведь я их не написал.",
    image: "bt06",
  },
  {
    id: 16,
    noteName: "Бт/ СОН",
    noteText:
      "Дурацкие сны приходят в большом количестве. Я очень долго спал. Мне понравилось. Во сне не думаешь, а только смотришь. Мне снится разное. Сегодня снились известные художники. Не лучшая моя компания, но из сна, из моего сна, сложно совершить побег. И все лучше трезвости. Сухая реальность порой слишком сушит губы. Губы трескаются. А сон, он как белый, как озеро в тумане. Теплый, приятно обволакивающий. Ничего не нужно делать, только ему отдаться. Он жидкий, в ладони ускользает сквозь пальцы. Сон теплым парным молоком плавно перетекает из небесных тел в мою голову и обратно. Жаль я не кот, все время бы лежать и лишь иногда вставать ото сна, делать парочку кошачьих дел и обратно. В другой сказочный мир.\n" +
      "Когда то у меня был период, где я жил во сне. Череда связанных между собой сновидений увлекла меня. Промежутки светового дня тогда были лишь перерывами в главной части. Я долго томился по своим делам, которые меня ничуть не интересовали. Но я никому не выдавал свой секрет. Спокойно и терпеливо я ждал, пока мир на моей половине опустится в ночь. Тогда уж я уходил спать. и попадал туда. В СОН.",
    image: "bt05",
  },
  {
    id: 17,
    noteName: "лес самоубийств",
    noteText:
      "куда пойти гулять сегодня пойду в лес там большие деревья и деревья по меньше они классные ребята очень уравновешенные им от жизни много не надо и вообще они воздухом не жадничают днем и ночью трудятся чтоб живое жило чтоб каждая букашка могла полные легкие набрать кислорода воздух всем и даром эти ребята они хоть и вертикальные но все таки коммунисты но не определяют себя и даже не эти центристы они просто через себя пропускают жизнь из себя доставая воздух",
    image: "bt04",
  },
  {
    id: 18,
    noteName: "мюсли",
    noteText:
      "  какой смысл смысла? примерно как и у всего другого. я прячу голову в подушку.\n" +
      "\n" +
      "-эй, чья тут голова в подушке?\n" +
      "-не моя\n" +
      "\n" +
      "я отворачиваюсь от мира. сказал бы что и он тоже, но он отвернулся уже давно. совсем ничего  нет. только болят зубы и еще эта глухая бессмысленная тоска. она похожа на поле пшеницы.\n" +
      "\n" +
      "-зачем мы сидим в этом теле? могли бы пойти куда нибудь еще. уверен, есть места поинтереснее. каков смысл нашего здесь пребывания? это тесное больное тело… выглядит уныло. может к новому году его как нибудь украсим? давай повесим цветную гирлянду! или лучше…\n" +
      "\n" +
      "разговор с самим собой. мой собеседник ужасен. порой мне так надоедает, что мне приходится его заткнуть. выгоняю его за дверь. белый шум в голове, всяко лучше слов обреченных на бессмыслицу.\n" +
      "я поднимаю свое тело, переставляю ноги, левая, правая, левая… вот, получается куда то идти. я иду и в этом весь смысл. не могу даже представить чтоб его  было больше чем при ходьбе. весь смысл людей в ходьбе, говорю я.\n" +
      "Homo Sapiens Sapiens\n" +
      "человек умный прямоходящий.\n" +
      "сколько можно еще? мне надоело. тут сплошь круг. много кругов. это круги порока. завтра снова проснусь и напишу текст, русский снова запустит ракету которая снова в меня не попадет. вокруг умирают люди которые хотели бы жить. вместо меня. мне просто показывают смерть.\n" +
      "\n" +
      "-этих ракетой убили, этих тоже, а его пулей\n" +
      "\n" +
      "если я возьму пистолет и выстрелю себе в голову ничего не произойдет. мне все равно все равно. я и заживо бываю мертвым. только всякие ограничения мешают жить. на сон например. а самое смешное? на передвижение. это абсурдно для меня что они выдумали границы и я не могу просто идти куда мне захочется.\n" +
      "\n" +
      "Homo Sapiens Sapiens\n" +
      "\n" +
      "люди это антисмысловая загадка. чтобы ее разгадать мне придется найти пистолет. хорошо, теперь вставить обойму. затвор, дослать патрон. этот механизм не так уж плох. лучше всего стрелять в височную долю. я спускаю курок. просыпаюсь.\n" +
      "какой смысл смысла? примерно как и у всего другого. я прячу голову в подушку.",
    image: "bt13",
  },
];

const imageMap = {
  btminus4: btminus4,
  bt1: bt1,
  bt2: bt2,
  btminus1: btminus1,
  btminus2: btminus2,
  btminus3: btminus3,
};

const HomePage = () => {
  const [notes, setNotes] = useState(mock);
  const [showButton, setShowButton] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null);

  const fetchData = async () => {
    // const noteList = await axios.get("http://localhost:8080/service");
    // setNotes(noteList.data[0]);
    setNotes(mock);
    setShowButton(false);
  };

  const Modal = ({ noteName, noteText, imageNote, closeModal }) => {
    useEffect(() => {
      const modalContent = document.querySelector(".modal-content");
      if (modalContent && modalContent.scrollHeight) {
        setModalMaxHeight(".modal-content");
      }
    }, [noteText]);

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="flex items-center justify-between py-2 mb-4 border-b">
            <div className="text-gray-800 text-lg font-bold">{noteName}</div>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={closeModal}
            >
              Закрыть
            </button>
          </div>
          <div className=" text-base ">{noteText}</div>
        </div>
      </div>
    );
  };

  const closeModal = () => {
    setSelectedNote(null);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const LeftSidebar = () => {
    return (
      <>
        {!showButton && (
          <div className="flex flex-col">
            <ul className="flex lg:flex-col flex-wrap gap-3">
              {notes.map((note) => (
                <li
                  key={note.id}
                  onClick={() => handleNoteClick(note)}
                  className={`${
                    note === selectedNote ? " font-bold " : ""
                  } cursor-pointer border p-2 rounded-lg bg-gray-50 lg:bg-transparent lg:p-0 lg:border-none `}
                >
                  {note.noteName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };

  const RigthSidebar = () => {
    return (
      <>
        {selectedNote && (
          <img
            src={imageMap[selectedNote.image]}
            alt="base"
            className="note-image"
          />
        )}
      </>
    );
  };

  const Center = () => {
    return (
      <>
        {!selectedNote && (
          <div className="flex flex-col gap-7 items-center justify-center h-full">
            <h2 className="text-xl font-semibold text-center">
              бессмысленный текст, безымянный, безумный текст, бесполезный
              текст, бессловесный, багровый текст, бывалый, бездомный текст,
              безосудительный текст, больной, белый, балет, берлога, Бостон,
              биполярный, быдло
            </h2>

            <div>
              {showButton && (
                <button
                  className="px-6 py-4 bg-black text-white"
                  onClick={fetchData}
                >
                  Открыть заметки
                </button>
              )}
            </div>
          </div>
        )}

        {selectedNote && (
          <Modal
            noteName={selectedNote.noteName}
            noteText={selectedNote.noteText}
            closeModal={closeModal}
          />
        )}
      </>
    );
  };

  return (
    <div>
      <Navbar />
      <Layout leftSide={LeftSidebar} rightSide={RigthSidebar} center={Center} />
      {showButton && (
        <div>
          <img src={lefthand} alt="base" className="lefthand-image" />
          <img src={righthand} alt="base" className="righthand-image" />
        </div>
      )}
    </div>
  );
};

export default HomePage;
