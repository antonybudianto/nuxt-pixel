// @ts-ignore
import Cookies from "js-cookie";
import { useAuth } from "~/composables/states";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const cookiesToken = Cookies.get("access_token");

  const auth = useAuth();

  /**
   * Skip refetch if already in state?
   */
  // if (auth.value !== null) {
  //   console.log("already auth");
  //   return;
  // }

  console.log("checkauth: ", auth.value);

  try {
    const res = await fetch("https://xyz.net/api/mobile/v2.7/users/me", {
      method: "GET",
      headers: {
        Authorization: cookiesToken
      }
    });
    if (!res.ok) {
      console.error("middleware-auth/error:", res);
      throw new Error("error login");
    }
    const json = await res.json();
    auth.value = json.response;
  } catch (e) {
    return navigateTo("/login");
  }
});
