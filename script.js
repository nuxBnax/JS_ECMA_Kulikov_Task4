// Задание 1. Получение данных о пользователе.
// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.
// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
// Работа должна быть выполнена с API: https://reqres.in/

async function getUserData(ID) {

	const url = 'https://reqres.in/api/users/2';
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Ошибка со стороны сервера');
	}
	const result = response.json();

	result.then((item) => {
		if (item.data.id !== ID) {
			throw new Error(`Пользователя с ID:${ID} не существует`);
		}
		return console.log(item.data);
	}).catch((error) => {
		alert(`Ахтунг, ошибка ${error.message}`);
	})
}
getUserData(2);
// Задание 2. Отправка данных на сервер.
// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.
// *Подсказка *
// // Пример использования функции
// const user = {
//   "name": "John Doe",
//   "job": "unknown"
// };
// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
// Работа должна быть выполнена с API: https://reqres.in/


async function saveUserData(userData) {
	const url = 'https://reqres.in/api/users';
	let response = await fetch(url, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(userData)
	  });
	if (!response.ok) {
		throw new Error('Ошибка со стороны сервера');
	};
	let result = await response.json();
	console.log(result);
}



const user = {
	"name": "John Doe",
	"job": "unknown"
};
saveUserData(user)
	.then(() => {
		console.log('User data saved successfully');
	})
	.catch(error => {
		console.log(error.message);
	});



// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).
// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах)
// в качестве аргументов. Функция должнаизменить стиль (любой, например - цвет текста) элемента через указанное время.
// Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

function changeStyleDelayed(elemId, delay) {
	const myElem = document.getElementById(elemId);
	setTimeout(() => {

		myElem.style.backgroundColor = "green";
		myElem.style.color = "red";
		myElem.style.padding = "10px";
		myElem.style.border = "5px solid black";
		myElem.style.width = "300px";
		myElem.textContent = "БОЛЬШОЙ ПРИВЕТ :))";

	}, delay);
}
changeStyleDelayed('myElement', 2000);