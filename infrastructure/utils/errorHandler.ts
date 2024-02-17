type ErrorObject = {
  status_code: number;
  error: string;
};

export const errorHandler = (error: any): ErrorObject => {
  console.log(error);

  if (!error.response) return internalServerErrorBuilder();

  const errorParsed = JSON.parse(error.response.body);

  if (errorParsed.status.status_code === 404) return errorBuilder(errorParsed);
  if (errorParsed.status.status_code === 403) return errorBuilder(errorParsed);

  return internalServerErrorBuilder()
};

const errorBuilder = (error: any): ErrorObject => {
  return {
    status_code: error.status.status_code,
    error: error.status.message,
  };
};

const internalServerErrorBuilder = (): ErrorObject => {
  return {
    status_code: 500,
    error: "Internal Server Error",
  };
};

