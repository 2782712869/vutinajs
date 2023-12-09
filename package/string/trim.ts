type Trim = (value: string) => string;

const trim: Trim = (value) => {
  return value.trim();
};

export default trim;
