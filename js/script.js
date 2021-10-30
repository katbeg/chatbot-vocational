let categoryNow = 0,
	questionNow = -1,
	consAnswer = '',
	goToNextCategory = false;

let categories = [
	{category_name: 'frontend', prior: 0, result: 0, title: 'К&nbsp;интерфейсам с&nbsp;любовью', text: 'Ммм... чувствуются задатки frontend-разработчика. Любишь делать задачи не&nbsp;откладывая в&nbsp;долгий ящик и&nbsp;работать на&nbsp;результат? С&nbsp;таким подходом к&nbsp;жизни ты освоишь всё! А&nbsp;JavaScript очень быстро станет как родной. Не&nbsp;сомневайся&nbsp;— дерзай, и&nbsp;всё получится!', link: 'https://itgirlschool.ru/profession-frontend'},
	{category_name: 'mobile', prior: 1, result: 0, title: 'Будущее программирования', text: 'Мир меняется очень быстро, и&nbsp;ты прекрасно это понимаешь. Держать руку на&nbsp;пульсе, постоянно развиваться, быть гибкой&nbsp;— не&nbsp;просто слова, а&nbsp;твой стиль жизни. Всё это отлично поможет в&nbsp;освоении прогрессивной мобильной разработки. Дерзай, и&nbsp;всё получится!', link: 'https://itgirlschool.ru/profession-mobile'},
	{category_name: 'gamedev', prior: 5, result: 0, title: 'Создательница миров', text: 'Все говорят, что пора вырасти и&nbsp;стать более серьёзной? Ты можешь утереть им нос&nbsp;— иди в&nbsp;gamedev-разработку. Потому что компьютерные игры&nbsp;— это любовь на&nbsp;всю жизнь! И&nbsp;считать их детскими в&nbsp;наши дни&nbsp;— значит недооценивать. Одни обучающие возможности чего стоят! Ну, ты понимаешь.', link: 'https://itgirlschool.ru/profession-gamedev'},
	{category_name: 'backend', prior: 3, result: 0, title: 'Серый кардинал', text: 'Творить добро и&nbsp;при&nbsp;этом оставаться немного в&nbsp;тени&nbsp;— вот миссия backend-разработчика. Не&nbsp;любишь тратить время на&nbsp;наведение лоска? Тебе важнее, как работает сайт, а&nbsp;не&nbsp;как он выглядит? Обожаешь погружаться в&nbsp;бизнес-процессы? Если ты ответила три раза «да»&nbsp;— можно смело осваивать новую профессию.', link: 'https://itgirlschool.ru/profession-backend'},
	{category_name: 'data', prior: 2, result: 0, title: 'Богиня<br>аналитики', text: 'Находить простые и&nbsp;изящные решения задач, мастерски справляться с&nbsp;огромным потоком информации, верно прогнозировать результат&nbsp;— всё это про&nbsp;тебя. Поэтому обрати внимание на&nbsp;Data&nbsp;Science. Ты наверняка будешь чувствовать себя великолепно, работая в&nbsp;этом перспективном направлении!', link: 'https://itgirlschool.ru/profession-datascience'},
	{category_name: 'iot', prior: 4, result: 0, title: 'IT-архитектор', text: 'Когда речь заходит об&nbsp;IT, мало кто говорит о&nbsp;таком направлении, как IoT-архитектура. Но я считаю, что тебе нужно обратить на&nbsp;него внимание. Именно IoT-архитектор решает, как организовать сбор данных от&nbsp;умных устройств, как их обработать, классифицировать и&nbsp;проанализировать. Настоящая профессия будущего! Попробуй.', link: 'https://itgirlschool.ru/profession-ut'},
	{category_name: 'test', prior: 6, result: 0, title: 'Мисс Внимание', text: 'Считается, что тестирование&nbsp;— самый простой вход в&nbsp;IT. Но нужно быть готовой к&nbsp;монотонной работе, внимательной к&nbsp;деталям и&nbsp;очень терпеливой. Такая работа не&nbsp;для&nbsp;всех, но тебе она может подойти. Ты сумеешь найти все ошибки до&nbsp;запуска продукта, ведь твой любимый вопрос: «А&nbsp;что будет, если...?». Дерзай!', link: 'https://itgirlschool.ru/profession-testing'},
	{category_name: 'pm', prior: 7, result: 0, title: 'На тебе всё держится', text: 'Программирование&nbsp;— это хорошо, но без&nbsp;продакт-менеджера все разработки так и&nbsp;останутся разработками. Генерирование идей, организация работы команды и,&nbsp;конечно, ошеломительный запуск IT-продуктов! Очень интересная и&nbsp;динамичная профессия. Это твоё&nbsp;— не&nbsp;сомневайся! Уверена, ты найдёшь подход к&nbsp;каждому&nbsp;:)', link: 'https://itgirlschool.ru/profession-project'},
	{category_name: 'design', prior: 8, result: 0, title: 'На стиле', text: 'Стильный дизайн — это половина успеха сайта или приложения. Ты видишь красоту вокруг и&nbsp;умеешь её создавать, у&nbsp;тебя есть талант к&nbsp;рисованию&nbsp;— пора это монетизировать! Думаю, твоё направление&nbsp;— веб-дизайн. Заниматься творчеством в&nbsp;IT, выбирать нужный оттенок для&nbsp;каждого элемента&nbsp;— что может быть прекраснее?', link: 'https://itgirlschool.ru/profession-designer'},
	{category_name: 'nothing', prior: 100, result: 0, title: 'Нужно подумать...', text: 'Увы, я не&nbsp;смогла подобрать тебе направление. Возможно, твоё предназначение скрывается в&nbsp;другой сфере. Популярный ответ не&nbsp;всегда правильный. Прислушайся к&nbsp;себе: все ответы внутри. Уверена, ты найдёшь дело по&nbsp;душе!', link: ''}
];

