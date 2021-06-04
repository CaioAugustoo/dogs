export const API_URL = "https://dogsapi.origamid.dev/json";

export type UserDataProps = {
  email: string;
  id: number;
  nome: string;
  username: string;
}

export type PhotosGetProps = {
  page: number;
  total: number;
  user: UserDataProps;
}

export const TOKEN_POST = (body: object) => {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_VALIDATE_POST = (token: string) => {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
};

export const USER_GET = (token: string) => {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
};

export const USER_POST = (body: object) => {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const PHOTO_POST = (formData: object, token: string) => {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
};

export const PHOTOS_GET = ({ page, total, user }: PhotosGetProps) => {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

export const PHOTO_GET = (id: number) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

export const COMMENT_POST = (id: number, body: object) => {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"), // apenas um exemplo
      },
      body: JSON.stringify(body),
    },
  };
};

export const PHOTO_DELETE = (id: number) => {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"), // apenas um exemplo
      },
    },
  };
};

export const PASSWORD_LOST = (body: object) => {
  return {
    url: API_URL + "/api/password/lost",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const PASSWORD_RESET = (body: object) => {
  return {
    url: API_URL + "/api/password/reset",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const GET_STATS = () => {
  return {
    url: API_URL + "/api/stats",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    },
  };
};
