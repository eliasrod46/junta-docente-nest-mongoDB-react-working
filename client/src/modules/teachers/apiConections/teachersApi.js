const URI = "http://localhost:8080/api";

export const getAllTeachersApi = async () => {
  const teachers = await fetch(`${URI}/teachers`);
  const teachersJson = teachers.json();
  return teachersJson;
};

export const saveTeachersApi = async (data) => {
  const reponse = await fetch(`${URI}/teachers`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  const reponseJson = reponse.json();
  return reponseJson; //{ message: "success, Teacher added" }
};

export const updateTeachersApi = async (id, data) => {
  const reponse = await fetch(`${URI}/teachers/${id}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  const reponseJson = reponse.json();
  return reponseJson; //{ message: "success, Teacher added" }
};

export const deleteTeachersApi = async (id) => {
  const reponse = await fetch(`${URI}/teachers/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // mode: "cors", // no-cors, *cors, same-origin
    // credentials: "same-origin", // include, *same-origin, omit
    // redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });

  const reponseJson = reponse.json();
  return reponseJson; //{ message: "success, Teacher added" }
};
