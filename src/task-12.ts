type Callback = (status: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

sendDoneStatus((message) => {
  console.log(message);
});
// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
