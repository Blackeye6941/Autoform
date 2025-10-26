export async function checkLoginStatus(loginOverlay) {
  try {
    const response = await fetch("/api/auth/status"); //get login stat from backend
    if (!response.ok) throw new Error("Auth check failed");

    const auth = await response.json();

    if (auth.loggedIn) {
      loginOverlay.classList.add("hidden");
      return true;
    } else {
      loginOverlay.classList.remove("hidden");
      return false;
    }
  } catch (error) {
    loginOverlay.classList.remove("hidden");
    return false;
  }
}
