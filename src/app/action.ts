"use server";
export async function sendMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const formData = {
    ...data,
    access_key: "5964b62c-b8e0-408d-bcae-28d8808c9c54",
  };

  const json = JSON.stringify(formData);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });
  const result = await response.json();
  if (result.success) {
    return true;
  } else return false;
}
