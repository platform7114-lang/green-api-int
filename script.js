function showResponse(data) {
  document.getElementById('response').textContent =
    JSON.stringify(data, null, 2);
}

function getConfig() {
  return {
    idInstance: document.getElementById('idInstance').value,
    apiToken: document.getElementById('apiToken').value
  };
}

async function getSettings() {
  const { idInstance, apiToken } = getConfig();

  const res = await fetch(
    `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiToken}`
  );

  const data = await res.json();
  showResponse(data);
}

async function getState() {
  const { idInstance, apiToken } = getConfig();

  const res = await fetch(
    `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiToken}`
  );

  const data = await res.json();
  showResponse(data);
}

async function sendMessage() {
  const { idInstance, apiToken } = getConfig();

  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const res = await fetch(
    `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chatId: `${phone}@c.us`,
        message: message
      })
    }
  );

  const data = await res.json();
  showResponse(data);
}

async function sendFile() {
  const { idInstance, apiToken } = getConfig();

  const phone = document.getElementById('phoneFile').value;
  const url = document.getElementById('fileUrl').value;

  const res = await fetch(
    `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chatId: `${phone}@c.us`,
        urlFile: url,
        fileName: "file"
      })
    }
  );

  const data = await res.json();
  showResponse(data);
}