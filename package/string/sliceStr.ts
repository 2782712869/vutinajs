type SliceStr = (source: string, start: number, end?: number) => string;

const sliceStr: SliceStr = (source, start, end) => {
  return source.slice(start, end);
};

export default sliceStr;
