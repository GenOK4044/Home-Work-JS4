 var app = {
 	createElement: function(params) {   /*создаем метод для создания елемента*/
 		var element = document.createElement(params.tagName);

 		if (params.inputType) {  /*если создаем параметр с тегом инпут (т.е. кнопка)-то добавляем метод обьекта inputType*/
 			element.setAttribute('type', params.inputType);
 		};

 		if (params.tagName === 'input')	{  /*если кнопка - добавляем атрибут value (проверить мои результаты)*/
			element.setAttribute('value', params.value)
		}

 		if (params.className) {
 			element.className = params.className;
 		}
 		if (params.content) {
 			element.innerHTML = params.content;
 		}
 		

 		if (params.parentElement) {
 			params.parentElement.appendChild(element);
 		}


 		return element;
 	},
 	generateQuations: function (quationsAmount, answersAmount) {  /*генерируем вопросы и ответы(в скобках количество вопросов и количество ответов в каждом вопросе)*/
 		
 		for (var i = 0; i < quationsAmount; i++) {  /*цыклом создаем quationsAmount штук вопросов*/
 		

 			this.createElement({  /*параметры вопросов*/
 				tagName: 'h2',
 				content: 'Вопрос №' + (i + 1),
 				parentElement: form,
 			});


 			for (var j = 0; j < answersAmount; j++) {  /*цыклом создаем answersAmount штук ответов к каждому вопросу*/

 			var label = this.createElement({  /*параметры ответов*/
 				tagName: 'label',
 				content: 'Вариант ответа №' + (j + 1),
 				parentElement: form,
 			});


			var checkbox = this.createElement({  
 				tagName: 'input',
 				inputType: 'checkbox'
 			});

			label.insertAdjacentElement('afterBegin', checkbox); /*вставляем чекбокс перед лейблом*/
 			}
 		};
 	}
 }



  var body = document.querySelector('body');  /*заходим в боди*/

 app.createElement({
 	tagName: "h1",
 	className: "title",
 	content: "Тест по программированию",
 	parentElement: body
 }); 

 var form = app.createElement({
 	tagName: "form",
 	className: 'wrapper',
 	parentElement: body
 });


app.generateQuations(3, 3);


 app.createElement({
 	tagName: "input",
 	inputType: "submit",
 	className: "results",
 	value: "Проверить мои результаты",
 	parentElement: form
 });
