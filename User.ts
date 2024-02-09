export type User = {
  fn: string;
  ln: string;
  e: string;
  p: string;
  pa: string;
};

function validateUser(user: User) {
  if (user.fn.length < 2) {
    return false;
  }

  if (user.ln.length < 2) {
    return false;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.e)) {
    return false;
  }

  if (
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(user.p)
  ) {
    return false;
  }

  if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(user.pa)) {
    return false;
  }

  return true;
}