const questionsTree = [
	{
		category: 'frontend',
		question: [
			{
				qustion: 'Оцени своё терпение, где: 0&nbsp;— нетерпеливая, а&nbsp;1&nbsp;— «терпения мне не&nbsp;занимать».',
				answers: ['1', '0'],
				cons_answers: ['', '']
			},
			{
				qustion: 'Ты зашла на сайт пошопиться, но... ядовитые цвета на&nbsp;баннерах, плохо читаемый шрифт, слишком маленькие или, наоборот, большие кнопки. Сделаешь заказ?',
				answers: ['Нет', 'Да. Главное, чтобы там было то, что мне нужно'],
				cons_answers: ['Понимаю :) От такого захочется не&nbsp;просто сайт&nbsp;— браузер закрыть. И&nbsp;перекреститься на&nbsp;всякий случай&nbsp;🙈😅', 'Иногда можно закрыть глаза на&nbsp;плохой дизайн. Особенно если альтернативы нет. Целеустремлённость&nbsp;— это важное качество!']
			},
			{
				qustion: 'Хотела бы поменять свой компьютер?',
				answers: ['Нет. Он идеальный&nbsp;— мощный и&nbsp;красивый', 'О&nbsp;да! Тянет только простые программки&nbsp;😫'],
				cons_answers: ['👍🏻 С таким ресурсом любая программа по&nbsp;плечу!', 'Начать программировать в&nbsp;некоторых направлениях можно даже на&nbsp;простой технике. Со&nbsp;временем появятся средства на&nbsp;модель пошустрее&nbsp;😎']
			}
		]
		
	},
	{
		category: 'mobile',
		question: [
			{
				qustion: 'Когда ты последний раз меняла смартфон?',
				answers: ['В этом году: люблю мощную современную технику', 'Года три назад... Не&nbsp;виснет&nbsp;— и&nbsp;хорошо'],
				cons_answers: ['Прекрасно тебя понимаю. Возможности современных технологий поражают воображение, хочется испытать каждое новшество&nbsp;:)', 'Разумное потребление&nbsp;— это здорово&nbsp;👍🏻']
			},
			{
				qustion: 'Тебе важно, чтобы результат твоей работы был внешне привлекательным?',
				answers: ['Да, конечно', 'Нет. Главное, чтобы внутри процессов всё было идеально'],
				cons_answers: ['Красота — это всегда +100 баллов к&nbsp;успеху проекта. Ведь сначала пользователь видит продукт (сайт, приложение и&nbsp;т.&nbsp;д.), первое впечатление чаще всего имеет решающее значение.', 'Чувствуется основательный подход к&nbsp;делу! Ведь если, несмотря на&nbsp;внешнюю красоту, внутри много недоделок и&nbsp;ошибок&nbsp;— лавины отрицательных отзывов не&nbsp;избежать.']
			},
			{
				qustion: 'Ты спринтер или скорее марафонец: любишь, когда результат быстро становится заметен, или предпочитаешь длительные проекты?',
				answers: ['Люблю короткие дистанции. Результат мотивирует!', 'Мне без&nbsp;разницы, люблю процесс'],
				cons_answers: ['Приятно любоваться результатом своих трудов, как ни&nbsp;крути&nbsp;🏆', 'Чувствуется философский подход к&nbsp;жизни и&nbsp;работе. Не&nbsp;каждый может наслаждаться дорогой к&nbsp;цели, классное качество!']
			}
		]
		
	},
	{
		category: 'gamedev',
		question: [
			{
				qustion: 'У тебя мощный компьютер?',
				answers: ['Да. Мне это важно 👍', 'Нет, пока нет возможности приобрести такой'],
				cons_answers: ['', 'Спасибо за честный ответ!']
			},
			{
				qustion: '"Я могу и хочу работать 24 часа в сутки с горящими глазами"&nbsp;— это про&nbsp;тебя?',
				answers: ['Да, я готова!', 'Нет, мне хочется иметь больше свободного времени на&nbsp;себя или свою семью'],
				cons_answers: ['Твой горизонт возможностей расширяется 🚀', 'Вопрос был не&nbsp;совсем корректный, но для&nbsp;некоторых направлений важно иметь возможность работать 24/7.']
			},
			{
				qustion: 'Любишь компьютерные игры?',
				answers: ['О да-а-а!', 'Нет'],
				cons_answers: ['Я тоже, но стараюсь не&nbsp;увлекаться :)', 'Это не&nbsp;хорошо и&nbsp;не&nbsp;плохо :) И&nbsp;совсем необязательно для&nbsp;работы в&nbsp;IT. Продолжим!']
			}
		]
		
	},
	{
		category: 'backend',
		question: [
			{
				qustion: 'Что-куда-откуда-зачем: признавайся, любишь разбираться в&nbsp;данных и&nbsp;хитросплетениях их связей?',
				answers: ['Да. Люблю, чтобы всё было логично и&nbsp;работало', 'Кажется, это скучно'],
				cons_answers: ['😍 Какой это кайф&nbsp;— видеть, как всё работает так, как ты задумала!', 'Здорово понимать, что по&nbsp;душе, а&nbsp;что нет. Это помогает не&nbsp;отвлекаться&nbsp;:)']
			}
		]
		
	},
	{
		category: 'data',
		question: [
			{
				qustion: 'Искусственный интеллект обсуждают всё чаще. А как ты относишься к&nbsp;этой технологии?',
				answers: ['За ним будущее! Было&nbsp;бы неплохо в&nbsp;этом разбираться', 'С&nbsp;опаской'],
				cons_answers: ['Так-так-так! Я уже почти знаю, что тебе предложить&nbsp;😍', 'Интересно было&nbsp;бы узнать почему? Как-нибудь поболтаем на&nbsp;эту тему&nbsp;😉']
			},
			{
				qustion: 'Кстати! А как у&nbsp;тебя с&nbsp;математикой?',
				answers: ['Один из&nbsp;любимых предметов в&nbsp;школе и&nbsp;универе', 'Не&nbsp;очень'],
				cons_answers: ['Вот это я понимаю! Сама обожала щёлкать задачки и&nbsp;решать уравнения.', 'Хорошие новости&nbsp;— и&nbsp;без&nbsp;неё можно работать в&nbsp;IT. Мне за&nbsp;всё время работы она пригодилась меньше десяти раз, кажется.']
			},
			{
				qustion: 'Брать огромный массив данных, анализировать его и&nbsp;создавать модель для&nbsp;решения бизнес-задач&nbsp;— работа мечты или нет?',
				answers: ['Да, нравится такое', 'Точно нет'],
				cons_answers: ['Дорогу смелым! Такие сотрудники&nbsp;— на&nbsp;вес золота в&nbsp;IT-компаниях.', 'Бывает🙃 Для&nbsp;многих это выглядит скучно.']
			}
		]
		
	},
	{
		category: 'iot',
		question: [
			{
				qustion: 'Ты любишь разбирать по&nbsp;частям механизмы, узнавать, что с&nbsp;чем и&nbsp;из&nbsp;чего сделано? Другими словами: как ты относишься к&nbsp;«железу»?',
				answers: ['Обожаю!', 'Никак'],
				cons_answers: ['Кажется, я знаю, что тебе предложить&nbsp;😍', 'Это на&nbsp;любителя, согласна. И&nbsp;необязательно для&nbsp;многих IT-профессий&nbsp; :)']
			},
			{
				qustion: 'У тебя есть возможность финансово вкладываться в&nbsp;своё обучение?',
				answers: ['Да', 'Нет'],
				cons_answers: ['Твой горизонт возможностей расширяется&nbsp;🚀 Да, много информации есть в&nbsp;открытом доступе. Но при&nbsp;прохождении курса легче поддерживать дисциплину и&nbsp;мотивацию в&nbsp;компании единомышленниц.', 'Не проблема! Есть бесплатные ресурсы, на&nbsp;которых можно найти уроки по&nbsp;программированию и&nbsp;не&nbsp;только. Главное запастись мотивацией&nbsp;:)']
			}
		]
		
	},
	{
		category: 'test',
		question: [
			{
				qustion: 'Монотонная работа, требующая внимания к&nbsp;мельчайшим деталям,&nbsp;— это к&nbsp;тебе?',
				answers: ['Да', 'Точно нет!'],
				cons_answers: ['Восхищаюсь такими людьми! Такая скрупулёзность помогает избежать многих ошибок.', 'Любишь видеть картину в&nbsp;целом и&nbsp;действовать сразу&nbsp;— с&nbsp;тобой нескучно!']
			}
		]
		
	},
	{
		category: 'pm',
		question: [
			{
				qustion: 'Нужно сделать серию телефонных звонков или заговорить с&nbsp;незнакомцем, а&nbsp;для&nbsp;этого нужны навыки коммуникации. Как у&nbsp;тебя с&nbsp;ними&nbsp;— умеешь ладить с&nbsp;людьми?',
				answers: ['Да, без проблем нахожу общий язык и&nbsp;начинаю общение', 'А можно я письмо или сообщение напишу?'],
				cons_answers: ['Это отличный soft skill! И&nbsp;весьма полезный. Навык коммуникации ценится в&nbsp;IT-командах, потому что в&nbsp;большинстве своём программисты&nbsp;— люди замкнутые&nbsp;:)', 'Можно и&nbsp;так&nbsp;:) Главное&nbsp;— чтобы человек был хороший&nbsp;:) То, как ты выполняешь свою работу, намного важнее!']
			},
			{
				qustion: 'Не терпишь бардака и&nbsp;везде наводишь порядок, а&nbsp;если тебя оставить одну, придумаешь внятную структуру и&nbsp;организуешь все процессы?',
				answers: ['Да', 'Нет, я богиня хаоса!&nbsp;😈'],
				cons_answers: ['Снимаю шляпу! Видеть возможности улучшения процессов и&nbsp;структур&nbsp;— это что-то невероятное.', 'Ха! Ориентироваться внутри путаницы&nbsp;— это не&nbsp;шутки, а&nbsp;в&nbsp;своей путанице ты даже иголку способна найти&nbsp;:)']
			}
		]
		
	},
	{
		category: 'design',
		question: [
			{
				qustion: 'Любишь и умеешь рисовать?',
				answers: ['Да', 'Нет'],
				cons_answers: ['При чём тут IT? Расскажу чуть позже&nbsp;😉', 'Хорошо, значит, этот вариант предлагать не&nbsp;буду. Мы всё ближе к&nbsp;результату!']
			},
			{
				qustion: 'Эстетика и&nbsp;красота для&nbsp;тебя не&nbsp;пустой звук. Ты способна отличить салатовый от&nbsp;зелёного, а&nbsp;персиковый от&nbsp;фуксии. Это про&nbsp;тебя?',
				answers: ['Да!', 'Вообще нет😅'],
				cons_answers: ['Так и запишем&nbsp;🖌', 'В&nbsp;IT есть направления, где это совершенно неважно. Чем лучше ты знаешь себя, тем проще сделать выбор&nbsp;😎']
			}
		]
		
	}
];

