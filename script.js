const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answerArr = [
	"Spróbuj później",
	"Spróbuj ponownie",
	"Nie mam opinii",
	"To twoje przeznaczenie",
	"Kości zostały rzucone ",
	"Jedna szansa z dwóch",
	"Zadaj pytanie ponownie",
	"Moim zdaniem tak",
	"Na pewno",
	"Tak, absolutnie",
	"Możesz na to liczyć",
	"Bez wątpienia",
	"Bardzo prawdopodobne",
	"Tak",
	"Na dobry początek",
	"To wątpliwe",
	"Mało prawdopodobne",
	"Nie śnij",
	"Nie licz",
	"Niemożliwy",
];

const shakeBall = () => {
	ball.classList.add("shake-animation");
	setTimeout(checkInput, 1000)
};

const checkInput = () => {
	if (input.value !== "" && input.value.slice(-1) === "?") {
		generateAnswer();
		error.textContent = "";
	} else if (input.value !== "" && input.value.slice(-1) !== "?") {
		error.textContent = "Pytania z reguły zakończone są pytajnikiem ;)";
		answer.textContent = "";
	} else {
		error.textContent = "Muszisz zadać pytanie.";
		answer.textContent = "";
	}
	ball.classList.remove("shake-animation");
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 19);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`;
};

ball.addEventListener("click", shakeBall);
