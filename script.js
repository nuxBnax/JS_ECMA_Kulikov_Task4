// Задание 1

// async function getUserData(id) {
// 	const url = '...';
// 	const response = await fetch(url);
// 	if (!response.ok) {
// 		throw new Error('Ошибка со стороны сервера')ж
// 	}
// 	const result = response.json();
// 	result.then((data) => {
// 		if(!data.id) {
// 			throw new Error(`Пользователя с таким ${data.id} не существует`)
// 		}
// 		return data.parse();
// 	})
// }

// Задание 2

// async function saveUserData(userData) {
// 	const url = '...';
// 	const response = await fetch(url);
// 	if (!response.ok) {
// 		throw new Error('Ошибка со стороны сервера');
// 	};

// }




// const user = {
// 	"name": "John Doe",
// 	"job": "unknown"
// };

// saveUserData(user).then(() => {
// 	console.log('user data saved successfully');
// 	.catch(error => console.log(error.message));
// })



// Задание 3

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