$(document).ready(function(){

	$(document).on('click', '.chat-answer__inner', function(){
		$('.chat-answers').addClass('disabled');

		let buttonText = $(this).html(),
			ansIndex = $(this).parents('.chat-answer').index();

		if (ansIndex == 1) {
			goToNextCategory = true;
		} else {
			goToNextCategory = false;
			if (!$('.chat-answers').hasClass('chat-answers__single')) categories[categoryNow].result++;
		}

		$('.chat-answers').fadeOut(100, function(){
			$('.chat').removeClass('start');

			$('.chat-dialog').append('<div class="chat-message chat-message__me"><div class="chat-message__bubble"><div class="chat-message__text">' + buttonText + '</div><div class="chat-message__date">Сегодня <span class="time">' + getTimeString() + '</span></div></div></div>');

			setTimeout(function(){
				$('.chat-dialog').append('<div class="chat-message chat-message__consultant chat-message__typing"><div class="chat-message__bubble"><div class="typing-animation"><i></i><i></i><i></i>Анна печатает</div></div></div>');
				$(window).scrollTop($('.chat').outerHeight());

				if (questionNow > -1) {
					consAnswer = questionsTree[categoryNow].question[questionNow].cons_answers[ansIndex];
				} else {
					consAnswer = 'Отлично, поехали! 🚀';
				}
				if (consAnswer != '') {
					setTimeout(function(){
						$('.chat-message__typing').removeClass('chat-message__typing').find('.chat-message__bubble').html('<div class="chat-message__text">' + consAnswer + '</div><div class="chat-message__date">Сегодня <span class="time">' + getTimeString() + '</span></div>');

						$('.chat-dialog').append('<div class="chat-message chat-message__consultant chat-message__typing"><div class="chat-message__bubble"><div class="typing-animation"><i></i><i></i><i></i>Анна печатает</div></div></div>');
						$(window).scrollTop($('.chat').outerHeight());
						setTimeout(showNextQuestion, 1000);
					}, 1000);
				} else {
					setTimeout(showNextQuestion, 1000);
				}
			}, 500);
		});
	});
	
	$(document).on('click', '.share a', function(){
		var href = $(this).attr('href');
		
		var popupWidth = 700,
		popupHeight = 500,
		popupLeft = (window.screen.width - popupWidth) / 2,
		popupTop = (window.screen.height - popupHeight) / 2;
		var popup = window.open(href, '', 'width='+popupWidth+',height='+popupHeight+',left='+popupLeft+',top='+popupTop+'');
		
		return false;
	});
	
});

