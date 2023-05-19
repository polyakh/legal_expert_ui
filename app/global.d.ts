type Params<T extends string> = {
    params: {
      [Key in T]: string;
    };
  };