const errorHandler = (error) => {
  console.log(error);

  if (!error.response) return internalServerErrorBuilder();

  const errorParsed = JSON.parse(error.response.body);

  if (errorParsed.status.status_code === 404) return errorBuilder(errorParsed);
  if (errorParsed.status.status_code === 403) return errorBuilder(errorParsed);
};

const errorBuilder = (error) => {
  return {
    status_code: error.status.status_code,
    error: error.status.message,
  };
};

const internalServerErrorBuilder = () => {
  return {
    status_code: 500,
    error: "Internal Server Error",
  };
};

module.exports = errorHandler;