function getTimeString(){
	let timeNow = new Date(),
		hoursNow = timeNow.getHours().toString(),
		minutesNow = timeNow.getMinutes().toString();

	if (hoursNow.length < 2) hoursNow = '0' + hoursNow;
	if (minutesNow.length < 2) minutesNow = '0' + minutesNow;
	return hoursNow + ':' + minutesNow;
}

function showNextQuestion(){
	questionNow++;

	let categoryObj = questionsTree[categoryNow],
		consText = '',
		allDone = false;

	if (questionNow >= categoryObj.question.length || goToNextCategory) {
		categoryNow++;
		questionNow = 0;
		categoryObj = questionsTree[categoryNow];
		if (categoryNow >= questionsTree.length) allDone = true;
	}
	
	if (!allDone) {
		consText = questionsTree[categoryNow].question[questionNow].qustion;			

		$('.chat-message__typing').removeClass('chat-message__typing').find('.chat-message__bubble').html('<div class="chat-message__text">' + consText + '</div><div class="chat-message__date">Сегодня <span class="time">' + getTimeString() + '</span></div>');
		
		$('.chat-answers__bg').html('');
		$.each(questionsTree[categoryNow].question[questionNow].answers, function(index, value) {
			$('.chat-answers__bg').append('<div class="chat-answer"><button type="button" class="chat-answer__inner">' + value + '</button></div>');
		});
		
		$('.chat-answers').removeClass('chat-answers__single disabled').show();
		$(window).scrollTop($('.chat').outerHeight());
	} else {
		let winCategoryIndex,
			nothingChoose = true,
			resultsArray = [];

		$.each(categories, function(index, value){
			resultsArray.push(value.result);
			if (value.result > 0) {
				nothingChoose = false;
			}
		});
		//console.log(resultsArray);

		if (nothingChoose) {
			winCategoryIndex = questionsTree.length;
		} else {
			let maxResultVal = Math.max.apply(null, resultsArray),
				maxResultValCount = 0,
				maxResultCategoryArray = [],
				priorArray = [],
				maxPrior;
			
			$.each(resultsArray, function(index, value){
				if (value == maxResultVal) {
					maxResultValCount++;
					maxResultCategoryArray.push(index);
					priorArray.push(categories[index].prior);
				}
			});
			if (maxResultValCount > 1) {
				maxPrior = Math.min.apply(null, priorArray);
				winCategoryIndex = maxResultCategoryArray[priorArray.indexOf(maxPrior)];
			} else {
				winCategoryIndex = resultsArray.indexOf(maxResultVal);
			}
		}

		let resImgNum = winCategoryIndex + 1;
		if (nothingChoose) resImgNum = '0';

		let resultHtml = '<div class="chat-message__bubble"><div class="chat-message__creative"><div class="chat-message__image"><img src="img/result' + resImgNum + '.png" alt="' + categories[winCategoryIndex].title + '" /></div><div class="chat-message__title">' + categories[winCategoryIndex].title + '</div></div><div class="chat-message__text"><p>' + categories[winCategoryIndex].text + '</p>';

		if (!nothingChoose) {
			resultHtml += '<p><span class="blue">#ITGIRLSCHOOL</span> — онлайн-школа программирования для девушек. Помогаем обрести интересную востребованную профессию и обеспечить благополучное будущее.</p></div><div class="chat-message__button"><a href="' + categories[winCategoryIndex].link + '" class="button">Подробнее</a></div>';
		} else {
			resultHtml += '</div><div class="chat-message__button"><a href="' + categories[winCategoryIndex].link + '" class="button">Попробовать ещё раз</a></div>';
		}
		resultHtml += '</div>';

		$('.chat-message__typing').removeClass('chat-message__typing').addClass('chat-message__result').html(resultHtml);
		$('body').addClass('final');
		
		if ($('#mobile_detect').is(':hidden')) {
			$(window).scrollTop($('.chat').outerHeight());
		} else {
			setTimeout(function(){
				$(window).scrollTop($('.chat-message__result').offset().top - $('.header').outerHeight());
			}, 100);
		}
	}
	
}

function isTouchDevice(){
	/*return true;*/
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch(e) {
        return false;
    }
}