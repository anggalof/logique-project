export function setLoginAuth(value) {
  localStorage.setItem("loginAuth", value);
}

export function getLoginAuth() {
  const loginUser =
    typeof window !== "undefined" ? localStorage.getItem("loginAuth") : null;
  return loginUser ? localStorage.loginAuth : {};
}

export function clearLoginAuth() {
  return localStorage.removeItem("loginAuth");
}
