export default {
  ErrNotFound(message) {
    return {
      code: 404,
      message,
    };
  },
  ErrForbidden(message) {
    return {
      code: 403,
      message,
    };
  },
  ErrUnauthorized() {
    return {
      code: 401,
      message: "user is unauthorized",
    };
  },
  ErrServer(errorMessage) {
    console.error(errorMessage);
    return {
      code: 500,
      message: "server error",
    };
  },
};
