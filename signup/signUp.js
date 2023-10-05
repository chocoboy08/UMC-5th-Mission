let username;
let nickname;
let email;
let password;
let check_password;
let message = document.querySelectorAll(".message");
let pattern1 = /[0-9]/;
let pattern2 = /[a-zA-Z]/;
let pattern3 = /[~!@#\#$%<>^&*]/;
let signup_button = document.querySelector(".signup_btn");
function handleInput(id) {
  const value = document.getElementById(id).value;
  console.log(value);
  switch (id) {
    case "name": {
      if (value == false) {
        message[0].classList.replace("correct", "error");
        message[0].innerText = "필수 입력 항목입니다!";
        username = undefined;
      } else {
        message[0].classList.replace("error", "correct");
        message[0].innerText = "멋진 이름이네요!";
        username = value;
      }

      break;
    }
    case "nickname": {
      if (value.length < 2 || value.length > 5) {
        message[1].classList.replace("correct", "error");
        message[1].innerText = "닉네임은 2 ~ 5글자로 구성해주세요!";
        nickname = undefined;
      } else {
        message[1].classList.replace("error", "correct");
        message[1].innerText = "멋진 닉네임이군요!";
        nickname = value;
      }

      break;
    }
    case "email": {
      if (!value.includes("@") || !value.includes(".")) {
        message[2].classList.replace("correct", "error");
        message[2].innerText = "올바른 메일 형식이 아닙니다!";
        email = undefined;
      } else {
        message[2].classList.replace("error", "correct");
        message[2].innerText = "올바른 메일 형식입니다!";
        email = value;
      }

      break;
    }
    case "password": {
      if (
        !pattern1.test(value) ||
        !pattern2.test(value) ||
        !pattern3.test(value)
      ) {
        message[3].classList.replace("correct", "error");
        message[3].innerText = "영어+숫자+특수문자를 조합하여 작성해주세요.";
        password = undefined;
      } else {
        message[3].classList.replace("error", "correct");
        message[3].innerText = "안전한 비밀번호입니다!";
        password = value;
      }

      break;
    }
    case "check_password": {
      if (!(value == password)) {
        message[4].classList.replace("correct", "error");
        message[4].innerText = "비밀번호가 일치하지 않습니다.";
        check_password = undefined;
      } else {
        message[4].classList.replace("error", "correct");
        message[4].innerText = "비밀번호가 일치합니다.";
        check_password = value;
      }

      break;
    }
  }
  if (username && nickname && email && password && check_password) {
    signup_button.disabled = false;
  } else {
    signup_button.disabled = true;
  }
}

let modal = document.querySelector(".modal_background");
let modal_close_btn = document.querySelector(".modal_close");
signup_button.addEventListener("click", () => {
  modal.style.display = "flex";
});
modal_close_btn.addEventListener("click", () => {
  modal.style.display = "none";
});
